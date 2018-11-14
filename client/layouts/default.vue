<template>
  <v-app>
    <v-toolbar fixed app dark color="purple">
      <v-toolbar-title>
        <nuxt-link class="no-link" to="/">
          BlendarStore
        </nuxt-link>
      </v-toolbar-title>


      <v-spacer></v-spacer>

      <v-btn flat nuxt to="/articles">
        Articles
      </v-btn>
      <v-btn flat nuxt to="/stores">
        Stores
      </v-btn>
      <v-btn flat nuxt to="/logout">
        Logout
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.no-link {
  color: white;
  text-decoration: none;
}
</style>

