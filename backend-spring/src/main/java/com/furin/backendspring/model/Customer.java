package com.furin.backendspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
public class Customer {
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonProperty("_id")
  private Long id;

  @Column(length = 200, nullable = false)
  private String name;
  
  @Column(length = 20, nullable = false)
  private String phone;

  @Column(length = 200, nullable = false)
  private String email;

  @Column(nullable = true)
  private Boolean status;

}
