package com.ing.employee.entity;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "employee")
@NoArgsConstructor
public class Employee {
    // create an employee with personal information and address for salary administration
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;      // employee id
    @Nonnull
    private String name;    // employee name
    private String phone;   // employee phone number
    private String email;   // employee email address
    private String title;   // employee title
    private String dept;    // employee department
    private Double salary;  // employee salary

    private String street;  // street address
    private String city;    // city
    private String state;   // state
    private String zip;     // zip code

    @Transient
    private String weather; // employee weather

}
