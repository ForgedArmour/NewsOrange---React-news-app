import React from 'react'
import './NewsItem.css'

export default function NewsItem(props) {
    return (
        <>
            <div className="news">
                <h1>{props.title}</h1>
                <p className="desc">{props.desc}</p>
                <div className="news-img">
                    <img src={props.imgUrl ? props.imgUrl : "https://1721181113.rsc.cdn77.org/data/images/full/35328/spacex-proposes-to-use-starship-for-the-revised-starlink-gen2-plans.jpg"} width="100%" alt="" />
                    <a href={props.url} target="_blank" rel="noreferrer" className="read-more-btn">Read More</a>
                    <p className="info">Author : {props.author ? props.author.slice(0,27): "Unknown"} <br /> Date : {new Date(props.date).toUTCString()}</p>
                </div>
            </div>
        </>
    )
}
