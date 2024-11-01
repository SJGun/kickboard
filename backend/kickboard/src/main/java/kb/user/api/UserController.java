package kb.user.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.Valid;
import kb.user.api.request.UserCreateRequest;
import kb.user.api.response.UserResponse;
import kb.user.internal.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "User", description = "사용자 API")
@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @Operation(summary = "사용자 생성", description = "새로운 사용자를 생성합니다.")
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "사용자 생성 성공",
                    content = @Content(schema = @Schema(implementation = UserResponse.class))
            ),
            @ApiResponse(responseCode = "400", description = "잘못된 요청"),
            @ApiResponse(responseCode = "409", description = "이미 존재하는 이메일")
    })
    @PostMapping
    public ResponseEntity<UserResponse> createUser(
            @Valid @RequestBody UserCreateRequest request) {
        return ResponseEntity.ok(userService.createUser(request));
    }

    @Operation(summary = "사용자 조회", description = "사용자 키로 사용자 정보를 조회합니다.")
    @ApiResponses({
            @ApiResponse(
                    responseCode = "200",
                    description = "사용자 조회 성공",
                    content = @Content(schema = @Schema(implementation = UserResponse.class))
            ),
            @ApiResponse(responseCode = "404", description = "사용자를 찾을 수 없음")
    })
    @GetMapping("/{key}")
    public ResponseEntity<UserResponse> getUser(
            @Parameter(description = "사용자 키", required = true)
            @PathVariable String key) {
        return ResponseEntity.ok(userService.findUserByKey(key));
    }
}






