// kb/user/internal/service/UserService.java
package kb.user.internal.service;

import kb.user.api.request.UserCreateRequest;
import kb.user.api.response.UserResponse;
import kb.user.internal.domain.User;
import kb.user.internal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

/**
 * 유저 Service 레이어 구현
 * @since JDK21
 * @author 채기훈
 */
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UserResponse createUser(UserCreateRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }

        User user = User.builder()
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(request.role())
                .key(generateUserKey())
                .build();

        User savedUser = userRepository.save(user);
        return UserResponse.from(savedUser);
    }

    private String generateUserKey() {
        return UUID.randomUUID().toString();
    }

    public UserResponse findUserByKey(String key) {
        User user = userRepository.findByKey(key)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자입니다."));
        return UserResponse.from(user);
    }
}