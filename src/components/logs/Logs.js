import React, {useState, useEffect} from 'react'
 import axios from 'axios'
import LogItem from './LogItem'
import Preloaders from '../layout/Preloaders'

const Logs = () => {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getLogs()
    }, [])
    const getLogs = async () => {
        setLoading(true)
        const response =  await axios.get('http://localhost:5000/logs')
        const data = response.data 
        setLogs(data)
        setLoading(false)
    }

    if(loading){
        return <Preloaders /> 
    }
    return (
        <div className="container">
        <ul className="collection-with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
        {!loading && logs.length === 0 ? (<p>No logs to show</p>) : (logs.map(log => <LogItem log={log} key={log.id} />))}
        </ul>
        </div>
    )
}

export default Logs
