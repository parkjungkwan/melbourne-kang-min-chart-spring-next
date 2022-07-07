package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service @RequiredArgsConstructor
public class DemoServiceImpl implements DemoService{
    private final DemoRepository repository;
    @Override
    public List<Earning> finaAll() {
        return repository.findAll();
    }
}
