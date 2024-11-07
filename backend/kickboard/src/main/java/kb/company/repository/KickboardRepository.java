package kb.company.repository;

import kb.company.domain.Kickboard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface KickboardRepository extends JpaRepository<Kickboard, Long> {
    Optional<Kickboard> findBySerialNumber(String serialNumber);
}
