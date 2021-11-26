import axios from "axios"

const FetchAllHomes = async (setHomes) => {
    const config = {
      method: 'get',
      url: `http://localhost:4000/houses`,
    }

    let res = await axios(config)
    setHomes({ features: res.data })
    return res.data
}

export default FetchAllHomes