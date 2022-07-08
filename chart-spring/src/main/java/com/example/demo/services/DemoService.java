package com.example.demo.services;

import com.example.demo.domains.Earning;
import com.example.demo.domains.UserDTO;

import java.util.List;

/**
 * packageName: com.example.demo
 * fileName   : DemoService
 * author     : parkjungkwan
 * date       : 2022-07-06
 * desc       :
 * ================================
 * DATE        AUTHOR        NOTE
 * ================================
 * 2022-07-06   parkjungkwan  최초 생성
 */
public interface DemoService {
    List<Earning> findAll();
    void save1(UserDTO userDTO) throws Exception;

}
