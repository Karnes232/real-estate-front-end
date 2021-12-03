import axios from "axios"

const DeletePhotos = async (token, deletePhotos, cloudinaryDelete, submittedHouse) => {
  if (process.env.NODE_ENV !== 'production') {
    let URL = process.env.REACT_APP_URL
  } else {
    let URL = 'https://whispering-dawn-36595.herokuapp.com/'
  }
    const identifiers = Object.keys(deletePhotos)
    const active = identifiers.filter(function(id) {
    return deletePhotos[id]
    })
    const data = { active, cloudinaryDelete }
    const config = {
      method: 'put',
      url: `${URL}/houses/${submittedHouse.data._id}/photos`,
      headers: { 'Authorization': `Bearer ${token}` },
      data
    }
    let res = await axios(config)
    return res.data
}

export default DeletePhotos