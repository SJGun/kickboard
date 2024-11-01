// kb/user/api/request/UserCreateRequest.java
package kb.user.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import kb.user.internal.domain.UserRole;

/**
 * 유저 회원가입 요청 DTO
 * @since JDK21
 * @author 채기훈
 */
@Schema(description = "사용자 생성 요청")
public record UserCreateRequest(
        @Schema(description = "이메일", example = "user@example.com")
        @Email(message = "올바른 이메일 형식이 아닙니다.")
        @NotBlank(message = "이메일은 필수입니다.")
        String email,

        @Schema(description = "비밀번호", example = "password123")
        @NotBlank(message = "비밀번호는 필수입니다.")
        String password,

        @Schema(description = "사용자 역할", example = "GOVERNMENT_OFFICIAL")
        @NotNull(message = "역할은 필수입니다.")
        UserRole role,

        @Schema(description = "지역 키", example = "GANGNAM")
        @NotNull(message = "지역은 필수입니다.")
        String locationKey
) {}