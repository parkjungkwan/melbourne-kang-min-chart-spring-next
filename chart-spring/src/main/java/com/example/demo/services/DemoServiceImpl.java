package com.example.demo.services;

import com.example.demo.domains.Earning;
import com.example.demo.domains.User;
import com.example.demo.domains.UserDTO;
import com.example.demo.repositories.DemoRepository;
import com.example.demo.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
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
public class DemoServiceImpl implements DemoService {
    private final DemoRepository repository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<Earning> finaAll() {
        return repository.findAll();
    }

    @Override
    public void save1(UserDTO userDTO) throws Exception{

        User returnUser= modelMapper.map(userDTO, User.class);
        userRepository.save(returnUser);
    }
}