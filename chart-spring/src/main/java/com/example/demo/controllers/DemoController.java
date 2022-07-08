package com.example.demo.controllers;

import com.example.demo.domains.MapInfo;
import com.example.demo.services.DemoService;
import com.example.demo.domains.Earning;
import com.example.demo.domains.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;

/**
 * packageName: com.example.demo
 * fileName   : Controller
 * author     : parkjungkwan
 * date       : 2022-07-05
 * desc       :
 * ================================
 * DATE        AUTHOR        NOTE
 * ================================
 * 2022-07-05   parkjungkwan  최초 생성
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
public class DemoController {
    private final DemoService demoService;

    @GetMapping("/api/chart")
    public List<Earning> findAll() {
        return demoService.findAll();
    }

}
