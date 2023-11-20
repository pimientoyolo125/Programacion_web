package com.project.mpa.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.mpa.entitys.Libro;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

@Service
public class LibroService {
    
    @PersistenceContext
    private EntityManager entityManager;

    @SuppressWarnings("unchecked")
    public List<Libro> obtenerLibrosSinAsignar() {
        Query query = entityManager.createNativeQuery(
                "SELECT l.id as id, l.titulo as titulo, l.autor as autor, l.precio as precio " +
                        "FROM libros l " +
                        "LEFT JOIN usuario_libro ul ON l.id = ul.libro_id AND ul.usuario_id = 1 " +
                        "WHERE ul.libro_id IS NULL",
                "LibroMapping"
        );
        return query.getResultList();
    }

}
