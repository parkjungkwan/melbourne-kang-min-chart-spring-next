package com.example.demo.earnings.services;

import com.example.demo.earnings.domains.Earning;
import com.example.demo.earnings.repositories.EarningRepository;
import com.example.demo.earnings.services.EarningService;
import com.example.demo.users.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName    : com.example.demo
 * fileName       :
 * author         : j2022
 * date           : 2022-07-06
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-06        j2022       최초 생성
 */
@Service @RequiredArgsConstructor
public class EarningServiceImpl implements EarningService {
    private final EarningRepository repository;
    private final UserRepository userRepository;
    //private final ModelMapper modelMapper;

    @Override
    public List<Earning> findAll() {
        return repository.findAll();
    }



}