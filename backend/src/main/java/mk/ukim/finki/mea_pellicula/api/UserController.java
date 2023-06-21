package mk.ukim.finki.mea_pellicula.api;

import mk.ukim.finki.mea_pellicula.model.User;
import mk.ukim.finki.mea_pellicula.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public User login(@RequestParam(name = "email") String email,
                      @RequestParam(name = "password") String password) {
        return userService.login(email, password);
    }

    @PostMapping("/register")
    public Map<String, String> register(@RequestParam(name = "firstName") String firstName,
                                        @RequestParam(name = "lastName") String lastName,
                                        @RequestParam(name = "age") Integer age,
                                        @RequestParam(name = "gender") Character gender,
                                        @RequestParam(name = "email") String email,
                                        @RequestParam(name = "password") String password) {
        return Map.of("message", userService.register(firstName, lastName, age, gender, email, password));
    }
}
