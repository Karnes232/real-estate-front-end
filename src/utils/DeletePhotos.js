import axios from "axios"

const DeletePhotos = async (token, deletePhotos, cloudinaryDelete, submittedHouse) => {
    const identifiers = Object.keys(deletePhotos)
    const active = identifiers.filter(function(id) {
    return deletePhotos[id]
    })
    const data = { active, cloudinaryDelete }
    const config = {
      method: 'put',
      url: `${process.env.REACT_APP_URL}/houses/${submittedHouse.data._id}/photos`,
      headers: { 'Authorization': `Bearer ${token}` },
      data
    }
    let res = await axios(config)
    return res.data
}

export default DeletePhotos