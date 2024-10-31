// kb/user/api/request/UserCreateRequest.java
package kb.user.api.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import kb.user.internal.domain.UserRole;

/**
 * 유저 회원가입 요청 DTO
 * @since JDK21
 * @author 채기훈
 */
public record UserCreateRequest(
        @Email(message = "올바른 이메일 형식이 아닙니다.")
        @NotBlank(message = "이메일은 필수입니다.")
        String email,

        @NotBlank(message = "비밀번호는 필수입니다.")
        String password,

        @NotNull(message = "역할은 필수입니다.")
        UserRole role
) {}