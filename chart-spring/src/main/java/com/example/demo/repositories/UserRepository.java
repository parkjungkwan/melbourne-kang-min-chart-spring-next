package com.example.demo.repositories;

import com.example.demo.domains.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName    : com.example.demo
 * fileName       : UserRepository
 * author         : kimyunseop
 * date           : 2022-07-07
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-07        kimyunseop       최초 생성
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
