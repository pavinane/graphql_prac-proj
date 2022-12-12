import {FaEnvelope,FaIdBadge,FaPhone} from 'react-icons/fa'

export default function ClientInfo({client}){
    return(
        <>
        <h5 className="mt-5">Client Information</h5>
        <ul className="list-group">
            {/* <li className="list-group-item">
                <FaIdBadge className='icons' /> {client.name}
            </li> */}
            {/* <li className="list-group-item">
                <FaEnvelope className='icons' /> {client.email}
            </li>
            <li className="list-group-item">
                <FaPhone className='icons' /> {client.phone}
            </li> */}
        </ul>
        </>
    )
}