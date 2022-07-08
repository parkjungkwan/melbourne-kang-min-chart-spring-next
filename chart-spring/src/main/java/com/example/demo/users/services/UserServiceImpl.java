package com.example.demo.users.services;

import com.example.demo.users.domains.User;
import com.example.demo.users.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

/**
 * packageName    : com.example.demo.services
 * fileName       : UserServiceImpl
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{
    private final UserRepository repository;
    @Override
    public User save1(User user) throws Exception{
        repository.save(user);
        return user;
    }
}
