package com.example.demo.articles.services;

import com.example.demo.articles.domains.Article;
import com.example.demo.articles.domains.ArticleDTO;
import com.example.demo.articles.repositories.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * packageName    : com.example.demo.services
 * fileName       : ArticleServiceImpl
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
@Service @RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
    private final ArticleRepository repository;

    @Override
    public List<Article> findAll() {
        return repository.findAll();
    }

    @Override
    public Article save(Article article) {
        return repository.save(article);
    }

    @Override
    public void delete(ArticleDTO articleDTO) {
        Article article = repository.findByTitle(articleDTO.getTitle()).orElse(null);

        repository.delete(article);
    }



}
