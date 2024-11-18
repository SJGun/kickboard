// kb/user/internal/service/UserService.java
package kb.user.internal.service;

import jakarta.persistence.EntityNotFoundException;
import kb.user.api.request.UserCreateRequest;
import kb.user.api.response.UserResponse;
import kb.user.internal.domain.Location;
import kb.user.internal.domain.User;
import kb.user.internal.repository.LocationRepository;
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
    private final LocationRepository locationRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UserResponse createUser(UserCreateRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }

        Location location = getLocation(request.locationId());

        User user = User.builder()
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(request.role())
                .location(location)
                .build();

        User savedUser = userRepository.save(user);
        return UserResponse.from(savedUser);
    }

    private String generateUserKey() {
        return UUID.randomUUID().toString();
    }

    public UserResponse findUser(int id){
        User user = userRepository.findByUserId(id).orElseThrow(()-> new EntityNotFoundException("해당하는 유저가 없습니다."));
        return UserResponse.from(user);
    }

    private Location getLocation(int id){
        Location location = locationRepository.findById(id).orElseThrow(()->new EntityNotFoundException("해당하는 지역이 존재하지 않습니다."));
        return location;
    }
}