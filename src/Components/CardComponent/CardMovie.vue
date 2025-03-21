<template>
  <div class="movie-list">
    <CardComponent v-for="(movie, index) in movies" :key="index" :movie="movie" />
  </div>
</template>


<script>
import CardComponent from "../CardComponent/CardComponent.vue";

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      movies: [
        {
          title: "YOU ARE THE APPLE...",
          image: "/movies/you-are-the-apple.jpg",
          genre: "Drama",
          rating: "T16",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "FORBIDDEN FAIRYTALE",
          image: "/movies/forbidden-fairytale.jpg",
          genre: "Comedy",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "DOMINION OF DARK...",
          image: "/movies/dominion-of-dark.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "THE MONKEY: TIẾNG...",
          image: "/movies/the-monkey.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "THE MONKEY: TIẾNG...",
          image: "/movies/the-monkey.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "THE MONKEY: TIẾNG...",
          image: "/movies/the-monkey.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "THE MONKEY: TIẾNG...",
          image: "/movies/the-monkey.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "THE MONKEY: TIẾNG...",
          image: "/movies/the-monkey.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "THE MONKEY: TIẾNG...",
          image: "/movies/the-monkey.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "THE MONKEY: TIẾNG...",
          image: "/movies/the-monkey.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
        {
          title: "THE MONKEY: TIẾNG...",
          image: "/movies/the-monkey.jpg",
          genre: "Horror",
          rating: "T18",
          language: "Phụ đề",
          format: "3D",
        },
      ],
    };
  },
};
</script>

<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 cột */
  grid-gap: 20px; /* Khoảng cách giữa các card */
  max-width: 1200px; /* Giới hạn chiều rộng */
  margin: 20px auto; /* Căn giữa */
}

@media (max-width: 1024px) {
  .movie-list {
    grid-template-columns: repeat(3, 1fr); /* 3 cột nếu màn hình nhỏ hơn 1024px */
  }
}

@media (max-width: 768px) {
  .movie-list {
    grid-template-columns: repeat(2, 1fr); /* 2 cột nếu màn hình nhỏ hơn 768px */
  }
}

@media (max-width: 480px) {
  .movie-list {
    grid-template-columns: repeat(1, 1fr); /* 1 cột nếu màn hình nhỏ hơn 480px */
  }
}
</style>
