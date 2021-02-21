import style from './contacts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faEnvelope,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Contacts=()=>{
    return (
        <div className={style.contactsPage} >
              <h1 className={style.contactsHeading} >Հետադարձ կապ</h1>
            <ul className={style.contactList}>
                <li className={style.contactItem} >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className={style.contactsIcon}/>
                    <span className={style.contactsSpan}>Հասցե:</span>
                     <p className={style.contactsP}>ՀՀ, Արարատի մարզ, ք.Արտաշատ, Օգոստոսի 23/111 </p>
                </li>
                <li className={style.contactItem}>
                    <FontAwesomeIcon icon={faEnvelope}  className={style.contactsIcon}/>
                    <span className={style.contactsSpan}>Էլ-փոստ:</span>
                    <p className={style.contactsP}>yepremyanCenter@mail.ru </p>          
                </li>
                <li className={style.contactItem}>
                     <FontAwesomeIcon icon={faPhoneAlt}  className={style.contactsIcon}/>
                    <span className={style.contactsSpan}>Հեռ.:</span>
                    <p className={style.contactsP}>+374 (95) 025753</p>             
                </li>
            </ul>
            <div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3058.381508808791!2d44.54543170214696!3d39.955222239808805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1613898448047!5m2!1sru!2s"
                       width="700" height="450" style={{border:0}} allowfullscreen="" loading="lazy">
                </iframe> 
            </div>
        </div>

    )
}
export default Contacts;