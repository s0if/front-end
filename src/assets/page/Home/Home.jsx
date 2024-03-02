import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  const [categorie, setCategorie] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`)
    setCategorie(data.categories);
  }
  useEffect(
    () => {
      getData();
    }, []

  )
  return (
      <Swiper className='m-1'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
       {  
             categorie.map(categorie =>
               <SwiperSlide key={categorie.id}>
                 <div>
                   <img src={categorie.image.secure_url} alt="" />
                    <h2>{categorie.name}</h2> 
                 </div>
               </SwiperSlide>
             )
           }
    </Swiper>
    
  )
}

export default Home
