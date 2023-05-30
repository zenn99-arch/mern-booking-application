import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './reserve.css'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Reserve = ({setOpen, hotelId}) => {
    return(
        <div className='reserve' >
            <div className='rContainer' >
                <FontAwesomeIcon icon={faCircleXmark} onClick={() => setOpen(false)} className='rClose' />
                <span> Select your rooms</span>
            </div>
        </div>
    )
}

export default Reserve;