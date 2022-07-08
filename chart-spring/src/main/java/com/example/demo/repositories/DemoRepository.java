package com.example.demo.repositories;

import com.example.demo.domains.Earning;
import com.example.demo.domains.MapInfo;
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

interface DemoCustomRepository{
}
@Repository
public interface DemoRepository extends JpaRepository<Earning, Long> {
    List<Earning> findAll();
}
