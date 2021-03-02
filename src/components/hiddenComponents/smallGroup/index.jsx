import style from './smallGroup.module.css';
import {Container,Row,Col} from 'react-bootstrap';
const SmallGroup=(props)=>{

    return (
        <Container><Row md='8' sm='10' xs='1'>
        <div className={props.smallGroupIsOpen? style.smallgroupVisible: `${ style.smallgroupVisible} ${style.hidden}`} onMouseOut={props.smallGroupClose}>
           <Col md='12' xs='6'><ul className={style.text}>
                  Մեր առօրյան կրտսեր խմբում
                <li className={style.textLi} >մարմնամարզություն</li>
                <li className={style.textLi}>կյանքի հմտություններ</li>
                <li className={style.textLi}>նկարչություն</li>
                <li className={style.textLi}>ավազանկարչություն</li>
                <li className={style.textLi}>գրական խոսքի զարգացում </li>
                <li className={style.textLi}>տրամաբանությունը զարգացնող խաղեր</li>
                <li className={style.textLi}>հմուտ ձեռքեր</li>
                <li className={style.textLi}>անգլերեն</li>
                <li className={style.textLi}>ռուսերեն</li>
         </ul></Col>
  </div>
</Row></Container>
    )
}
export default SmallGroup;