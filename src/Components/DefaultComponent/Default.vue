<template>
    <div class="app-container">
        <HeaderComponent />
        <main class="content">
            <router-view />
        </main>
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
    /* Phần nội dung mở rộng để đẩy Footer xuống */
}
</style>


<script>
import HeaderComponent from "../HeaderComponent/HeaderComponent.vue";
import FooterComponent from "../FooterComponent/FooterComponent.vue";

export default {
    components: {
        HeaderComponent,
        FooterComponent,
    },
};
</script>