import style from './navList.module.css';
import {NavLink} from 'react-router-dom';

const NavList=({navItems})=>{

    const navListJsx=navItems.map(item=>{
        return (
                    <li className={style.navItem} key={item.id}>
                    <NavLink className={style.navLink}
                            to={item.path}
                            activeClassName={style.activeNavLink}
                            exact={item.exact}>
                        {item.component}
                        </NavLink>
             </li>
        )
    })
    return (
        <ul className={style.navList}>
            {navListJsx}
        </ul>

    )
}
export default NavList;