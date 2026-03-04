package com.example.backend.service;

import com.example.backend.model.MediaObject;
import com.example.backend.repository.MediaRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
