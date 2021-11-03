import axios from "axios"

const SubmitMultiPhotos = async (token, multiPhotoInfo) => {
    const { photoList, submittedHouse } = multiPhotoInfo
    const formData = new FormData()
    if (photoList) {
      for (let i = 0; i < photoList.length; i++) {
        formData.append(`image`, photoList[i])
      }

      formData.append('submittedHouse', submittedHouse.data._id)
      const config = {
        method: 'post',
        url: 'http://localhost:4000/photo-upload',
        headers: { 'Authorization': `Bearer ${token}` },
        data: formData
      }

      let res = await axios(config)
      return res
    }
    return formData
    
}

export default SubmitMultiPhotos
