import React from 'react'

const AddLogModal = () => {
    const [message, setMessage] = React.useState('')
    const [attention, setAttention] = React.useState(false)
    const [tech, setTech] = React.useState('')

    const onSubmit = ( ) => {
        console.log(message, attention, tech) 
    }
    return (
        <div id="add-log-modal" className="modal"  style={modalStyles}>
            <div className="modal-content">
                <h4>Enter System Logs</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>select technician</option>
                            <option className="Bill Gates">Bill Gates</option>
                            <option className="Jack Ma">Jack Ma</option>
                            <option className="Jeff Bezos">Jeff Bezos</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} 
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="" onClick={onSubmit} className="modal-close waves-effect-waves-green btn-flat">Enter</a>
                </div>
            </div>
        </div>
    )
}

const modalStyles= {
    width: '75%',
    height: "75%"
}

export default AddLogModal
