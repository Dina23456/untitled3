export class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = 'https://fakestoreapi.com/products'
    }

    getProducts() {
        return this.httpClient.get(this.baseURL);
    }
}


