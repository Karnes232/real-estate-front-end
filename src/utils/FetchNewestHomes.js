import axios from "axios"

const FetchNewestHomes = async (setNewestHomes) => {
    const config = {
      method: 'get',
      url: `http://localhost:4000/houses`,
    }

    let res = await axios(config)
    setNewestHomes(res.data.slice(0, 10))
    return res.data
}

export default FetchNewestHomes