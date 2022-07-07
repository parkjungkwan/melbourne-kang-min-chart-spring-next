package com.example.demo.domains;

import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * packageName    : com.example.demo
 * fileName       : UserDTO
 * author         : kimyunseop
 * date           : 2022-07-07
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-07        kimyunseop       최초 생성
 */
@Component @Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private long userId;
    String username;
    String email;
    private String token;
}

