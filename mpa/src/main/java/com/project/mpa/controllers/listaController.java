package com.project.mpa.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.project.mpa.entitys.Usuario;
import com.project.mpa.entitys.UsuarioLibro;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
public class listaController{
    
    /* private LibroService libroService;

    @Autowired
    public listaController(LibroService libroService) {
        this.libroService = libroService;
    } */

    private Usuario usuario;

    @GetMapping("/listaLibros")
    public String listaLibros(Model model, HttpServletRequest request) {

        HttpSession session = request.getSession();
        usuario = (Usuario) session.getAttribute("usuario");

        List<UsuarioLibro> libros = usuario.getLibros();

        model.addAttribute("libros", libros);

        return "listaLibros"; 
    }

    @GetMapping("/addyLibros")
    public String anadirLibros(Model model, HttpServletRequest request) {

        HttpSession session2 = request.getSession();
        session2.setAttribute("usuario", usuario);

        return "redirect:/addLibros";

    }

    

}
