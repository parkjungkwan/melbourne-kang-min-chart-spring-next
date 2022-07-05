package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

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
@Repository
public interface DemoRepository extends JpaRepository<Earning, Long> {
}
