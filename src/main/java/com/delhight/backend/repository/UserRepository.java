package com.delhight.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.delhight.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}


