import axios from "axios"

const FetchSingleHouse = async (id, setHouse, setImages, setProperty, setAmenities) => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_URL}/houses/${id}`,
    }

    let res = await axios(config)
    setHouse(res.data)
    let images = []
    let imageUrl = {
      original: `${process.env.REACT_APP_URL}/houses/${id}/img`,
      thumbnail: `${process.env.REACT_APP_URL}/houses/${id}/img`,
    }
    images.push(imageUrl)
    
    res.data.displayImgs.map((image, index) => {
      let imageReplacement = image.image[0].url
      let slice1 = imageReplacement.slice(0,4)
      let slice2 = imageReplacement.slice(4)
      imageReplacement = `${slice1}s${slice2}`
      let imageUrl = {
          original: imageReplacement,
          thumbnail: imageReplacement,
          id: image.image[0].id
      }
      images.push(imageUrl)
      return true
    });
    
    setImages(images)
    if (setProperty) {
      setProperty({
        _id: res.data._id,
        title: res.data.title,
        description: res.data.description,
        propertyType: res.data.propertyType,
        bedrooms: res.data.bedrooms,
        bathrooms: res.data.bathrooms,
        address: res.data.address,
        city: res.data.city,
        province: res.data.province,
        country: res.data.country,
        sqFoot: res.data.sqFoot,
        price: res.data.price,
        latitude: res.data.latitude,
        longitude: res.data.longitude
      })
    }
    if (setAmenities) { 
      setAmenities({
        aircon: res.data.amenities.aircon,
        balcony: res.data.amenities.balcony,
        dishwasher: res.data.amenities.dishwasher,
        pool: res.data.amenities.pool,
        fridge: res.data.amenities.fridge,
        alarm: res.data.amenities.alarm,
        windowCover: res.data.amenities.windowCover,
        laundry: res.data.amenities.laundry
      })
    }
    return res.data
}

export default FetchSingleHouse