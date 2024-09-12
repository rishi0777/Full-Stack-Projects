package org.example.controller;

import org.example.model.Todo;
import org.example.service.TodoServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("https://diary-rm.netlify.app/")
@RestController
public class Controller {

    @Autowired
    private TodoServices services;

    @RequestMapping("/todos")
    List<Todo> getAllTodo(){
        return services.getAllTodo();
    }

    @RequestMapping("/todos/{id}")
    public ResponseEntity<Todo> getTodo(@PathVariable Long id){
        return services.getTodo(id);
    }

    @PostMapping("/todos")
    void addTodo(@RequestBody Todo todo){
        services.addTodo(todo);
    }

    @PutMapping("/todos/{id}")
    void updateTodo(@PathVariable Long id,@RequestBody Todo todo){
        services.updateTodo(id,todo);
    }

    @DeleteMapping("/todos/{id}")
    void deleteTodo(@PathVariable Long id){
        services.deleteTodo(id);
    }

    @CrossOrigin("https://diary-rm.netlify.app/search")
    @RequestMapping("/search/{content}")
    List<Todo> searchAll(@PathVariable String content){
        return services.searchAllTodo(content);
    }

}
