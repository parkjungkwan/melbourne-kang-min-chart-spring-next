package com.example.demo.earnings.services;

import com.example.demo.earnings.domains.Earning;

import java.util.List;

/**
 * packageName    : com.example.demo.services
 * fileName       : EarningService
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
public interface EarningService {
    List<Earning> findAll();
}
