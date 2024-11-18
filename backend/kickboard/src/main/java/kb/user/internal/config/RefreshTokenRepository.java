package kb.user.internal.config;

import kb.user.internal.config.JwtProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.concurrent.TimeUnit;
/**
 * Refresh Token 저장소 구현
 * @since JDK21
 * @author 채기훈
 */
@Repository
@RequiredArgsConstructor
public class RefreshTokenRepository {
    private final RedisTemplate<String, String> redisTemplate;
    private final JwtProperties jwtProperties;

    public void save(String username, String refreshToken) {
        redisTemplate.opsForValue().set(
                "refresh:" + username,
                refreshToken,
                jwtProperties.getRefreshTokenValidityInSeconds(),
                TimeUnit.SECONDS
        );
    }

    public String findByUsername(String username) {
        return redisTemplate.opsForValue().get("refresh:" + username);
    }

    public void deleteByUsername(String username) {
        redisTemplate.delete("refresh:" + username);
    }
}