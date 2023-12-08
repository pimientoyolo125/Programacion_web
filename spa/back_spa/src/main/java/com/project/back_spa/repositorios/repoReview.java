package com.project.back_spa.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.back_spa.modelos.Review;

@Repository
public interface repoReview extends JpaRepository<Review, Long>{
}
