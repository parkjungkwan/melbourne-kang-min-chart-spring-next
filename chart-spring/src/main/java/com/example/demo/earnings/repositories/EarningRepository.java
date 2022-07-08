package com.example.demo.earnings.repositories;

import com.example.demo.earnings.domains.Earning;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * packageName: com.example.demo
 * fileName   : DemoRepository
 * author     : parkjungkwan
 * date       : 2022-07-05
 * desc       :
 * ================================
 * DATE        AUTHOR        NOTE
 * ================================
 * 2022-07-05   parkjungkwan  최초 생성
 */

interface EarningCustomRepository{
}
@Repository
public interface EarningRepository extends JpaRepository<Earning, Long> {
    List<Earning> findAll();
}
