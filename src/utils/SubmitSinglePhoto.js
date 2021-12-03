import axios from "axios"

const SubmitSinglePhoto = async (token, photoInfo) => {
    const { selectedFile, submittedHouse } = photoInfo
    const formData = new FormData()
    formData.append('mainImg', selectedFile)
    formData.append('submittedHouse', submittedHouse.data._id)
    if (process.env.NODE_ENV !== 'production') {
      let URL = process.env.REACT_APP_URL
    } else {
      let URL = 'https://whispering-dawn-36595.herokuapp.com/'
    }
    const config = {
      method: 'post',
      url: `${URL}/houses/photo`,
      headers: { 'Authorization': `Bearer ${token}` },
      data: formData
    }

    let res = await axios(config)
    return res
}

export default SubmitSinglePhoto