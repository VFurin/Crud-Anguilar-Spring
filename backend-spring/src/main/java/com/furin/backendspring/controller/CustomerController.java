package com.furin.backendspring.controller;

import java.util.List;

import com.furin.backendspring.model.Customer;
import com.furin.backendspring.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

  @Autowired
  private CustomerRepository customerRepository;

  @GetMapping
  public List<Customer> customerList() {
    return customerRepository.findAll();
  }
}