package com.example.demo.articles.repositories;

import com.example.demo.articles.domains.Article;
import com.example.demo.articles.domains.ArticleDTO;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * packageName    : com.example.demo.repositories
 * fileName       : ArticleRepository
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
public interface ArticleRepository extends JpaRepository<Article, Long> {
    Optional<Article> findByTitle(String title);
    void delete(Article article);
}
