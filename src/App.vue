
<script>
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent.vue";
import FooterComponent from "./Components/FooterComponent/FooterComponent.vue";
import Nav_bar from "./Components/HeaderComponent/Nav_bar.vue";
export default {
  components: {
    HeaderComponent,
    Nav_bar,
    FooterComponent,
  },
};
</script>
<template>
  <div>
  <HeaderComponent />
  <div>
    <Nav_bar />
    <div>
      <router-view/>
    </div>
  </div>
  <FooterComponent />
</div>
</template>
<style>
.app-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Chiều cao ít nhất bằng 100% màn hình */
}

.content {

    flex: 1;

}
.container {

    display: flex;
    flex-direction: column; /* Sắp xếp theo chiều dọc */
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; /* Căn giữa theo chiều dọc */
    width: 100%;
}

.title {
    display: inline-block;
    padding: 8px 20px;
    font-size: 18px;
    font-weight: bold;
    color: #72be43; /* Màu xanh lá */
    border: 1px solid #72be43; /* Viền xanh lá */
    border-radius: 10px; /* Bo góc */
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 50px auto; /* Canh giữa */
    text-align: center;
}

</style>
