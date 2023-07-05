package com.ing.employee.transformer;

public interface IngTransformer<T, F, R> {
    F transform(T t);

    R responseTransfomer(F f);
}
