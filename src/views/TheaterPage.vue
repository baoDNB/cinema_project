<template>
  <div>
    <HeaderComponent />
    <Nav_bar />

    <div class="container">
      <div class="title">Lịch Chiếu Rạp</div>
      <div class="theater-list">
        <CardTheater v-for="theater in theaters" :key="theater.id" :theater="theater" />
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>

import CardTheater from "../Components/CardComponent/CardTheater.vue";

export default {
  components: {

    CardTheater,
  },
  data() {
    return {
      theaters: [
        {
          id: 1,
          name: "BHD Star The Garden",
          image: "/theaters/Discovery.jpg",
        },
        {
          id: 2,
          name: "BHD Star Pham Ngoc Thach",
          image: "/theaters/Pham_Ngoc_Thach.jpg",
        },
        {
          id: 3,
          name: "BHD Star Discovery",
          image: "/theaters/Discovery.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  
  align-items: left;
  width: 100%;
  margin: 50px auto;
}

.title {
  padding: 8px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #72be43;
  border: 1px solid #72be43;
  border-radius: 10px;
  text-transform: uppercase;
  margin: 50px auto;
  text-align: center;
}

.theater-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 90%;
}
</style>
