// kb/user/internal/security/jwt/JwtToken.java
package kb.user.internal.config;
/**
 * Jwt 토큰 DTO
 * @since JDK21
 * @author 채기훈
 */
public record JwtToken(
        String accessToken,
        String refreshToken
) {}