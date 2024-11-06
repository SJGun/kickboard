package kb.report.internal.service;

import jakarta.persistence.EntityNotFoundException;
import kb.company.domain.Kickboard;
import kb.company.repository.KickboardRepository;
import kb.core.service.FileService;
import kb.report.api.request.ReportCreateRequest;
import kb.report.internal.domain.Report;
import kb.report.internal.domain.ReportCategory;
import kb.report.internal.domain.ReportStatus;
import kb.report.internal.repository.ReportCategoryRepository;
import kb.report.internal.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;
    private final KickboardRepository kickboardRepository;
    private final ReportCategoryRepository reportCategoryRepository;
    private final FileService fileService;


    @Transactional
    public String createReport(ReportCreateRequest reportRequest, MultipartFile[] images) {
        // 킥보드 정보를 가져오거나 없을 경우 예외 처리
        Kickboard kickboard = kickboardRepository.findBySerialNumber(reportRequest.getSerialNumber())
                .orElseThrow(() -> new EntityNotFoundException("해당하는 킥보드가 존재하지 않습니다."));

        // 신고 카테고리를 ID로 조회하여 없을 경우 예외 처리
        ReportCategory category = reportCategoryRepository.findById(reportRequest.getCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("해당하는 신고 카테고리가 존재하지 않습니다."));

        // 주소에서 '구' 정보를 추출하여 key에 설정
        String district = extractDistrict(reportRequest.getAddress());

        // 이미지 URL 처리
        String photoUrl = processImages(images);

        // 신고 생성 및 저장
        Report report = Report.builder()
                .kickboard(kickboard)
                .key(district)  // '구' 정보로 key 설정
                .category(category)
                .address(reportRequest.getAddress())
                .longitude(reportRequest.getLongitude())
                .latitude(reportRequest.getLatitude())
                .photoUrl(photoUrl)
                .content(reportRequest.getDescription())
                .status(ReportStatus.REPORT_RECEIVED)  // 기본 상태 설정
                .build();

        Report savedReport = reportRepository.save(report);

        // 응답 생성
        return "정상 신고 처리되었습니다.";
    }

    private String extractDistrict(String address) {
        Pattern pattern = Pattern.compile("([가-힣]+구)"); // '구'를 포함하는 패턴 정의
        Matcher matcher = pattern.matcher(address);
        return matcher.find() ? matcher.group(1) : "알수없음"; // '구' 정보가 없으면 기본값 반환
    }


    private String processImages(MultipartFile[] images) {
        if (images == null || images.length == 0) {
            return null; // 이미지가 없을 경우 null 반환
        }

        StringBuilder photoUrlBuilder = new StringBuilder();

        for (int i = 0; i < Math.min(images.length, 2); i++) {
            String imageUrl = fileService.uploadFile(images[i]);
            photoUrlBuilder.append(imageUrl);
            if (i == 0 && images.length > 1) {
                photoUrlBuilder.append(","); // 두 번째 URL과 구분하기 위해 쉼표 추가
            }
        }

        return photoUrlBuilder.toString(); // URL이 하나 또는 두 개 합쳐진 결과 반환
    }



}
