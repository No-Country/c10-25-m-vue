<template>
  <div>
    <header>
      <!-- header content goes here -->
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <!-- footer content goes here -->
    </footer>
  </div>
</template>

<script setup>
export default {
  name: "DefaultLayout",
};
</script>