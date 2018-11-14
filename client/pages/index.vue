<template>
  <v-layout
    row
    wrap
    justify-center
    >
    <v-flex xs12 sm4>
      <v-card>
        <v-img src="https://pbs.twimg.com/profile_images/1014191740083953664/-2BXVNaV_400x400.jpg"></v-img>

        <v-card-title class="headline text-xs-center">Hey Buddy!</v-card-title>
        <v-card-text>Enjoy this store example!</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>


