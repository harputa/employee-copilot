package com.ing.employee.controller;

import com.ing.employee.entity.Employee;
import com.ing.employee.model.EmployeeRequest;
import com.ing.employee.model.EmployeeResponse;
import com.ing.employee.service.EmployeeService;
import com.ing.employee.transformer.EmployeeTransformer;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    private final EmployeeTransformer employeeTransformer;

    // add as parameter to constructor
    public EmployeeController(EmployeeService employeeService, EmployeeTransformer employeeTransformer) {
        this.employeeService = employeeService;
        this.employeeTransformer = employeeTransformer;
    }

    @PostMapping("/employee")
    public ResponseEntity<EmployeeResponse> createEmployee(@RequestBody EmployeeRequest employeeRequest) {

        Employee request = employeeTransformer.transform(employeeRequest);
        Employee response = employeeService.createEmployee(request);
        EmployeeResponse employeeResponse = employeeTransformer.responseTransfomer(response);

        return ResponseEntity.ok().body(employeeResponse);
    }

    @GetMapping("/")
    // get all employees
    public ResponseEntity<List<EmployeeResponse>> getAllEmployees() {
        List<Employee> allEmployees = employeeService.getAllEmployees();
        List<EmployeeResponse> employeeResponseList = allEmployees.stream()
                .map(employee -> employeeTransformer.responseTransfomer(employee))
                .collect(Collectors.toList());
        return ResponseEntity.ok().body(employeeResponseList);
    }
}
