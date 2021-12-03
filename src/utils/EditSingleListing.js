import axios from "axios"

const EditSingleListing = async (token, data) => {
    const config = {
      method: 'put',
      url: `${process.env.REACT_APP_URL}houses/${data.property._id}`,
      headers: { 'Authorization': `Bearer ${token}` },
      data
    }

    let res = await axios(config)
    return res
}

export default EditSingleListing