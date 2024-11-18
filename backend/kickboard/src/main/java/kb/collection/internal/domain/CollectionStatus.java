package kb.collection.internal.domain;

/**
 * 수거 상태 Enum
 * @since JDK21
 * @author 채기훈
 */
public enum CollectionStatus {
    COLLECT_RECEIVED("접수"),
    COLLECT_PROGRESS("수거중"),
    COLLECT_COMPLETED("수거완료");

    private final String description;

    CollectionStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}