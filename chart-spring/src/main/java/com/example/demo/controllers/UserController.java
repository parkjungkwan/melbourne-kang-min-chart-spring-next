package com.example.demo.controllers;

import com.example.demo.domains.UserDTO;
import com.example.demo.services.DemoService;
import com.example.demo.repositories.UserRepository;
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
@RestController
@RequiredArgsConstructor
public class UserController {
    private final DemoService service;
    private final UserRepository repository;

    @PostMapping(value = "/getToken")
    public void getToken(@RequestBody UserDTO userDTO) throws Exception{
        service.save1(userDTO);
    }
}
