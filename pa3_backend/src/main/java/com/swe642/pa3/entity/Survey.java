package com.swe642.pa3.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @GeneratedValue
    private String firstName;
    @GeneratedValue
    private String lastName;
    @GeneratedValue
    private String streetAddress;
    @GeneratedValue
    private String city;
    private String state;
    private String zip;
    private String telephoneNumber;
    private String email;

    @Temporal(TemporalType.DATE)
    private Date dateOfSurvey;

    // Preferences and opinions
    private boolean likeStudents;
    private boolean likeLocation;
    private boolean likeCampus;
    private boolean likeAtmosphere;
    private boolean likeDormRooms;
    private boolean likeSports;

    private String interestOrigin;
    private String recommendationLikelihood;
    private String additionalComments;

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getZip() {
        return zip;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public Date getDateOfSurvey() {
        return dateOfSurvey;
    }

    public boolean isLikeStudents() {
        return likeStudents;
    }

    public boolean isLikeLocation() {
        return likeLocation;
    }

    public boolean isLikeCampus() {
        return likeCampus;
    }

    public boolean isLikeAtmosphere() {
        return likeAtmosphere;
    }

    public boolean isLikeDormRooms() {
        return likeDormRooms;
    }

    public boolean isLikeSports() {
        return likeSports;
    }

    public String getInterestOrigin() {
        return interestOrigin;
    }

    public String getRecommendationLikelihood() {
        return recommendationLikelihood;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDateOfSurvey(Date dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

    public void setLikeStudents(boolean likeStudents) {
        this.likeStudents = likeStudents;
    }

    public void setLikeLocation(boolean likeLocation) {
        this.likeLocation = likeLocation;
    }

    public void setLikeCampus(boolean likeCampus) {
        this.likeCampus = likeCampus;
    }

    public void setLikeAtmosphere(boolean likeAtmosphere) {
        this.likeAtmosphere = likeAtmosphere;
    }

    public void setLikeDormRooms(boolean likeDormRooms) {
        this.likeDormRooms = likeDormRooms;
    }

    public void setLikeSports(boolean likeSports) {
        this.likeSports = likeSports;
    }

    public void setInterestOrigin(String interestOrigin) {
        this.interestOrigin = interestOrigin;
    }

    public void setRecommendationLikelihood(String recommendationLikelihood) {
        this.recommendationLikelihood = recommendationLikelihood;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }
}
