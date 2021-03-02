import style from './home.module.css';
import CarouselPage from '../../components/Carousel/carouselPage';
const Home=()=>{
 
  return (
        <div className={style.homePage}>
                <div className={style.carouselBoxImg}> <CarouselPage /></div>
             </div>
    )
}
export default Home;