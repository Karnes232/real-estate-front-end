import axios from "axios"

const FetchSingleHouse = async (id, setHouse, setImages) => {
    const config = {
      method: 'get',
      url: `http://localhost:4000/houses/${id}`,
    }

    let res = await axios(config)
    setHouse(res.data)
    let images = []
    let imageUrl = {
      original: `http://localhost:4000/houses/${id}/img`,
      thumbnail: `http://localhost:4000/houses/${id}/img`,
    }
    images.push(imageUrl)
    res.data.displayImgs.map((image, index) => {
      console.log(image.image)
      let imageUrl = {
          original: image.image,
          thumbnail: image.image,
      }
      images.push(imageUrl)
    });
    
    setImages(images)
    return res.data
}

export default FetchSingleHouse