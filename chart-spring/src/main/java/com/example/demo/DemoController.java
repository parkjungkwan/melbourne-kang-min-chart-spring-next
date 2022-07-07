package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
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
    private final DemoService service;
    @GetMapping("/api/chart")
    public List<Earning> findAll(){

        return service.findAll();
    }
}
