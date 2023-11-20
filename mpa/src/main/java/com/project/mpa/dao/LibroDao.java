package com.project.mpa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.mpa.entitys.Libro;

@Repository
public interface LibroDao extends JpaRepository<Libro, Long>{
    
}
