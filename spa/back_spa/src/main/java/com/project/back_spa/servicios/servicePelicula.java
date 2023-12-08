package com.project.back_spa.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.back_spa.modelos.Pelicula;
import com.project.back_spa.repositorios.repoPelicula;

@Service
public class servicePelicula{
    
    @Autowired
    private repoPelicula repo;

    public List<Pelicula> findAll(){
        return repo.findAll();
    }

    public Pelicula findById(Long id){
        Optional<Pelicula> opPelicula = repo.findById(id);
        return opPelicula.get();
    }
}
