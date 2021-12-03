import axios from "axios"

const SubmitSinglePhoto = async (token, photoInfo) => {
    const { selectedFile, submittedHouse } = photoInfo
    const formData = new FormData()
    formData.append('mainImg', selectedFile)
    formData.append('submittedHouse', submittedHouse.data._id)
    const config = {
      method: 'post',
      url: 'http://localhost:4000/houses/photo',
      headers: { 'Authorization': `Bearer ${token}` },
      data: formData
    }

    let res = await axios(config)
    return res
}

export default SubmitSinglePhoto