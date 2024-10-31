// kb/user/api/response/UserResponse.java
package kb.user.api.response;

import kb.user.internal.domain.User;
import kb.user.internal.domain.UserRole;
/**
 * 유저 정보 응답 DTO
 * @since JDK21
 * @author 채기훈
 */
public record UserResponse(
        Long userId,
        String email,
        UserRole role,
        String key
) {
    public static UserResponse from(User user) {
        return new UserResponse(
                user.getUserId(),
                user.getEmail(),
                user.getRole(),
                user.getKey()
        );
    }
}