package kb.report.internal.repository;

import kb.report.internal.domain.Report;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 * 신고 레포지토리
 * @since JDK21
 * @author 채기훈
 */
public interface ReportRepository extends JpaRepository<Report, Long> {
}
