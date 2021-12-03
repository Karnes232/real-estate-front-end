import axios from "axios"

const FetchNewestHomes = async (setNewestHomes) => {
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
    setNewestHomes(res.data.slice(0, 10))
    return res.data
}

export default FetchNewestHomes