package com.swe642.pa3.repository;

import com.swe642.pa3.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyRepository extends JpaRepository<Survey,Integer> {
}
