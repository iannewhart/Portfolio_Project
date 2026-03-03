package com.example.backend;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MediaService {
    @Autowired
    private MediaRepository storage;

    public List<MediaObject> GetMediaWithStyle(String style){
        return storage.findByStyle(style);   }
    public MediaObject PostMedia(MediaObject dto) {
        return storage.save(dto);
    }
    public List<MediaObject> GetAll(){
        return storage.findAll();   }

    public MediaObject UpdateMediaByTitle(String title, MediaObject DTO) {
        MediaObject temp = storage.findByTitle(title);
        temp.setTitle(DTO.getTitle());
        temp.setStyle(DTO.getStyle());
        temp.setUrl(DTO.getUrl());
        temp.setThumbnail_Url(DTO.getThumbnail_Url());
        return storage.save(temp);
    }

    @Transactional
    public void DeleteMediaByTitle(String title) {
        storage.deleteByTitle(title);
    }
}
