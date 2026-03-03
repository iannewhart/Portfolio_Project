package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/media")
public class MediaController {
    @Autowired
    private MediaService service;
    @GetMapping("/media/all")
    public List<MediaObject> all() {
        return service.GetAll();
    }
    @GetMapping("/{style}")
    public List<MediaObject> RetrieveMediaList(
            @PathVariable String style){
        return service.GetMediaWithStyle((style));
    }
    @PostMapping("/post")
    public MediaObject PostMedia(
            @RequestBody MediaObject DTO
            ){
        return service.PostMedia(DTO);
    }
}



