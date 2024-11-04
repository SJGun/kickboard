package kb.user.api.response;

/**
 * 토큰 DTO
 * @since JDK21
 * @author 채기훈
 */
public record TokenResponse(
        String accessToken,
        String refreshToken
) {}