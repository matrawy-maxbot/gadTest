class ApiClient {

    #baseURL;
    #token;
    #headers;

    constructor(baseURL) {
        this.#baseURL = baseURL;
        this.#token = sessionStorage.getItem("accessToken") || null;
        this.#headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${this.#token}`,
        };
    }
  
    async #request(endpoint, method = "GET", data = null, headers = {}, json = true) {
        try {
            const options = {
                method,
                headers: {
                    ...this.#headers,
                    ...headers
                },
            };
    
            if (data) {
                if (options.headers["Content-Type"] === "application/json") {
                    options.body = JSON.stringify(data);
                } else {
                    delete options.headers["Content-Type"];
                    options.body = data;
                }
            }
    
            const response = await fetch(`${this.#baseURL}${endpoint}`, options);
    
            if (!response.ok) {
                const error = json ? await response.json() : response;
                throw new Error(error?.message || error || "An error occurred");
            }
    
            return json ? await response.json() : response;
        } catch (error) {
            console.error("API Request Error:", error);
            return { message:"failed", error: error.message || error || "An error occurred" };
        }
    }
  
    // GET method
    get(endpoint, headers = {}, json = true) {
        return this.#request(endpoint, "GET", null, headers, json);
    }
  
    // POST method
    post(endpoint, data, headers = {}, json = true) {
        return this.#request(endpoint, "POST", data, headers, json);
    }
  
    // PUT method
    put(endpoint, data, headers = {}, json = true) {
        return this.#request(endpoint, "PUT", data, headers, json);
    }
  
    // DELETE method
    delete(endpoint, data = null, headers = {}, json = true) {
        return this.#request(endpoint, "DELETE", data, headers, json);
    }

    setToken(token) {
        sessionStorage.setItem("accessToken", token);
        this.#token = token;
        this.#headers['Authorization'] = `Bearer ${token}`;
    }

    login(token = null, user = null, pass = null) {
        if(!token && !user && !pass) return false;
        if(!token) {
            const result = this.post("/login", { "user": user, "pass": pass });
            return result;
        } else {
            const result = this.get("/login/me", { "Authorization": `Bearer ${token}` });
            return result;
        }
    }

    logout() {
        sessionStorage.removeItem("accessToken");
        this.#token = "";
        this.#headers['Authorization'] = "";
    }

    checkToken() {
        let token = sessionStorage.getItem("accessToken") || this.#token || this.#headers['Authorization'] || '';
        let originalToken = token;
        token = token.toString().toLowerCase();
        if(!token || token == null || token == 'null') return false;
        else if(token.replace(/bearer/g, "").replace(/null/g, "").trim().length == 0) return false;
        else return originalToken;
    }
}

export { ApiClient };