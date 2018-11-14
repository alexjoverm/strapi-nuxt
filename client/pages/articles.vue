<template>
  <v-layout row wrap>
    <v-flex sm6 md4 d-flex class="pa-2" v-for="article in articles" :key="article._id">
      <v-card class="item-card">
        <v-img :src="getUrl(article.image)"></v-img>
        <v-card-title class="headline">{{article.title}}</v-card-title>
        <v-card-text v-html="article.description"></v-card-text>
        <v-card-actions>
          <span class="subheading font-weight-medium">{{ article.price }} €</span>
          <v-spacer/>
          <v-btn color="primary" flat nuxt
            :to="getSellerUrl(article.seller)">{{ article.seller.name }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const articles = await $axios.$get('/articles')
    return { articles }
  },

  methods: {
    getUrl(image) {
      return process.env.API_URL + image.url
    },
    getSellerUrl(seller) {
      return `/sellers/${seller._id}`
    }
  }
}
</script>

<style scoped>
.item-card {
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
</style>
