import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {
  Recipe,
  SignIn,
  SignUp
} from './containers'
import RecipesContainer from './containers/RecipesContainer'
import RecipePage from './containers/RecipePage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={Recipe} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
