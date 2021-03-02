import logo from '../../images/logo.png';
import NavList from '../navList';
import style from './nav.module.css';


const Nav=({navItems,toggleAsideOpen})=>{

    return (
        
        <nav className={style.navbar}>
           <div className={style.navlistWithLogo}>
              <div  onClick={toggleAsideOpen}  className={style.logoBox}>
                 <img src={logo} alt='logo' className={style.logoImg} /> 
               </div>
             <NavList navItems={navItems} />
            </div>
        </nav>
        
    )
}
export default Nav;