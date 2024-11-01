// kb/user/api/response/UserResponse.java
package kb.user.api.response;

import io.swagger.v3.oas.annotations.media.Schema;
import kb.user.internal.domain.User;
import kb.user.internal.domain.UserRole;
/**
 * 유저 정보 응답 DTO
 * @since JDK21
 * @author 채기훈
 */
// UserResponse에도 Swagger 문서화 추가
@Schema(description = "사용자 응답")
public record UserResponse(
        @Schema(description = "사용자 ID")
        Long userId,

        @Schema(description = "이메일")
        String email,

        @Schema(description = "사용자 역할")
        UserRole role,

        @Schema(description = "사용자 키")
        String key,

        @Schema(description = "지역 정보")
        LocationResponse location
) {
    public static UserResponse from(User user) {
        return new UserResponse(
                user.getUserId(),
                user.getEmail(),
                user.getRole(),
                user.getKey(),
                user.getLocation() != null ? new LocationResponse(
                        user.getLocation().getLocationId(),
                        user.getLocation().getName()
                ) : null
        );
    }
}