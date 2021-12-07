import {useRef, useState} from "react";
import './champion-card.scss'
const ChampionCard = props => {
    const item = props.item
    return (
        <div className='champion-card'>
    <div className="frame">
        <div className="bg bg-image overlay" style={{backgroundImage: `url(${item.url})`}}></div>
        <img src={item.img} alt=""/>
        <div className="name">{item.name}</div>
    </div>
        </div>
    )
}

export default ChampionCard