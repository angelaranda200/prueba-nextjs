import './Header.module.css'
import Logo from '../../../assets/Logos/logo.png'

const Header = () => {
  return (
    <>
            <header>
                <a href="/" className="logo">
                    <img src={Logo} alt="logo" />
                </a>
                {
                    loginSession ? <NavbarSesion /> : <NavbarAutentication />
                }
            </header>
        </>
  )
}

export default Header