const axios = require("axios");

module.exports = {
    //function which is going to take params and make a request to the google api 
    googleFindAll: (req,res) => {
        console.log("request made", req)
        const {query: params} = req;
        axios.get("https://www.googleapis/com/books/v1/volumes", {
            params
        }).then(results => console.log(results))
        //  res.json(results))
    }
}
