import { render } from 'preact'
import Router from 'preact-router';
import { HomePage } from './pages/HomePage'
import './assets/index.scss';

const Main = () => {
    return (
        <Router>
            <HomePage path="/" />
            {/* <Route path="/success" element={<SuccessPage />} /> */}
        </Router>
    )
}

render(
    <Main />, document.getElementById('appMountPoint')
)
