import axios from "axios"

export class DataComments {
    private static URL: string = 'https://jsonplaceholder.typicode.com'

    public static getComments() {
        let CommentsURL: string = `${this.URL}/users`
        return axios.get(CommentsURL)
    }
}