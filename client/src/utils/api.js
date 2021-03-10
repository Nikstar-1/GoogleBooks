import axios from "axios"; 

export default {
    getSearchedBooks: (search) => {
        return axios.get("/api/google", {params: {search: "title:" + search}});
    },
}
