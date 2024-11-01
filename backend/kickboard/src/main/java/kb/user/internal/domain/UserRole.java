package kb.user.internal.domain;

/**
 * 사용자 Role Enum
 * @since JDK21
 * @author 채기훈
 */
public enum UserRole {
    GOVERNMENT_OFFICIAL("공무원"),
    COLLECTION_COMPANY("수거업체");

    private final String description;

    UserRole(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}