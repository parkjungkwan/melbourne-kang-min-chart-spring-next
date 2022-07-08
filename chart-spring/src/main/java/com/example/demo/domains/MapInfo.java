package com.example.demo.domains;

import lombok.*;

import javax.persistence.*;

/**
 * packageName    : com.example.demo.domains
 * fileName       : MapInfo
 * author         : j2022
 * date           : 2022-07-07
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-07        j2022       최초 생성
 */

@Setter
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MapInfo {
    @Id @Column(name = "map_id")
    @GeneratedValue(strategy = GenerationType.AUTO) private long mapId;
    @Column private int lng;
    @Column private int lnp;
}
