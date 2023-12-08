package com.project.back_spa.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.back_spa.modelos.Pelicula;

@Repository
public interface repoPelicula extends JpaRepository<Pelicula, Long>{
    
}
