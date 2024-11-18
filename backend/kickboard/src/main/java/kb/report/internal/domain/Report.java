package kb.report.internal.domain;// kb/report/internal/domain/Report.java


import jakarta.persistence.*;

import kb.company.domain.Kickboard;
import kb.core.domain.BaseEntity;
import kb.user.internal.domain.Location;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "locationId")
    private Location location;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoryId")
    private ReportCategory category;

    private String address;

    private Double longitude;
    private Double latitude;

    private String photoUrl;

    @Enumerated(EnumType.STRING)
    private ReportStatus status;

    private String content;

    @Builder
    public Report(Kickboard kickboard, Location location, ReportCategory category, String address,
                  Double longitude, Double latitude, String photoUrl,
                  ReportStatus status, String content) {
        this.kickboard = kickboard;
        this.location = location;
        this.category = category;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.photoUrl = photoUrl;
        this.status = status;
        this.content = content;
    }

    public void updateStatus(ReportStatus status) {
        this.status = status;
    }
}