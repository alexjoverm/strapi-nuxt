<template>
  <v-layout row wrap>
    <v-flex sm6 md4 d-flex class="pa-2" v-for="store in stores" :key="store._id">
      <v-card class="item-card">
        <v-card-title class="headline">{{store.name}}</v-card-title>
        <v-card-text>
          <p><b>Address: </b>{{ store.address }}</p>
          <p><b>VAT Number: </b>{{ store.vat_number }}</p>
        </v-card-text>
        <!-- <v-card-actions>
          <span class="subheading font-weight-medium">{{ store.price }} €</span>
          <v-spacer/>
          <v-btn color="primary" flat nuxt
            :to="getSellerUrl(store.seller)">{{ store.seller.name }}</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const stores = await $axios.$get('/sellers')
    return { stores }
  },

  methods: {
    // getUrl(image) {
    //   return process.env.API_URL + image.url
    // },
    // getSellerUrl(seller) {
    //   return `/sellers/${seller._id}`
    // }
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
