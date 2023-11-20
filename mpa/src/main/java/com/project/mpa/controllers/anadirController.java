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
public class anadirController {

    private Usuario usuario;
    

    @GetMapping("/addLibros")
    public String anadirLibros(Model model, HttpServletRequest request) {

        HttpSession session = request.getSession();
        usuario = (Usuario) session.getAttribute("usuario");

        List<UsuarioLibro> libros = usuario.getLibros();

        model.addAttribute("libros", libros);

        return "anadirLibro"; 
    }

    @GetMapping("/redireccionarLista")
    public String redirect(Model model, HttpServletRequest request) {

        HttpSession session = request.getSession();
        session.setAttribute("usuario", usuario);

        return "redirect:/listaLibros";

    }

}
