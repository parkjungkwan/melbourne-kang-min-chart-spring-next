package com.example.demo.domains;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * packageName: com.example.demo
 * fileName   : DemoDomain
 * author     : parkjungkwan
 * date       : 2022-07-05
 * desc       :
 * ["년도", "매출", "비용", "이익"],
 *     ["2018", 1000, 400, 200],
 *     ["2019", 1170, 460, 250],
 *     ["2020", 660, 1120, 300],
 *     ["2021", 1030, 540, 350],
 * ================================
 * DATE        AUTHOR        NOTE
 * ================================
 * 2022-07-05   parkjungkwan  최초 생성
 */
@Builder @Entity @Data @NoArgsConstructor @AllArgsConstructor
public class Earning {
    @Id @Column private long id;
    @Column private String year;
    @Column private int sales;
    @Column private int cost;
    @Column private int profit;
}
