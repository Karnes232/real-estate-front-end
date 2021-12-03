import axios from "axios"

const FetchAllHomes = async (setHomes) => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_URL}/houses`,
    }

    let res = await axios(config)
    setHomes({ features: res.data })
    return res.data
}

export default FetchAllHomes