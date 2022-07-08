package com.example.demo.mapInfos.services;

import com.example.demo.mapInfos.domains.MapInfo;
import com.example.demo.mapInfos.repositories.MapInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * packageName    : com.example.demo.services
 * fileName       : MapInfoServiceImpl
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
@Service @RequiredArgsConstructor
public class MapInfoServiceImpl implements MapInfoService{
    private final MapInfoRepository repository;

    @Override
    public List<MapInfo> findAll(){return null;}
}
