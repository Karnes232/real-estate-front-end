import axios from "axios"

const SearchListings = async (property) => {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_URL}/house-search`,
      data: property
    }

    let res = await axios(config)
    return res.data
}

export default SearchListings