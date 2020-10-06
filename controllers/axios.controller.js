const axios = require('axios');
const { findById } = require('./user.controllers');

const instance = axios.create({ 
    baseURL: "https://favqs.com/api/",
    header: 'token: Token token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImdpYW5wZXRyaWNpYWF1cm9yYUBnbWFpbC5jb20iLCJyb2xlIjoiZW1wbG95ZWUiLCJwYXNzd29yZCI6IiQyYiQxMCQvWENoN1hXdGFvZzgzLktRYlNEUHdPUEtYNi5NZnJadGJIOEVYMjVOUGtIZTh1dmcxRy9oUyIsImlhdCI6MTYwMTk1NzU4MX0.885RH7OXuUY1yblow3J4vjy5z9Wbd_cUUXDcbMRyw-Q"'
});

class AxiosController {

    static getQuote(req, res){
        instance('qotd')
        .then(({data})=>{
            res.status(200).json(data)
        })
    }   

}

module.exports = AxiosController;