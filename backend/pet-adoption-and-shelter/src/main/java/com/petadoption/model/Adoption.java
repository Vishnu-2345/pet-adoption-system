package com.petadoption.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Adoption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long petId;
    private String status; // Pending, Approved, Rejected
}