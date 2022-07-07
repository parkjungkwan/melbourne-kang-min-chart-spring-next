package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

/**
 * packageName    : com.example.demo
 * fileName       : DemoServiceImpl
 * author         : j2022
 * date           : 2022-07-06
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-06        j2022       최초 생성
 */
@Service @RequiredArgsConstructor
public class DemoServiceImpl implements DemoService {
    private final DemoRepository repository;

    public List<Earning> findAll() {
        //Arrays.asList()
        return repository.findAll();
    }
}
