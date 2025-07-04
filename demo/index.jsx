import ReactDOM from 'react-dom'

import App from './App'

const root = document.getElementById('root')

function render(Component) {
  ReactDOM.render(<Component />, root)
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
