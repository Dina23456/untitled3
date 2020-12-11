export default class Postservice {
    URL = 'https://jsonplaceholder.typicode.com/posts';

    async posts() {
        return await fetch(this.URL)
            .then(value => value.json());
    }

    async post(id) {
        return await fetch(this.URL + `/${id}`).then(value => value.json());
    }
};
