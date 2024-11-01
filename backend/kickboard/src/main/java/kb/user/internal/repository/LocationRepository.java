// kb/user/internal/repository/LocationRepository.java
package kb.user.internal.repository;

import kb.user.internal.domain.Location;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 지역(구) 레포지토리를 위한 Spring Data JPA
 * @since JDK21
 * @author 채기훈
 */
public interface LocationRepository extends JpaRepository<Location, String> {
}