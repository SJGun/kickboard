package kb.report.domain;

import jakarta.persistence.*;
import lombok.*;
/**
 * 리포트 카테고리 Entity
 * @since JDK21
 * @author 채기훈
 */
@Entity
@Table(name = "ReportCategory")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReportCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(nullable = false)
    private String name;

    @Builder
    public ReportCategory(String name) {
        this.name = name;
    }
}