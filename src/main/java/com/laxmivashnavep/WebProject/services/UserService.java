package com.laxmivashnavep.WebProject.services;

import java.util.ArrayList;
import java.util.List;

import com.laxmivashnavep.WebProject.model.User;

public class UserService {
    private List<User> allUsers;
    public UserService() {
        allUsers = new ArrayList<>();
        allUsers.add(new User("Rohit Sharma", "img/jane.png", "male", 0));
        allUsers.add(new User("Virat Kohli", "img/john.png", "male", 1));
    }
    public void addUser(String name, String gender, String image) {
         User newUser = new User(name,image,gender,allUsers.size());
            allUsers.add(newUser);
    }
    public List<User> getAllUsers() {
        return allUsers;
    }
    public User getSingleUser(Integer id) {
        return allUsers.get(id);
    }
    public void updateUser(Integer id, String name, String gender, String image) {
        User userToUpdate = allUsers.get(id);
        userToUpdate.setName(name);
        userToUpdate.setGender(gender);
        userToUpdate.setImage(image); 
    }
    public void deleteUser(Integer id) {
        allUsers.remove(id.intValue());
    }
}
