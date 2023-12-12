import Styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();

  return(
    <header className={Styles.Header}>
      <img className={Styles.Logo} alt={'logo'} src={require('../image/logo.png')} onClick={()=>{navigate(`/`); window.location.reload();}}></img>
    </header>
  )
}

export default Header;