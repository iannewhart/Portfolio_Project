package com.example.backend.repository;
import com.example.backend.model.MediaObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface MediaRepository extends JpaRepository<MediaObject, Long> {
    List<MediaObject> findByStyle(String style);
    MediaObject findByTitle(String title);
    void deleteByTitle(String title);
}

