package com.example.demo.mapInfos.controllers;

import com.example.demo.mapInfos.services.MapInfoService;
import com.example.demo.mapInfos.domains.MapInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * packageName    : com.example.demo.controllers
 * fileName       : MapInfoController
 * author         : j2022
 * date           : 2022-07-07
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-07        j2022       최초 생성
 */
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MapInfoController {
    private final MapInfoService service;
    @GetMapping("/api/map")
    public List<MapInfo> findMapInfos(){
        return null;
    }
}
