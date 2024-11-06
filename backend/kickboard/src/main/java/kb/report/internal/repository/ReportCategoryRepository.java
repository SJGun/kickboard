package kb.report.internal.repository;

import kb.report.internal.domain.ReportCategory;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 신고 카테고리 리포지토리
 * @since JDK21
 * @author 지예찬
 */
public interface ReportCategoryRepository extends JpaRepository<ReportCategory, Long> {
}
