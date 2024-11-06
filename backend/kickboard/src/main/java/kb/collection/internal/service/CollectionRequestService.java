// kb/collection/internal/service/CollectionRequestService.java
package kb.collection.internal.service;

import kb.collection.api.request.CollectionRequestCreateRequest;
import kb.collection.api.response.CollectionRequestResponse;
import kb.collection.internal.domain.CollectionRequest;
import kb.collection.internal.domain.CollectionStatus;
import kb.collection.internal.repository.CollectionRequestRepository;
import kb.core.service.FileService;
import kb.report.internal.domain.Report;
import kb.report.internal.domain.ReportStatus;
import kb.report.internal.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.orm.ObjectOptimisticLockingFailureException;

import org.springframework.retry.annotation.Backoff;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * 수거 요청 서비스
 * @since JDK21
 * @author 채기훈
 */
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CollectionRequestService {
    private final CollectionRequestRepository collectionRequestRepository;
    private final ReportRepository reportRepository;
    private final FileService fileService;  // 파일 업로드 서비스

    @Transactional
    public CollectionRequestResponse createRequest(CollectionRequestCreateRequest request) {
        Report report = reportRepository.findById(request.reportId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 신고입니다."));

        String photoUrl = null;
        if (request.photo() != null) {
            photoUrl = fileService.uploadFile(request.photo());
        }

        CollectionRequest collectionRequest = CollectionRequest.builder()
                .report(report)
                .photoUrl(photoUrl)
                .build();

        report.updateStatus(ReportStatus.COLLECT_RECEIVED);

        return CollectionRequestResponse.from(collectionRequestRepository.save(collectionRequest));
    }

    @Transactional
    @Retryable(
            value = ObjectOptimisticLockingFailureException.class,
            maxAttempts = 3,
            backoff = @Backoff(delay = 500)
    )
    public CollectionRequestResponse updateStatus(Long requestId, CollectionStatus newStatus) {
        CollectionRequest request = collectionRequestRepository.findByIdWithOptimisticLock(requestId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 수거 요청입니다."));

        request.updateStatus(newStatus);

        if (newStatus == CollectionStatus.COLLECT_COMPLETED) {
            request.getReport().updateStatus(ReportStatus.COLLECT_COMPLETED);
        }

        return CollectionRequestResponse.from(request);
    }

    public CollectionRequestResponse getRequest(Long requestId) {
        return CollectionRequestResponse.from(collectionRequestRepository.findById(requestId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 수거 요청입니다.")));
    }

    public List<CollectionRequestResponse> getRequestsByStatus(CollectionStatus status) {
        return collectionRequestRepository.findByStatus(status).stream()
                .map(CollectionRequestResponse::from)
                .toList();
    }
}