<template>
  <div class="carousel-container1">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="(card, index) in cards" :key="index">
        <Card :card="card" />
      </Slide>
      <template #addons>
        <!-- Nút Prev / Next có icon -->
        <Navigation>
          <template #prev>
            <span class="custom-prev">❮</span>
          </template>
          <template #next>
            <span class="custom-next">❯</span>
          </template>
        </Navigation>
        <!-- Pagination được chỉnh sửa -->
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Card from "../CardComponent/Card.vue";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Card,
  },
  data() {
    return {
      carouselConfig: {
        itemsToShow: 3,
        wrapAround: true,
        autoplay: false,
        autoplaySpeed: 3000,
        transition: 500,
      },

      cards: [
        {
          title: "COMBO XMAS SIÊU CUTE TẠI BHD STAR",
          image: "/cards/combo_xmas.jpg",
          description:"GIÁNG SINH LUNG LINH TẠI BHD STAR Chào đón Giáng Sinh tại BHD Star với bộ ly túi xinh iu nè cả nhà ơi Mau mau đến rạp BHD Star ngay để đón Giáng Sinh sớm nhé các bạn ơi Sản phẩm đã có mặt tại cụm rạp BHD Star TP.HCM Đặt vé tại: bhdstar.vn […]"
        },
        {
          title: "COMBO XMAS SIÊU CUTE TẠI BHD STAR",
          image: "/cards/combo_xmas.jpg",
          description:"GIÁNG SINH LUNG LINH TẠI BHD STAR Chào đón Giáng Sinh tại BHD Star với bộ ly túi xinh iu nè cả nhà ơi Mau mau đến rạp BHD Star ngay để đón Giáng Sinh sớm nhé các bạn ơi Sản phẩm đã có mặt tại cụm rạp BHD Star TP.HCM Đặt vé tại: bhdstar.vn […]"
        },
        {
          title: "COMBO XMAS SIÊU CUTE TẠI BHD STAR",
          image: "/cards/combo_xmas.jpg",
          description:"GIÁNG SINH LUNG LINH TẠI BHD STAR Chào đón Giáng Sinh tại BHD Star với bộ ly túi xinh iu nè cả nhà ơi Mau mau đến rạp BHD Star ngay để đón Giáng Sinh sớm nhé các bạn ơi Sản phẩm đã có mặt tại cụm rạp BHD Star TP.HCM Đặt vé tại: bhdstar.vn […]"
        },
        {
          title: "COMBO XMAS SIÊU CUTE TẠI BHD STAR",
          image: "/cards/combo_xmas.jpg",
          description:"GIÁNG SINH LUNG LINH TẠI BHD STAR Chào đón Giáng Sinh tại BHD Star với bộ ly túi xinh iu nè cả nhà ơi Mau mau đến rạp BHD Star ngay để đón Giáng Sinh sớm nhé các bạn ơi Sản phẩm đã có mặt tại cụm rạp BHD Star TP.HCM Đặt vé tại: bhdstar.vn […]"
        },
        {
          title: "COMBO XMAS SIÊU CUTE TẠI BHD STAR",
          image: "/cards/combo_xmas.jpg",
          description:"GIÁNG SINH LUNG LINH TẠI BHD STAR Chào đón Giáng Sinh tại BHD Star với bộ ly túi xinh iu nè cả nhà ơi Mau mau đến rạp BHD Star ngay để đón Giáng Sinh sớm nhé các bạn ơi Sản phẩm đã có mặt tại cụm rạp BHD Star TP.HCM Đặt vé tại: bhdstar.vn […]"
        }
      ],
    };
  },
};
</script>

<style>

.carousel-container1 {

  width: 100%;
  margin: auto;
  max-width: 1355px; /* Đảm bảo có max-width để không bị nhảy */

   /* Ngăn nội dung tràn */


}


.carousel__pagination {
  position: relative;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 8px;
}


.carousel__pagination-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ccc;
  transition: background-color 0.3s, transform 0.3s;
}

.carousel__pagination-button:hover {
  background-color: #999;
}

.carousel__pagination-button--active {
  background-color: #58b947 !important;
  transform: scale(1.3);
}



.carousel__prev,
.carousel__next {
  font-size: 24px;
  background: rgba(0, 255, 0, 0.2);
  color: #4caf50; /* Màu xanh lá */
  border: none;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  transition: background 0.3s ease-in-out;
}

.carousel__prev {
  left: 10px;
}

.carousel__next {
  right: 10px;
}

.carousel__prev:hover,
.carousel__next:hover {
  background: rgba(0, 255, 0, 0.5);
}

.custom-prev,
.custom-next {
  font-size: 32px;
  font-weight: bold;
  padding: 5px;
}

</style>
