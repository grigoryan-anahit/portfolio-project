import style from './smallGroup.module.css';

const SmallGroup=(props)=>{

    return (
        
        <div  className={props.smallGroupIsOpen? style.smallgroupVisible: `${ style.smallgroupVisible} ${style.hidden}`} onMouseOut={props.smallGroupClose}>
           <ul className={style.text}>
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
         </ul>
  </div>

    )
}
export default SmallGroup;