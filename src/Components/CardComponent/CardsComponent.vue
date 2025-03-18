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
          },{
            title: "THE MONKEY: TIẾNG...",
            image: "/movies/the-monkey.jpg",
            genre: "Horror",
            rating: "T18",
            language: "Phụ đề",
            format: "3D",
          },{
            title: "THE MONKEY: TIẾNG...",
            image: "/movies/the-monkey.jpg",
            genre: "Horror",
            rating: "T18",
            language: "Phụ đề",
            format: "3D",
          },{
            title: "THE MONKEY: TIẾNG...",
            image: "/movies/the-monkey.jpg",
            genre: "Horror",
            rating: "T18",
            language: "Phụ đề",
            format: "3D",
          },{
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
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  </style>
