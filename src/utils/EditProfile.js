import axios from "axios"

const EditProfile = async (token, profile) => {
  if (process.env.NODE_ENV !== 'production') {
    let URL = process.env.REACT_APP_URL
  } else {
    let URL = 'https://whispering-dawn-36595.herokuapp.com/'
  }
    const config = {
      method: 'put',
      url: `${URL}/users/me`,
      headers: { 'Authorization': `Bearer ${token}` },
      data: profile
    }

    let res = await axios(config)
    return res.data
}

export default EditProfile