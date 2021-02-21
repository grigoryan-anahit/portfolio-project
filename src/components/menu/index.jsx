import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './menu.module.css';
import MenuNavList from '../menu/menuNavList';

const Menu=({navItems,toggleOpenMenu, menuIsOpen})=>{
   
    return (
        <div>
            <FontAwesomeIcon icon={!menuIsOpen?faBars:faTimes} color='black' size='3x' className={!menuIsOpen?style.menu:`${style.menu} ${style.menuClose} `}onClick={toggleOpenMenu}/>
          
            {menuIsOpen && <div className={style.menuNav} >
                  <MenuNavList navItems={navItems} />
                 
            </div>}
            
        </div>
    )
}
export default Menu;