import style from './aside.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Card} from 'react-bootstrap';
import asideImg from '../../images/asideImg.jpg';


const Aside=(props)=>{

    return (
        <div className={props.asideIsOpen? style.aside:`${style.aside} ${style.hidden}` }>
        
            <Card  className={style.card} >
                <Card.Img src={asideImg} className={style.cardImgBox}/>
             <Card.Body>
                <Card.Title className={style.cardTitle}>Ողջույն!</Card.Title>
                <Card.Text className={style.cardText}>
                Ուրախ եմ"Փոքրիկ իշխաններ"ՄԶԿ֊ի հիմնադրման, կայացման և գրանցած հաջողությունների համար։ Կենտրոնն իրենից ներկայացնում է գեղեցիկ ընտանիք, որտեղ գերիշխում է սերը, հոգատարությունը, մեծ  նվիրումը սաների և մեծագույն  հարգանքը ծնողների հանդեպ։
            Հարկ է նշել աշխատակազմի պրոֆեսիոնալիզմը և բարձր գիտակցումը իր կատարած աշխատանքի վերջնանպատակի վերաբերյալ ։ Կենտրոնի հիմնադրման նպատակն է  ապահովել  2֊6տ. երեխաների  բազմակողմանի ու ներդաշնակ  զարգացումն ըստ տարիքի և տարիքային առանձնահատկությունների։
           </Card.Text>
            </Card.Body>
            </Card>
            <FontAwesomeIcon icon={faTimes}  className={style.asideCloseIcon} cursor='pointer' onClick={props.toggleAsideOpen}/>
        </div>
    )
}
export default Aside;