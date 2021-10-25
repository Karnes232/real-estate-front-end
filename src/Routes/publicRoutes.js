import Home from "../pages/Home"
import Register from "../pages/Register/Register"
import SignIn from "../pages/Signin/SignIn"
import SingleHouse from "../pages/SingleHouse/SingleHouse"

const public_route_group = [
    {path: '/', component: Home},
    {path: '/register', component: Register},
    {path: '/signin', component: SignIn},
    {path: '/house/:id', component: SingleHouse},
]


export default public_route_group