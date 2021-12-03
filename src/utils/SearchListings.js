import axios from "axios"

const SearchListings = async (property) => {
  if (process.env.NODE_ENV !== 'production') {
    let URL = process.env.REACT_APP_URL
  } else {
    let URL = 'https://whispering-dawn-36595.herokuapp.com/'
  }
    const config = {
      method: 'post',
      url: `${URL}/house-search`,
      data: property
    }

    let res = await axios(config)
    return res.data
}

export default SearchListings