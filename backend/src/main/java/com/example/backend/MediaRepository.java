package com.example.backend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


interface MediaRepository extends JpaRepository<MediaObject, Long> {
    List<MediaObject> findByStyle(String style);
}

