class ClientApi {

    static API_BASE_URL = "/api/v1";

    static requestHeaders(token) {
        console.log(token);
        if (token)
            return {
                Authorization: `Bearer ${token}`
            }
            
        return {};
    }

    static getAllClients(token) {
        const headers = this.requestHeaders(token);
        const request = new Request(ClientApi.API_BASE_URL + "clients", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getClient(token) {
        const headers = this.requestHeaders(token);
        const request = new Request(ClientApi.API_BASE_URL + "clients/:username", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static putClient(client) {
        const headers = this.requestHeaders(token);
        const request = new Request(ClientApi.API_BASE_URL + "clients/:username", {
            method: 'PUT',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        })
    }

    static registerClient(client) {
        const headers = this.requestHeaders(token);
        const request = new Request(ClientApi.API_BASE_URL + "register", {
            method: 'POST',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        })
    }

    static deleteClient(client) {
        const headers = this.requestHeaders(token);
        const request = new Request(ClientApi.API_BASE_URL + "clients/:username", {
            method: 'DELETE',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        })
    }

}

export default ClientApi