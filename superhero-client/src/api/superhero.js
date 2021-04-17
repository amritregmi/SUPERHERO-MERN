import axios from 'axios'

const KEY = '10221375673195368'

export default axios.create({
    baseURL : `https://www.superheroapi.com/api.php/${KEY}`
})

