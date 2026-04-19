package com.petadoption.controller;

import com.petadoption.model.Pet;
import com.petadoption.Service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pets")
@CrossOrigin(origins = "*")   // 🔥 IMPORTANT
public class PetController {

    @Autowired
    private PetService service;

    // ✅ POST /pets
    @PostMapping
    public Pet addPet(@RequestBody Pet pet) {
        pet.setStatus("Available"); // ensure default
        return service.addPet(pet);
    }

    // ✅ GET /pets
    @GetMapping
    public List<Pet> getPets() {
        return service.getAllPets();
    }

    // ✅ GET /pets/search?type=dog
    @GetMapping("/search")
    public List<Pet> search(@RequestParam String type) {
        return service.searchByType(type);
    }
}