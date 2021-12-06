import {
  Swiper,
  SwiperSlide
} from 'swiper/react/swiper-react.js'
import SwiperCore, {
  EffectFade,
  Mousewheel,
  Pagination
} from 'swiper'

import {
  Welcome
} from '../components/home-section'

SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOptions = {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: 'fade',
  speed: 1000,
}

const Home = () => {
  return (
    <>
      <Swiper  {...swiperOptions}>
        <SwiperSlide>
          {({isActive}) => <Welcome isActive={isActive}/>}
        </SwiperSlide>
        <SwiperSlide>
          slide 2
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home
