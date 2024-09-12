package org.example.service;

import org.example.model.Todo;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TodoServices {
    List<Todo> getAllTodo();
    List<Todo> searchAllTodo(String content);
    ResponseEntity<Todo> getTodo(Long id);
    void addTodo(Todo todo);
    void updateTodo(Long id,Todo todo);
    void deleteTodo(Long id);

}
