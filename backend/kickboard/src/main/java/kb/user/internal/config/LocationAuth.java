package kb.user.internal.config;

import java.lang.annotation.*;

/**
 * 인증 AOP 구현
 * @since JDK21
 * @author 채기훈
 */
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface LocationAuth {}