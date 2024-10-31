// kb/user/api/UserController.java
package kb.user.api;

import jakarta.validation.Valid;
import kb.user.api.request.UserCreateRequest;
import kb.user.api.response.UserResponse;
import kb.user.internal.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
/**
 * 유저 컨트롤러 구현
 * @since JDK21
 * @author 채기훈
 */
@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ResponseEntity<UserResponse> createUser(
            @Valid @RequestBody UserCreateRequest request) {
        return ResponseEntity.ok(userService.createUser(request));
    }

    @GetMapping("/{key}")
    public ResponseEntity<UserResponse> getUser(@PathVariable String key) {
        return ResponseEntity.ok(userService.findUserByKey(key));
    }
}