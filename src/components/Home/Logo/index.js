import './index.scss';
import LogoS from '../../../assets/images/pfp.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src ={LogoS} alt="M" />
        </div>
    )
}

export default Logo