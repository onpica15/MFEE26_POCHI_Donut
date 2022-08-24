// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AuthContext from '../../pages/member/components/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import H2 from '../../components/H2';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function App() {
  const { authorized } = useContext(AuthContext);
  return (
    <>
      <div className="vh-100">
        <H2 title="人氣商品" Entitle="HOT" />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link className="text-decoration-none" to={'Product'}>
              <div className="mx-auto col-md-11">
                <img className="w-100 h-100" src="./images/Hot-2.png" alt="" />
                <p className="text-center bingH5 pb-5">飲品</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="text-decoration-none" to={'Product'}>
              <div className="mx-auto col-md-11">
                <img className="w-100 h-100" src="./images/Hot-1.png" alt="" />
                <p className="text-center bingH5 pb-5">招牌波堤</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="text-decoration-none" to={'Product'}>
              <div className="mx-auto col-md-11">
                <img className="w-100 h-100" src="./images/Hot-3.png" alt="" />
                <p className="text-center bingH5 pb-5">圓形甜甜圈</p>
              </div>
            </Link>
          </SwiperSlide>
          {authorized === true ? (
            <SwiperSlide>
              <Link
                className="text-decoration-none"
                to={'/abingindex/customized'}
              >
                <div className="mx-auto col-md-11 mb-4">
                  <img
                    className="w-100 h-100"
                    src="./images/Hot-4.png"
                    alt=""
                  />
                  <p className="text-center bingH5 pb-5">客製化甜甜圈</p>
                </div>
              </Link>
            </SwiperSlide>
          ) : null}
        </Swiper>
      </div>
    </>
  );
}
