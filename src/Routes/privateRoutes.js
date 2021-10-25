import DashboardAddListing from "../pages/Dashboard/DashboardAddListing"
import DashboardUserListings from "../pages/Dashboard/DashboardUserListings"


const auth_route_group = [
    {path: '/dashboard', component: DashboardAddListing},
    {path: '/dashboard/listings', component: DashboardUserListings},
]


export default auth_route_group