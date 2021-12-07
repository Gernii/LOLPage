import HomeSection from "../HomeSection";
import {bg2} from '../../../assets/images'
import './champion.scss'
const Champion = props => {
    return (
        <HomeSection
            className={`champions ${props.isActive ? 'active' : ''}`}
            contentClassName='overlay'
            bgImage={bg2}
        >
            <div className="container relative">
                <div className="champion-list">

                </div>
            </div>
        </HomeSection>

    )
}
export default Champion