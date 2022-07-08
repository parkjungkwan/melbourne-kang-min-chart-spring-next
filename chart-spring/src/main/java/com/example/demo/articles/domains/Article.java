package com.example.demo.articles.domains;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * packageName    : com.example.demo.domains
 * fileName       : Article
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * articleId?: number,
 *     title? : string,
 *     writtenDate?: null,
 *     open?: null,
 *     content?: string,
 *     picture?: null
 *     height?: string,
 *     weight?: string,
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
@Builder @Entity @Data @NoArgsConstructor @AllArgsConstructor
public class Article {
    @Id @Column @GeneratedValue private long articleId;
    @Column private String title;
    @Column private String writtenDate;
    @Column private String open;
    @Column private String content;
    @Column private String picture;
    @Column private String height;
    @Column private String weight;
}
