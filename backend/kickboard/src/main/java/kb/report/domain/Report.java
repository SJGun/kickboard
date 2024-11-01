package kb.report.domain;// kb/report/internal/domain/Report.java


import jakarta.persistence.*;

import kb.company.domain.Kickboard;
import kb.core.domain.BaseEntity;
import lombok.*;
/**
 * 리포트 Entity
 * @since JDK21
 * @author 채기훈
 */
@Entity
@Table(name = "Reports")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Report extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reportId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "kickboardId")
    private Kickboard kickboard;

    @Column(name = "Key", nullable = false)
    private String key;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoryId")
    private ReportCategory category;

    private Double longitude;
    private Double latitude;

    private String photoUrl;

    @Enumerated(EnumType.STRING)
    private ReportStatus status;

    private String content;

    @Builder
    public Report(Kickboard kickboard, String key, ReportCategory category,
                  Double longitude, Double latitude, String photoUrl,
                  ReportStatus status, String content) {
        this.kickboard = kickboard;
        this.key = key;
        this.category = category;
        this.longitude = longitude;
        this.latitude = latitude;
        this.photoUrl = photoUrl;
        this.status = status;
        this.content = content;
    }
}