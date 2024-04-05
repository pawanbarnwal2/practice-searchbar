import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import LoginPage from "./Pages/LoginPage";
import NavigationBar from "./components/NavigationBar";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Test from "./Pages/Test";

import RouterData from "./Router";
import SimplePage from "./Pages/SimplePage";

function App() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      {/* <RouterData /> */}
      <SimplePage />
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //   slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        //   loop
      >
        <SwiperSlide>
          <div style={{ backgroundColor: "yellow" }}>
            <img
              src="https://images.pexels.com/photos/221387/pexels-photo-221387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ objectFit: "fill", width: "100%", height: "50vh" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img
              src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{ objectFit: "fill", width: "100%", height: "50vh" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "blue" }}>
            <img
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
              style={{ objectFit: "fill", width: "100%", height: "50vh" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ backgroundColor: "purple" }}>
            <img
              src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"
              style={{ objectFit: "fill", width: "100%", height: "50vh" }}
            />
          </div>
        </SwiperSlide>
        ...
      </Swiper> */}
    </>
  );
}

export default App;
