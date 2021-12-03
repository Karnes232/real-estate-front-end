import axios from "axios"

const EditProfile = async (token, profile) => {
    const config = {
      method: 'put',
      url: `http://localhost:4000/users/me`,
      headers: { 'Authorization': `Bearer ${token}` },
      data: profile
    }

    let res = await axios(config)
    return res.data
}

export default EditProfile