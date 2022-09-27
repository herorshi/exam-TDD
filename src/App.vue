<template>
  <v-app>
    <v-app-bar app color="primary" dark class="elevation-0">
      <router-link to="/examOne" class="text-decoration-none white--text">
        <v-toolbar-title> แบบทดสอบ 1 </v-toolbar-title>
      </router-link>
      <router-link to="/examTwo" class="text-decoration-none white--text mx-4">
        <v-toolbar-title> แบบทดสอบ 2 </v-toolbar-title>
      </router-link>
      <router-link to="/examThree" class="text-decoration-none white--text">
        <v-toolbar-title> แบบทดสอบ 3 </v-toolbar-title>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
