import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../views/Home'
import MovieList from '../views/MovieList'
import MovieDetail from '../views/MovieDetail'
import MovieForm from '../views/MovieForm'

function Routes() {
  return (
    <Switch>
      <Route exact path='/movies' component={MovieList} />
      <Route exact path='/movies/add' component={MovieForm} />
      <Route exact path='/movies/:movieId/edit' component={MovieForm} />
      <Route exact path='/movies/:movieId' component={MovieDetail} />
      <Route path='/redirect' render={() => <Redirect to='/movies' />} />
      <Route exact path='/' component={Home} />
      <Route render={() => <h1>Esta ruta no existe 404</h1>} />
    </Switch>
  )
}

export default Routes