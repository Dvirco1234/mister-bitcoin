import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import logo from './logo.svg'
import './styles/styles.scss'
import { AppHeader } from './cmps/AppHeader'
import { ContactApp } from './pages/ContactApp'
import { StatisticPage } from './pages/StatisticPage'
import { ContactDetails } from './pages/ContactDetails'
import { HomePage } from './pages/HomePage'
import { ContactEdit } from './pages/ContactEdit'

// const PrivateRoute = (props) => {
//     const isAdmin = true
//     // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
//     return isAdmin ? <Route {...props} /> : <Redirect to='/' />
// }

function App() {
    return (
        <Router>
            <div className="main-app">
                <AppHeader />
                <main className="container">
                    <Switch>
                        {/* <PrivateRoute path='/robot/:id' component={RobotDetails} /> */}
                        <Route path="/contact/edit/:id?" component={ContactEdit} />
                        <Route path="/contact/:id" component={ContactDetails} />
                        <Route path="/statistic" component={StatisticPage} />
                        <Route path="/contact" component={ContactApp} />
                        <Route path="/" component={HomePage} />
                    </Switch>
                </main>
                <footer>
                    <section className="container">Rights 2022 &copy;</section>
                </footer>
            </div>
        </Router>
    )
}

export default App
