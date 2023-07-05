package com.ing.employee.service;

import com.twitter.finagle.http.Request;
import com.twitter.finagle.http.Response;
import com.twitter.util.Future;

import java.util.concurrent.ExecutionException;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service("weatherService")
public class WeatherService {

    private final com.twitter.finagle.Service<Request, Response> finagleWeatherService;

    public WeatherService(com.twitter.finagle.Service<Request, Response> weatherService) {
        this.finagleWeatherService = weatherService;
    }

    public String getWeather(String cityName) {
        log.info("getWeather() started");

        Request request = Request.apply("/api/weather/" + cityName);

        Future<Response> responseFuture = finagleWeatherService.apply(request);

        try {
            return responseFuture.toJavaFuture().get().contentString();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

}
