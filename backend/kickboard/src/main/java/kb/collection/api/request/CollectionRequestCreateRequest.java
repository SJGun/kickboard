package kb.collection.api.request;

import jakarta.validation.constraints.NotNull;
import org.springframework.web.multipart.MultipartFile;

/**
 * 수거 요청 DTO
 * @since JDK21
 * @author 채기훈
 */
public record CollectionRequestCreateRequest(
        @NotNull(message = "신고 ID는 필수입니다.")
        Long reportId,

        MultipartFile photo
) {}