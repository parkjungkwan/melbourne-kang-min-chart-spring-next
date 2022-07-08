package com.example.demo.mapInfos.repositories;

import com.example.demo.mapInfos.domains.MapInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName    : com.example.demo.repositories
 * fileName       : MapInfoRepository
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
@Repository
public interface MapInfoRepository extends JpaRepository<MapInfo, Long> {
}
