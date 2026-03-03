package com.example.backend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
interface MediaRepository extends JpaRepository<MediaObject, Long> {
    List<MediaObject> findByStyle(String style);
    MediaObject findByTitle(String title);
    void deleteByTitle(String title);
}

