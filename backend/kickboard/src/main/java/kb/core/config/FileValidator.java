package kb.core.config;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

/**
 * 파일 검증 Validator
 * @since JDK21
 * @author 채기훈
 */
@Component
public class FileValidator {
    private static final List<String> ALLOWED_EXTENSIONS = Arrays.asList("jpg", "jpeg", "png");
    private static final long MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    private static final String IMAGE_CONTENT_TYPE_PREFIX = "image/";

    public void validate(MultipartFile file) {
        // 빈 파일 체크
        if (file.isEmpty()) {
            throw new InvalidFileException("파일이 비어있습니다.");
        }

        // 파일명 체크
        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || originalFilename.isEmpty()) {
            throw new InvalidFileException("파일명이 비어있습니다.");
        }

        // 파일 확장자 체크
        String extension = getExtension(originalFilename).toLowerCase();
        if (!ALLOWED_EXTENSIONS.contains(extension)) {
            throw new InvalidFileException("지원하지 않는 파일 형식입니다. 지원 형식: " + ALLOWED_EXTENSIONS);
        }

        // Content Type 체크
        String contentType = file.getContentType();
        if (contentType == null || !contentType.startsWith(IMAGE_CONTENT_TYPE_PREFIX)) {
            throw new InvalidFileException("이미지 파일만 업로드 가능합니다.");
        }

        // 파일 크기 체크 (추가적인 안전장치)
        if (file.getSize() > MAX_FILE_SIZE) {
            throw new InvalidFileException("파일 크기가 너무 큽니다. 최대 크기: 10MB");
        }

        // 파일 내용 검증 (실제 이미지 파일인지 체크)
        try {
            BufferedImage image = ImageIO.read(file.getInputStream());
            if (image == null) {
                throw new InvalidFileException("유효하지 않은 이미지 파일입니다.");
            }
        } catch (IOException e) {
            throw new InvalidFileException("이미지 파일 검증 중 오류가 발생했습니다.");
        }
    }

    private String getExtension(String filename) {
        try {
            return filename.substring(filename.lastIndexOf(".") + 1);
        } catch (StringIndexOutOfBoundsException e) {
            throw new InvalidFileException("잘못된 파일명 형식입니다.");
        }
    }
}