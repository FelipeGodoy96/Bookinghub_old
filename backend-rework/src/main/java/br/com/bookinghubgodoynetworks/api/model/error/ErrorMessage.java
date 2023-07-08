package br.com.bookinghubgodoynetworks.api.model.error;

public class ErrorMessage {

    private String title;
    private int status;
    private String message;

    public ErrorMessage() {
    }

    public ErrorMessage(String title, int status, String message) {
        this.title = title;
        this.status = status;
        this.message = message;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
