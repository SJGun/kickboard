// kb/core/api/FileController.java
package kb.core.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import kb.core.api.response.FileResponse;
import kb.core.config.FileValidator;
import kb.core.dto.ApiResponse;

import kb.core.service.FileService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * 파일 관리(테스트) 컨트롤러
 * @since JDK21
 * @author 채기훈
 */
@Tag(name = "File", description = "파일 업로드 API")
@RestController
@RequestMapping("/api/v1/files")
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;
    private final FileValidator fileValidator;

    @Operation(summary = "단일 파일 업로드", description = "이미지 파일을 업로드합니다.")
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<FileResponse>> uploadFile(
            @Parameter(description = "업로드할 파일", required = true)
            @RequestParam("file") MultipartFile file) {
        fileValidator.validate(file);
        String fileUrl = fileService.uploadFile(file);
        return ResponseEntity.ok(ApiResponse.success(new FileResponse(fileUrl)));
    }

    @Operation(summary = "다중 파일 업로드", description = "여러 이미지 파일을 업로드합니다.")
    @PostMapping(value = "/multiple", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<List<FileResponse>>> uploadMultipleFiles(
            @Parameter(description = "업로드할 파일들", required = true)
            @RequestParam("files") List<MultipartFile> files) {
        List<FileResponse> responses = files.stream()
                .map(file -> {
                    fileValidator.validate(file);
                    return new FileResponse(fileService.uploadFile(file));
                })
                .toList();
        return ResponseEntity.ok(ApiResponse.success(responses));
    }

    @Operation(summary = "파일 삭제", description = "업로드된 파일을 삭제합니다.")
    @DeleteMapping
    public ResponseEntity<ApiResponse<Void>> deleteFile(
            @Parameter(description = "삭제할 파일 URL", required = true)
            @RequestParam String fileUrl) {
        fileService.deleteFile(fileUrl);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}

