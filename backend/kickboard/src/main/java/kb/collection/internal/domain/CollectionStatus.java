package kb.collection.internal.domain;

/**
 * 수거 상태 Enum
 * @since JDK21
 * @author 채기훈
 */
public enum CollectionStatus {
    RECEIVED("접수"),
    IN_PROGRESS("수거중"),
    COMPLETED("수거완료");

    private final String description;

    CollectionStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}