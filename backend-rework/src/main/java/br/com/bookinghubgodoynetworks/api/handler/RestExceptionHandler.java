package br.com.bookinghubgodoynetworks.api.handler;

import br.com.bookinghubgodoynetworks.api.model.error.ErrorMessage;
import br.com.bookinghubgodoynetworks.api.model.exception.ResourceNotFoundException;
import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFoundException (ResourceNotFoundException exception) {
        ErrorMessage error = new ErrorMessage("Not Found", HttpStatus.NOT_FOUND.value(), exception.getMessage());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<?> handleDataIntegrityViolationException (DataIntegrityViolationException exception) {
        String message = exception.getMostSpecificCause().toString().substring(exception.getMostSpecificCause().toString().indexOf("Detail"));
        ErrorMessage error = new ErrorMessage("An error occurred while processing you request.", HttpStatus.CONFLICT.value(), message);
        return new ResponseEntity<>(error, HttpStatus.CONFLICT);
    }

}
