package com.petadoption.controller;

import com.petadoption.model.Adoption;
import com.petadoption.Service.AdoptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/adoption")
@CrossOrigin
public class AdoptionController {

    @Autowired
    private AdoptionService service;

    @PostMapping("/apply")
    public Adoption apply(@RequestParam Long userId,
                          @RequestParam Long petId) {
        return service.apply(userId, petId);
    }

    @PostMapping("/approve")
    public Adoption approve(@RequestParam Long id) {
        return service.approve(id);
    }

    @GetMapping("/all")
    public List<Adoption> getAll() {
        return service.getAll();
    }
}