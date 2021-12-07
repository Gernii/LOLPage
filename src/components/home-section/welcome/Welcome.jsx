import { useEffect } from 'react'
import './welcome.scss'
import HomeSection from '../HomeSection'
import Button from '../../button/Button'
import {
    bg1,
    champAhri,
    champGaren,
    champAshe,
    distortion,
} from '../../../assets/images'
import hoverEffect from 'hover-effect'
const champImgs = [champAhri, champGaren, champAshe]

const Welcome = props => {

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('.welcome__img__slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent : document.querySelector('.welcome__img__slide'),
                intensity: 0.5,
                image1 : item.getAttribute('src'),
                image2 : nextImg,
                displacementImage: distortion,
                hover: false,
            })
            animates.push(animation)
            // console.log(animation);
        })
        // console.log(animates);
        welcomeImgs.forEach(e => e.remove())

        let currItem = 0
        const autoImageSlide = () => {
            let prevImg = currItem
            currItem = (currItem + 1) % animates.length
            if (!document.hidden){
                animates[prevImg].next()
            }
            setTimeout(() => {
                let canvas = document.querySelectorAll('.welcome__img__slide > canvas')
                document.querySelector('.welcome__img__slide').appendChild(canvas[0])
                animates[prevImg].previous()

            }, 3000)
        }
        setInterval(autoImageSlide, 3000)
    }, [])

    return (
        <HomeSection
            className = {`welcome ${props.isActive ?  'active' : ''}`}
            contentClassName = 'overlay welcome__content'
            bgImage = {bg1}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title">
                        <span>Welcome to</span>
                        <h2 className='main-color'>Summoner's Rift</h2>
                    </div>
                    <div className="description m-t-4">
                        Team up with friends and test your skills in 5v5 MOBA combat. All the high-skill competition you crave, designed especially for mobile and console with revamped controls and streamlined matches.Explore the living universe of Runeterra through lore, comics, games, and more. Then dive into the community of gamers, cosplayers, musicians, and content creators who are waiting for you to join them.
                    </div>
                    <div className="btns m-t-4">
                        <Button className='btn-main'>PLAY NOW</Button>
                        <Button className='btn-second'>GET STARTED</Button>
                    </div>
                </div>
            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide">
                    { champImgs.map((img, index) => <img src={img} key={index} /> ) }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome
