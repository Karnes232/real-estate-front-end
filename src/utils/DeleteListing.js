import axios from "axios"
import Cookies from 'js-cookie';

const DeleteListing = async (e) => {
    const token = Cookies.get('token')
    const config = {
        method: 'delete',
        url: `${process.env.REACT_APP_URL}/houses/${e.target.id}`,
        headers: { 'Authorization': `Bearer ${token}` },
      }
  
      let res = await axios(config)
      return res
}

export default DeleteListing