import axios from "axios"

const SearchListings = async (property) => {
    const config = {
      method: 'post',
      url: `http://localhost:4000/house-search`,
      data: property
    }

    let res = await axios(config)
    return res.data
}

export default SearchListings