package kb.company.domain;// kb/company/internal/domain/Company.java


import jakarta.persistence.*;

import kb.core.domain.BaseEntity;
import lombok.*;
/**
 * 킥보드 업체 Entity
 * @since JDK21
 * @author 채기훈
 */
@Entity
@Table(name = "Companies")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Company extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long companyId;

    @Column(nullable = false)
    private String name;

    @Builder
    public Company(String name) {
        this.name = name;
    }
}