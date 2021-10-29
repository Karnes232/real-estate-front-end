import axios from "axios"

const EditSingleListing = async (token, data) => {
    const config = {
      method: 'put',
      url: `http://localhost:4000/houses/${data.property._id}`,
      headers: { 'Authorization': `Bearer ${token}` },
      data
    }

    let res = await axios(config)
    return res
}

export default EditSingleListing