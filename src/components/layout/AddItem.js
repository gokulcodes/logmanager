import React from 'react'

const AddItem = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-model" className="btn-floating btn-large blue darker-2 modal-trigger">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#tech-list-modal"
                    className="btn-floating green modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#tech-modal" className="btn-floating red modal-trigger">
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AddItem
