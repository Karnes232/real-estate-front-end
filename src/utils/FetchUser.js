import axios from "axios"

const FetchUser = async (token, setUser, setHouses) => {
    const config = {
      method: 'get',
      url: 'http://localhost:4000/users/me',
      headers: { 'Authorization': `Bearer ${token}` }
    }

    let res = await axios(config)
    setHouses(res.data.houses)
    setUser(res.data.user) 
}

export default FetchUser