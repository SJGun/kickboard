// kb/core/dto/ErrorResponse.java
package kb.core.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
/**
 * 공통 에러 형식 반환 설정
 * @since JDK21
 * @author 채기훈
 */
@Getter
@AllArgsConstructor
public class ErrorResponse {
    private String code;
    private String message;
}