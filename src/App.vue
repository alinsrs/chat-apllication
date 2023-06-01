<template>
  <v-app app :style="{'background-color': $vuetify.theme.currentTheme.background}">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import router from "@/router";

export default {
  name: 'App',

  data() {},


    methods : {
      router() {
        return router
      }
  }
}
</script>
