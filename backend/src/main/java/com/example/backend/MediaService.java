package com.example.backend;

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
}
