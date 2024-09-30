import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '92aec12ed6a346feaee1ccc165269f63'
    }
})