// kb/user/internal/repository/UserRepository.java
package kb.user.internal.repository;

import kb.user.internal.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * 유저 Repository 구현을 위한 Spring Data JPA
 * @since JDK21
 * @author 채기훈
 */
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByKey(String key);
    boolean existsByEmail(String email);
}