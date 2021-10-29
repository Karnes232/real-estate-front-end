import DashboardAddListing from "../pages/Dashboard/DashboardAddListing"
import DashboardEditListing from "../pages/Dashboard/DashboardEditListing"
import DashboardUserListings from "../pages/Dashboard/DashboardUserListings"


const auth_route_group = [
    {path: '/dashboard', component: DashboardAddListing},
    {path: '/dashboard/listings', component: DashboardUserListings},
    {path: '/dashboard/listings/:id', component: DashboardEditListing},
]


export default auth_route_group