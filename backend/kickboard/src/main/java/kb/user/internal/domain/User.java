package kb.user.internal.domain;

import jakarta.persistence.*;
import kb.core.domain.BaseEntity;
import lombok.*;

/**
 * 사용자 Entity
 * @since JDK21
 * @author 채기훈
 */
@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Long userId;


    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserRole role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "locationId", referencedColumnName = "locationId")
    private Location location;

    @Builder
    public User(String email, String password, UserRole role, Location location) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.location = location;
    }
}