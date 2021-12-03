import axios from "axios"

const SubmitMultiPhotos = async (token, multiPhotoInfo) => {
  if (process.env.NODE_ENV !== 'production') {
    let URL = process.env.REACT_APP_URL
  } else {
    let URL = 'https://whispering-dawn-36595.herokuapp.com/'
  }
    const { photoList, submittedHouse } = multiPhotoInfo
    const formData = new FormData()
    if (photoList) {
      for (let i = 0; i < photoList.length; i++) {
        formData.append(`image`, photoList[i])
      }

      formData.append('submittedHouse', submittedHouse.data._id)
      const config = {
        method: 'post',
        url: `${URL}/photo-upload`,
        headers: { 'Authorization': `Bearer ${token}` },
        data: formData
      }

      let res = await axios(config)
      return res
    }
    return formData
    
}

export default SubmitMultiPhotos
