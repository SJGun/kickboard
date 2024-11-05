package kb.core.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.apache.tomcat.util.http.fileupload.InvalidFileNameException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

/**
 * 파일 업로드 서비스
 * @since JDK21
 * @author 채기훈
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class FileService {

    private final AmazonS3 amazonS3;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    /**
     * 파일을 S3에 업로드하고 URL을 반환
     * @param file 업로드할 파일
     * @return 업로드된 파일의 URL
     */
    public String uploadFile(MultipartFile file) {
        String fileName = createFileName(file.getOriginalFilename());
        ObjectMetadata metadata = createMetadata(file);

        try (InputStream inputStream = file.getInputStream()) {
            amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, metadata));
            return amazonS3.getUrl(bucket, fileName).toString();
        } catch (IOException e) {
            throw new EntityNotFoundException("파일 업로드 중 오류가 발생했습니다.", e);
        }
    }

    /**
     * 파일 삭제
     * @param fileUrl 삭제할 파일의 URL
     */
    public void deleteFile(String fileUrl) {
        try {
            String fileName = extractFileNameFromUrl(fileUrl);
            amazonS3.deleteObject(bucket, fileName);
        } catch (Exception e) {
            log.error("파일 삭제 중 오류 발생: {}", fileUrl, e);
            throw new EntityNotFoundException("파일 삭제 중 오류가 발생했습니다.", e);
        }
    }

    /**
     * 유니크한 파일명 생성
     */
    private String createFileName(String originalFileName) {
        return UUID.randomUUID().toString() + getFileExtension(originalFileName);
    }

    /**
     * 파일 메타데이터 생성
     */
    private ObjectMetadata createMetadata(MultipartFile file) {
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());
        metadata.setContentType(file.getContentType());
        return metadata;
    }

    /**
     * 파일 확장자 추출
     */
    private String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new EntityNotFoundException("잘못된 형식의 파일명입니다.");
        }
    }

    /**
     * URL에서 파일명 추출
     */
    private String extractFileNameFromUrl(String fileUrl) {
        return fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
    }
}