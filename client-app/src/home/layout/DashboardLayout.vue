<template>
    <div>
      <header>
        <!-- header contentsp goes here -->
        <HeaderDashboard/>
      </header>
      <main>
      <router-view></router-view>
    </main>
      <footer>
        <!-- footer content goes here -->
        <Footer/>
      </footer>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import Footer from "../components/Footer.vue";
  import HeaderDashboard from "../components/Dashboard/HeaderDashboard.vue"
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Footer,
      HeaderDashboard
    },
    setup() {
      const message = 'This is my component!';
      return { message };
    },
  });
  </script>