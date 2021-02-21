import style from './home.module.css';
import CarouselPage from '../../components/Carousel/carouselPage';
import CarouselPageText from '../../components/Carousel/carouselPageText';
const Home=()=>{
 
  return (
        <div className={style.homePage}>
           <div className={style.carouselBox}>
                <CarouselPageText />
                 <CarouselPage />
              </div>
           
           
        </div>
    )
}
export default Home;