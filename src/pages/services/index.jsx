import style from './services.module.css';
import img1 from '../../images/img1.1.jpg';
import img2 from '../../images/img1.2.jpg';
import img3 from '../../images/img1.3.jpg';
import {Card} from 'react-bootstrap';

const Services=({smallGroupOpen,middleGroupOpen,seniorGroupOpen })=>{

    return (

       
        <div className={style.servicesPage}>
                    <div className={style.headingBox}>
                          <h1 className={style.heading}>Մեր առօրյան ըստ խմբերի</h1>
                      </div>
              
            <div className={style.groups}>
            <Card style={{ width: '25rem' }} onMouseOver={smallGroupOpen}>
                <Card.Img   variant="top" src={img1} />
                <Card.Body>
                    <Card.Text style={{textAlign:'center'}}>կրտսեր խումբ</Card.Text>
                   
                </Card.Body>
                </Card>

                <Card style={{ width: '25rem', marginLeft:'4rem' }} onMouseOver={middleGroupOpen}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Text style={{textAlign:'center'}}>միջին խումբ</Card.Text>
                   
                </Card.Body>
                </Card>

                <Card style={{ width: '25rem', marginLeft:'4rem' }} onMouseOver={seniorGroupOpen}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Text style={{textAlign:'center'}}>ավագ խումբ</Card.Text>
                   
                </Card.Body>
                </Card>
            </div> 
             <div className={style.footer}></div>
        </div>
      
    )
}
export default Services;