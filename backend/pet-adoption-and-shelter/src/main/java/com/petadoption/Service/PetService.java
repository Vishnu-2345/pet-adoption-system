package com.petadoption.Service;

import com.petadoption.model.Pet;
import com.petadoption.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {

    @Autowired
    private PetRepository repo;

    public Pet addPet(Pet pet) {
        pet.setStatus("Available");
        return repo.save(pet);
    }

    public List<Pet> getAllPets() {
        return repo.findAll();
    }

    public List<Pet> searchByType(String type) {
        return repo.findByType(type);
    }
}