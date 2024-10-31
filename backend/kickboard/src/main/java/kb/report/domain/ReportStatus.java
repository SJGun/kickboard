package kb.report.domain;
/**
 * 리포트 상태 Enum
 * @since JDK21
 * @author 채기훈
 */
public enum ReportStatus {
    RECEIVED("신고접수"),
    IN_PROGRESS("처리중"),
    COLLECTION_REQUESTED("수거요청"),
    COLLECTED("수거완료"),
    COMPLETED("처리완료");

    private final String description;

    ReportStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}