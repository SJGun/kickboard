package kb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

/**
 * 모듈형 모놀리식 환경설정
 * @since JDK21
 * @author 채기훈
 */
@SpringBootApplication
@ConfigurationPropertiesScan
public class KbApplication {

	public static void main(String[] args) {
		SpringApplication.run(KbApplication.class, args);
	}

}
