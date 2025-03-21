<template>
  <div class="card-theater">
    <img :src="theater.image" alt="Theater Image" />
    <div class="info">
      <h3>{{ theater.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theater: Object,
  },
};
</script>

<style scoped>
.card-theater {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  background: white;
}

.card-theater img {
  width: 100%;
  height: 180px;
}

.info {
  padding: 10px;
}

h3 {
  margin: 10px 0;
  color: #72be43;
}

p {
  margin: 5px 0;
  color: #333;
}
</style>
