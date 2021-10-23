import axios from "axios"

const SubmitListing = async (token, data) => {
    const config = {
      method: 'post',
      url: 'http://localhost:4000/houses',
      headers: { 'Authorization': `Bearer ${token}` },
      data
    }

    let res = await axios(config)
    return res
}

export default SubmitListing