import axios from "axios"

const DeletePhotos = async (token, deletePhotos, submittedHouse) => {
    const identifiers = Object.keys(deletePhotos)
    const active = identifiers.filter(function(id) {
    return deletePhotos[id]
    })
    const data = { active }
    const config = {
      method: 'put',
      url: `http://localhost:4000/houses/${submittedHouse.data._id}/photos`,
      headers: { 'Authorization': `Bearer ${token}` },
      data
    }
    let res = await axios(config)
    return res.data
}

export default DeletePhotos