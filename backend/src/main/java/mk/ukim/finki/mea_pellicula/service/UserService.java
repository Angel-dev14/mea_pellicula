package mk.ukim.finki.mea_pellicula.service;

import mk.ukim.finki.mea_pellicula.model.User;
import mk.ukim.finki.mea_pellicula.repo.UserRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final JdbcTemplate jdbcTemplate;

    public UserService(UserRepository userRepository, JdbcTemplate jdbcTemplate) {
        this.userRepository = userRepository;
        this.jdbcTemplate = jdbcTemplate;
    }

    public User login(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public String register(String firstName, String lastName, Integer age, Character gender, String email, String password) {
        String procedureCall = "CALL register_customer(?, ?, ?, ?, ?, ?)";
        try {
            jdbcTemplate.update(procedureCall, firstName, lastName, age, gender, email, password);
            return "Success";
        } catch (Exception e) {
            return e.getMessage().substring(e.getMessage().indexOf("ERROR:"), e.getMessage().indexOf("Where: PL/pgSQL"));
        }
    }
}
