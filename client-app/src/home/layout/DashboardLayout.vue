<template>
    <div>
      <header>
        <!-- header contentsp goes here -->
        <span>header Dashboard</span>
      </header>
      <main>
      <router-view></router-view>
    </main>
      <footer>
        <!-- footer content goes here -->
        <Footer></Footer>
      </footer>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import Footer from "../components/Footer.vue";
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Footer
    },
    setup() {
      const message = 'This is my component!';
      return { message };
    },
  });
  </script>