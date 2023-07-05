package com.ing.employee.config;

import com.twitter.finagle.Http;
import com.twitter.finagle.http.Request;
import com.twitter.finagle.http.Response;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FinagleConfig {

    // configure finagle service as bean

    // inject a service url as string
    @Value("${weather.service.url}")
    private String weatherServiceUrl;

    @Bean
    public com.twitter.finagle.Service<Request, Response> finagleWeatherService() {
        return Http.client().newService(weatherServiceUrl);
    }

}
