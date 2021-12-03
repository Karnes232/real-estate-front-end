import axios from "axios"

const FetchUser = async (token, setUser, setHouses) => {
  if (process.env.NODE_ENV !== 'production') {
    let URL = process.env.REACT_APP_URL
  } else {
    let URL = 'https://whispering-dawn-36595.herokuapp.com/'
  }
    const config = {
      method: 'get',
      url: `${URL}/users/me`,
      headers: { 'Authorization': `Bearer ${token}` }
    }

    let res = await axios(config)
    setHouses(res.data.houses)
    setUser(res.data.user) 
}

export default FetchUser