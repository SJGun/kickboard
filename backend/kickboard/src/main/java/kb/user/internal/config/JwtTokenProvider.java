// kb/user/internal/security/jwt/JwtTokenProvider.java
package kb.user.internal.config;

import io.jsonwebtoken.*;
import kb.user.internal.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;

/**
 *  JWT 토큰 생성자
 * @since JDK21
 * @author 채기훈
 */
@Component
@RequiredArgsConstructor
public class JwtTokenProvider {
    private final JwtProperties jwtProperties;

    public JwtToken createToken(User user) {
        Claims claims = Jwts.claims().setSubject(user.getEmail());
        claims.put("role", user.getRole().name());
        claims.put("locationId", user.getLocation().getLocationId());

        Date now = new Date();

        String accessToken = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + jwtProperties.getAccessTokenValidityInSeconds() * 1000))
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey())
                .compact();

        String refreshToken = Jwts.builder()
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + jwtProperties.getRefreshTokenValidityInSeconds() * 1000))
                .signWith(SignatureAlgorithm.HS256, jwtProperties.getSecretKey())
                .compact();

        return new JwtToken(accessToken, refreshToken);
    }

    public Authentication getAuthentication(String token) {
        Claims claims = parseClaims(token);

        Collection<? extends GrantedAuthority> authorities =
                Collections.singleton(new SimpleGrantedAuthority("ROLE_" + claims.get("role", String.class)));

        return new JwtAuthentication(token, claims.getSubject(), authorities);
    }



    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(jwtProperties.getSecretKey())
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public Claims parseClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(jwtProperties.getSecretKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}