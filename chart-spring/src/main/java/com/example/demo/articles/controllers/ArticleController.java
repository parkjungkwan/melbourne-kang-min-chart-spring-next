package com.example.demo.articles.controllers;

import com.example.demo.articles.domains.Article;
import com.example.demo.articles.domains.ArticleDTO;
import com.example.demo.articles.services.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * packageName    : com.example.demo.controllers
 * fileName       : ArticleController
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/articles")
public class ArticleController {
    private final ArticleService service;

    @GetMapping("/findAll")
    public ResponseEntity<List<Article>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping("/join")
    public  ResponseEntity<Article> save(@RequestBody Article article) {
        return ResponseEntity.ok(service.save(article));
    }

    @DeleteMapping("/delete")
    public void delete(@RequestBody ArticleDTO article) {
        service.delete(article);
    }


}
