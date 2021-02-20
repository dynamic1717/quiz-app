import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { CreateQuizPage } from './pages/CreateQuizPage'
import { StartPage } from './pages/StartPage'
import { RandomQuizPage } from './pages/RandomQuizPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <StartPage />
      </Route>
      <Route path='/create' exact>
        <CreateQuizPage />
      </Route>
      <Route path='/random' exact>
        <RandomQuizPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}
