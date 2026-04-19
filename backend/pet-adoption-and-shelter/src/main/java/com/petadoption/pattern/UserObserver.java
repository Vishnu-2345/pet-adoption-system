package com.petadoption.pattern;

public class UserObserver implements Observer {
    private String name;

    public UserObserver(String name) {
        this.name = name;
    }

    public void update(String message) {
        System.out.println(name + " notified: " + message);
    }
}