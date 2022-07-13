package com.example.demo.users.controllers;

import com.example.demo.users.services.UserService;
import com.example.demo.users.domains.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * packageName    : com.example.demo.controllers
 * fileName       : UserController
 * author         : kimyunseop
 * date           : 2022-07-07
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-07        kimyunseop       최초 생성
 */
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping(value = "/getToken")
    public void getToken(@RequestBody User user) throws Exception{
        service.save1(user);
    }
}
