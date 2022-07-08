package com.example.demo.mapInfos.services;

import com.example.demo.mapInfos.domains.MapInfo;

import java.util.List;

/**
 * packageName    : com.example.demo.services
 * fileName       : MapInfoService
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
public interface MapInfoService {
    List<MapInfo> findAll();
}
