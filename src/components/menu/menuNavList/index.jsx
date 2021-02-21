import style from './menuNavList.module.css';
import {NavLink} from 'react-router-dom';

const MenuNavList=({navItems})=>{

    const navListJsx=navItems.map(item=>{
        return (
                    <li className={style.menuNavItem} key={item.id}>
                    <NavLink className={style.menuNavLink}
                            to={item.path}
                            activeClassName={style.menuActiveNavLink}
                            exact={item.exact}>
                        {item.component}
                        </NavLink>
             </li>
        )
    })
    return (
        <ul className={style.menuNavList}>
            {navListJsx}
        </ul>

    )
}
export default MenuNavList;