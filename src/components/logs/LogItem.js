import React from 'react'
import Moment from 'react-moment'

const LogItem = ({log}) => {
    return (
        <ul className="collection">
        <li className="collection-item">
            <a href="" className={`model-trigger ${log.attention ? "red-text" : "blue-text"}`}>{log.message}</a><br/>
            <span className="grey-text">ID#{log.id}{' '}</span>
            last Updated by {' '} <span className="black-text">{log.tech}</span> on {' '}
            <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
            <a href="" className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
        </ul>
    )
}


export default LogItem
