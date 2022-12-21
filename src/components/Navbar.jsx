import logo from '../img/logo.svg'
import '../styles/style.css'

export const Navbar = () => {
    return (
        <>
            <div className="div-navbar">
                <div>
                    <ul className='ul-navbar'>
                        <li><img src={logo} alt="Logo " /></li>
                        <li className="list-item">Collection</li>
                        <li className="list-item">Men</li>
                        <li className="list-item">Women</li>
                        <li className="list-item">About</li>
                        <li className="list-item">Contact</li>
                    </ul>
                </div>
                <div>

                </div>
            </div>


        </>
    )
}
