package kb.report.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import kb.report.api.request.ReportCreateRequest;
import kb.report.api.response.ReportResponse;
import kb.report.internal.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/kickboard/reports")
@RequiredArgsConstructor
public class ReportController {
    private final ReportService reportService;

    @Operation(summary = "신고자 신고 등록", description = "신고자가 킥보드 불법 주차를 신고합니다.")
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "신고 등록 성공",
                    content = @Content(schema = @Schema(implementation = ReportResponse.class))
            ),
            @ApiResponse(responseCode = "400", description = "잘못된 요청"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
    })
    @PostMapping
    public ResponseEntity<?> createReport(
            @Parameter(description = "신고 정보", required = true, content = @Content(mediaType = "application/json", schema = @Schema(implementation = ReportCreateRequest.class)))
            @RequestPart("report") ReportCreateRequest report,
            @Parameter(description = "신고 사진 (최대 2장)", required = false)
            @RequestPart(value = "image", required = false) MultipartFile[] images) {

        ReportResponse response = reportService.createReport(report, images);
        return ResponseEntity.ok(kb.core.dto.ApiResponse.success(response));
    }


}
