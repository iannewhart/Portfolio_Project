package com.example.backend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "media_object", schema = "public")
public class MediaObject {
    public MediaObject() {
    }

    public MediaObject(String title, String style, String url, String thumbnail_Url) {
        this.title = title;
        this.style = style;
        this.url = url;
        this.thumbnail_Url = thumbnail_Url;
    }

    @jakarta.persistence.Id
    @GeneratedValue
    private Long id;

    @NotBlank
    @Column(name = "title", unique = true)
    private String title;

    @Column(name = "style")
    private String style;

    @Column(name = "url")
    private String url;

    @Column(name = "thumbnail_Url")
    private String thumbnail_Url;


    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public Long getId() {return id;}

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getThumbnail_Url() {
        return thumbnail_Url;
    }

    public void setThumbnail_Url(String thumbnail_url) {
        this.thumbnail_Url = thumbnail_url;
    }

}
