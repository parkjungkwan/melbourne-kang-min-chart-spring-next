package com.example.demo.domains;

import lombok.*;

import javax.persistence.*;

/**
 * packageName    : com.example.demo
 * fileName       : User
 * author         : kimyunseop
 * date           : 2022-07-07
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-07        kimyunseop       최초 생성
 */
@ToString
@Setter
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.AUTO) private long userId;
    @Column private String username;
    @Column private String name;
    @Column private String email;
    @Column(length = 1200) private String token;
}