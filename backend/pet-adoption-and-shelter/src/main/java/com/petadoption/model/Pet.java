package com.petadoption.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private String age;
    private String status; // Available, Pending, Adopted
}