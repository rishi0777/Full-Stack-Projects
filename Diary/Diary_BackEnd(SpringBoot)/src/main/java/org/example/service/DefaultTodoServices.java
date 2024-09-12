package org.example.service;

import org.example.model.Todo;
import org.example.repository.TodoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class DefaultTodoServices implements TodoServices {

    @Autowired
    private TodoRepository repository;
    @Override
    public List<Todo> getAllTodo() {
        return repository.findAll();
    }

    @Override
    public List<Todo> searchAllTodo(String content) {
        List<Todo> ans=new ArrayList();
        ans.addAll(repository.findByUsernameStartingWith(content));
//        ans.addAll(repository.findByTitleStartingWith(content));
//        ans.addAll(repository.findByDescriptionStartingWith(content));
        return ans;
    }

    @Override
    public ResponseEntity<Todo> getTodo(Long id) {
        Optional<Todo> todoById = repository.findById(id);
        if(todoById.isPresent()){
            return  new ResponseEntity<>(todoById.get(),HttpStatus.OK);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND,"No Todo Found with this id");
    }

    @Override
    public void addTodo(Todo todo) {
        repository.saveAndFlush(todo);

    }

    @Override
    public void updateTodo(Long id,Todo todo) {
        ResponseEntity<Todo> responseEntity=getTodo(id);
        if(responseEntity.getStatusCode().is4xxClientError()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Invalid Todo Id");
        }

        Todo existingTodo=responseEntity.getBody();
        BeanUtils.copyProperties(todo,existingTodo,"id");
        repository.saveAndFlush(existingTodo);
    }

    @Override
    public void deleteTodo(Long id) {
        ResponseEntity<Todo> responseEntity=getTodo(id);
        if(responseEntity.getStatusCode().is4xxClientError()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Invalid Todo Id");
        }
        repository.deleteById(id);
    }

}
