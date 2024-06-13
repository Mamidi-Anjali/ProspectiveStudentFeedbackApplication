package com.swe642.pa3.service;

import com.swe642.pa3.entity.Survey;
import com.swe642.pa3.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveyService {
    @Autowired
    private SurveyRepository repository;
     public Survey saveSurvey(Survey survey){
         return repository.save(survey);
     }

     public List<Survey> saveSurveys(List<Survey> surveys){
         return repository.saveAll(surveys);
     }
    public List<Survey> getSurveys() {
        return repository.findAll();
    }

    public Survey getSurveyById(int id) {
        return repository.findById(id).orElse(null);
    }
}
