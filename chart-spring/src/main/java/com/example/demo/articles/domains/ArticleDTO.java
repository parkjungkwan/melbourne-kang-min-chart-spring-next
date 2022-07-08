package com.example.demo.articles.domains;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.springframework.stereotype.Component;

/**
 * packageName    : com.example.demo.articles.domains
 * fileName       : ArticleDTO
 * author         : j2022
 * date           : 2022-07-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-07-08        j2022       최초 생성
 */
@Component
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDTO {
    @ApiModelProperty(position = 1) private long articleId;
    @ApiModelProperty(position = 2) String title;
    @ApiModelProperty(position = 3) private String writtenDate;
    @ApiModelProperty(position = 4) String inquiry;
    @ApiModelProperty(position = 5) String open;
    @ApiModelProperty(position = 6) String content;
    @ApiModelProperty(position = 7) String picture;
    @ApiModelProperty(position = 8) String height;
    @ApiModelProperty(position = 9) String weight;

}