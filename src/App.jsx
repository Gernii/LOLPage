import 'swiper/swiper.scss'
import 'swiper/modules/effect-fade/effect-fade.scss'
import 'swiper/modules/pagination/pagination.scss'
import './assets/scss/styles.scss'

import Header from './components/header/Header'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
