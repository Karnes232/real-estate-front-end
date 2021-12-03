import axios from "axios"

const EditProfile = async (token, profile) => {
    const config = {
      method: 'put',
      url: `${process.env.REACT_APP_URL}/users/me`,
      headers: { 'Authorization': `Bearer ${token}` },
      data: profile
    }

    let res = await axios(config)
    return res.data
}

export default EditProfile