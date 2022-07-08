package com.example.demo.articles.services;

import com.example.demo.articles.domains.Article;
import com.example.demo.articles.domains.ArticleDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

/**
 * packageName    : com.example.demo.services
 * fileName       : ArticleService
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
public interface ArticleService {
    List<Article> findAll();


    void delete(ArticleDTO article);

    Article save(Article article);


}
