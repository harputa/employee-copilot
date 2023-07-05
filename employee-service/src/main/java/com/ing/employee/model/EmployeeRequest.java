package com.ing.employee.model;

import lombok.Data;

@Data
public class EmployeeRequest {
    // copy all attributes from Employee entity
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


}
