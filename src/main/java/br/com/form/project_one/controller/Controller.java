package br.com.form.project_one.controller;

import br.com.form.project_one.dto.Pessoa;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.text.AttributedString;

@org.springframework.stereotype.Controller
public class Controller {
    private AttributedString model;
    @GetMapping("/")
    public String formulario(Model model) {
        model.addAttribute("pessoa", new Pessoa());
        return "formulario";
    }

    @PostMapping("/salvar")
    public String salvar(@ModelAttribute Pessoa pessoa){
        //Lógica para salvar os dados da pessoa (por exemplo, em um banco de dados)
        System.out.println("Nome:" + pessoa.getNome());
        System.out.println("Email:" + pessoa.getEmail());
        System.out.println("Telefone:" + pessoa.getTelefone());
        System.out.println("Mensagem:" + pessoa.getMensagem());
        return "Sucesso";
    }
}
