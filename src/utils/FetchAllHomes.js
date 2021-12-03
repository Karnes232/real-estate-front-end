import axios from "axios"

const FetchAllHomes = async (setHomes) => {
  if (process.env.NODE_ENV !== 'production') {
    let URL = process.env.REACT_APP_URL
  } else {
    let URL = 'https://whispering-dawn-36595.herokuapp.com/'
  }
    const config = {
      method: 'get',
      url: `${URL}/houses`,
    }

    let res = await axios(config)
    setHomes({ features: res.data })
    return res.data
}

export default FetchAllHomes