import axios from "axios"; 

export default {
    getSearchedBooks: (search = "red") => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=" + "AIzaSyAmukOX6JHM53iVJC7RJzMP-lGFQSiJ618" + "&maxResults=40")
    },
    getDbBooks: () => {
        return axios.get("/api/books")
    },
    deleteDbBook: (id) => {
        return axios.delete("/api/books/" + id)
    },
    saveDbBook: (book) => {
        return axios.post("/api/books", book)
    }
}
