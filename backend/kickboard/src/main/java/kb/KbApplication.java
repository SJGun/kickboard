package kb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * 모듈형 모놀리식 환경설정
 * @since JDK21
 * @author 채기훈
 */
@SpringBootApplication
@ConfigurationPropertiesScan
@EnableJpaAuditing
public class KbApplication {

	public static void main(String[] args) {
		SpringApplication.run(KbApplication.class, args);
	}

}
