class ApiResponse {
    constructor(data, statusCode = 200, success = true, message = '') {
        this.data = data;
        this.statusCode = statusCode;
        this.success = success;
        this.message = message;
    }
}