package com.ing.employee.service;

import com.ing.employee.entity.Employee;
import com.ing.employee.repository.EmployeeRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service("employeeService")
public class EmployeeService {
    // inject Employee Repository and Weather Service
    private final EmployeeRepository employeeRepository;
    private final WeatherService weatherService;

    // add to constructor as parameters
    public EmployeeService(EmployeeRepository employeeRepository, WeatherService weatherService) {
        this.employeeRepository = employeeRepository;
        this.weatherService = weatherService;
    }

    // get all Employees
    public List<Employee> getAllEmployees() {
        log.info("getAllEmployees() started");
        Iterable<Employee> employees = employeeRepository.findAll();
//        employees.forEach(employee -> employee.setWeather(weatherService.getWeather(employee.getCity())));

        return StreamSupport.stream(employees.spliterator(), false).collect(Collectors.toList());
    }

    public Employee createEmployee(Employee employee) {
        log.info("createEmployee() started");

        Employee savedEmployee = employeeRepository.save(employee);
//        savedEmployee.setWeather(weatherService.getWeather(employee.getCity()));

        return savedEmployee;
    }

    // read Employee entity
    public Employee readEmployee(Long id) {
        log.info("readEmployee() started");
        Optional<Employee> employee = employeeRepository.findById(id);
//        employee.ifPresent(value -> value.setWeather(weatherService.getWeather(value.getCity())));

        return employee.orElse(null);
    }

    // update Employee entity
    public Employee updateEmployee(Employee employee) {
        log.info("updateEmployee() started");
        Employee existingEmployee = employeeRepository.findById(employee.getId()).orElse(null);
        if (existingEmployee != null) {
            existingEmployee.setName(employee.getName());
            existingEmployee.setPhone(employee.getPhone());
            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setTitle(employee.getTitle());
            existingEmployee.setDept(employee.getDept());
            existingEmployee.setSalary(employee.getSalary());
            existingEmployee.setStreet(employee.getStreet());
            existingEmployee.setCity(employee.getCity());
            existingEmployee.setState(employee.getState());
            existingEmployee.setZip(employee.getZip());

            return employeeRepository.save(existingEmployee);
        } else {
            return null;
        }
    }

    // delete Employee entity
    public void deleteEmployee(Long id) {
        log.info("deleteEmployee() started");
        employeeRepository.deleteById(id);
    }

    // delete all Employee entities
    public void deleteAllEmployees() {
        log.info("deleteAllEmployees() started");
        employeeRepository.deleteAll();
    }
}
