import axios from "axios"
import Cookies from 'js-cookie';

const DeleteListing = async (e) => {
  if (process.env.NODE_ENV !== 'production') {
    let URL = process.env.REACT_APP_URL
  } else {
    let URL = 'https://whispering-dawn-36595.herokuapp.com/'
  }
    const token = Cookies.get('token')
    const config = {
        method: 'delete',
        url: `${URL}/houses/${e.target.id}`,
        headers: { 'Authorization': `Bearer ${token}` },
      }
  
      let res = await axios(config)
      return res
}

export default DeleteListing