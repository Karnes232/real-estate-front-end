import axios from "axios"

const SubmitListing = async (token, data) => {
  if (process.env.NODE_ENV !== 'production') {
    let URL = process.env.REACT_APP_URL
  } else {
    let URL = 'https://whispering-dawn-36595.herokuapp.com/'
  }
    const config = {
      method: 'post',
      url: `${URL}/houses`,
      headers: { 'Authorization': `Bearer ${token}` },
      data
    }

    let res = await axios(config)
    return res
}

export default SubmitListing