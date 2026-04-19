package com.petadoption.Service;

import com.petadoption.model.Adoption;
import com.petadoption.pattern.PaymentAdapter;
import com.petadoption.repository.AdoptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AdoptionService {

    @Autowired
    private AdoptionRepository repo;

    private PaymentAdapter payment = new PaymentAdapter();

    public Adoption apply(Long userId, Long petId) {
        Adoption a = new Adoption();
        a.setUserId(userId);
        a.setPetId(petId);
        a.setStatus("Pending");
        return repo.save(a);
    }

    public Adoption approve(Long id) {
        Adoption a = repo.findById(id).orElseThrow();

        payment.processPayment(100); // Adapter used

        a.setStatus("Approved");
        return repo.save(a);
    }

    public List<Adoption> getAll() {
        return repo.findAll();
    }
}