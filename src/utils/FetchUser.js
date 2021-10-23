import axios from "axios"

const FetchUser = async (token, setUser) => {
    const config = {
      method: 'get',
      url: 'http://localhost:4000/users/me',
      headers: { 'Authorization': `Bearer ${token}` }
    }

    let res = await axios(config)
    setUser(res.data.user) 
}

export default FetchUser