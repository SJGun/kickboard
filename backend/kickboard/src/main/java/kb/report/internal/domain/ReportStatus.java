package kb.report.internal.domain;
/**
 * 리포트 상태 Enum
 * @since JDK21
 * @author 채기훈
 */
public enum ReportStatus {
    REPORT_RECEIVED("신고접수"),
    COLLECT_RECEIVED("수거접수"),
    COLLECT_PROGRESS("수거중"),
    COLLECT_COMPLETED("수거완료"),
    REPORT_COMPLETED("신고처리완료");

    private final String description;

    ReportStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}