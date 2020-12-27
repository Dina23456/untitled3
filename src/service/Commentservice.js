export default class Commentservice {
    URL = 'https://jsonplaceholder.typicode.com/comments'

    async comments() {
        return await fetch(this.URL)
            .then(value => value.json())

    }

    async comment(id) {
        return await fetch(this.URL + `/${id}`).then(value => value.json)

    }

}
