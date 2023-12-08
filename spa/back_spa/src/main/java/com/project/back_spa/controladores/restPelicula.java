package com.project.back_spa.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.back_spa.modelos.Pelicula;
import com.project.back_spa.servicios.servicePelicula;

@RestController
@RequestMapping("/peliculas")
public class restPelicula {

    @Autowired
    private servicePelicula servicioPelicula;
    
    @GetMapping
    public ResponseEntity<List<Pelicula>> getAllPeliculas(){
        return ResponseEntity.ok(servicioPelicula.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pelicula> getPeliculaById(@PathVariable("id") Long id){
        return ResponseEntity.ok(servicioPelicula.findById(id));
    }
}
