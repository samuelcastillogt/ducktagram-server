const userUrl = "https://randomuser.me/api/"
const url = "https://jsonplaceholder.typicode.com/"
const duckUrl ="https://random-d.uk/api/"
const axios = require("axios").default

class API {
    async getUser(){
        const response = await axios.get(`${userUrl}`)
        const data = await response.data
        return data.results    
} 

    async getDucks(){
        const response = await axios.get(`${duckUrl}random`)        
        return response.data
    }
}

module.exports = API