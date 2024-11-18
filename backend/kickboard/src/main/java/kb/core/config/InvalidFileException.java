package kb.core.config;
/**
 * 커스텀 예외 처리
 * @since JDK21
 * @author 채기훈
 */
public class InvalidFileException extends RuntimeException {
    public InvalidFileException(String message) {
        super(message);
    }
}