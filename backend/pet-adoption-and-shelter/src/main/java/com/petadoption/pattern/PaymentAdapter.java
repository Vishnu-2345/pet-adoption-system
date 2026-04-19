package com.petadoption.pattern;

public class PaymentAdapter {

    public boolean processPayment(double amount) {
        System.out.println("Payment processed: " + amount);
        return true;
    }
}