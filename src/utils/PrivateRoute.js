import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import CurrentUserContext from '../context/current-user.context'

function PrivateRoute({ children, ...rest }) {
  const user = useContext(CurrentUserContext)
    return (
      <Route {...rest} render={() => {
        return user 
          ? children
          : <Redirect to='/signin' />
      }} />
    )
}

export default PrivateRoute