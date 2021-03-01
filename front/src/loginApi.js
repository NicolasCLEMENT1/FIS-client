class LoginApi {

    API_BASE_URL = "/auth";

    static requestHeaders() {
        return {};
    }

    static login(username, password) {
        const headers = this.requestHeaders();
        const request = new Request("/login", {
            method: 'POST',
            headers: headers,
            body: {
                username: username,
                password: password
            }
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

}

export default LoginApi