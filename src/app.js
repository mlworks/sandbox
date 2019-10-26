import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import AppHeader from 'components/app-header'
import Spacing from 'components/spacing'

// Routes
import routes from 'constants/route-definitions'

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('mousedown', this.setMouseIntent)
    window.addEventListener('keydown', this.removeMouseIntent)
  }

  setMouseIntent = () => document.body.classList.add('mouse-intent')

  removeMouseIntent = event => {
    if (event.keyCode === 9) {
      document.body.classList.remove('mouse-intent')
    }
  }

  render() {
    return (
      <Router>
        <AppHeader />
        <main>
          <Spacing className="app-contents" margin="0 auto" padding="xlg lg">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routes.map(({exact, name, path}) => (
                  <Route
                    key={path}
                    exact={exact}
                    path={path}
                    component={React.lazy(() =>
                      import(`./pages/${name.toLowerCase()}`)
                    )}
                  />
                ))}
              </Switch>
            </React.Suspense>
          </Spacing>
        </main>
      </Router>
    )
  }
}

export default App
