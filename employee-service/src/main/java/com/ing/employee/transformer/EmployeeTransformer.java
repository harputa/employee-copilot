package com.ing.employee.transformer;

import com.ing.employee.entity.Employee;
import com.ing.employee.model.EmployeeRequest;
import com.ing.employee.model.EmployeeResponse;

import org.springframework.stereotype.Component;

@Component
public class EmployeeTransformer implements IngTransformer<EmployeeRequest, Employee, EmployeeResponse> {

    @Override
    public Employee transform(EmployeeRequest employeeRequest) {
        Employee employee = new Employee();
        employee.setName(employeeRequest.getName());
        employee.setPhone(employeeRequest.getPhone());
        employee.setEmail(employeeRequest.getEmail());
        employee.setTitle(employeeRequest.getTitle());
        employee.setDept(employeeRequest.getDept());
        employee.setSalary(employeeRequest.getSalary());
        employee.setCity(employeeRequest.getCity());
        employee.setState(employeeRequest.getState());
        employee.setZip(employeeRequest.getZip());
        employee.setStreet(employeeRequest.getStreet());

        return employee;
    }

    @Override
    public EmployeeResponse responseTransfomer(Employee employee) {
        EmployeeResponse employeeResponse = new EmployeeResponse();
        employeeResponse.setName(employee.getName());
        employeeResponse.setPhone(employee.getPhone());
        employeeResponse.setEmail(employee.getEmail());
        employeeResponse.setTitle(employee.getTitle());
        employeeResponse.setDept(employee.getDept());
        employeeResponse.setSalary(employee.getSalary());

        employeeResponse.setStreet(employee.getStreet());
        employeeResponse.setCity(employee.getCity());
        employeeResponse.setState(employee.getState());
        employeeResponse.setZip(employee.getZip());

        return employeeResponse;
    }
}
