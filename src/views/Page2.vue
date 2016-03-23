<template>
  <div class="page" transition="app">
    <div class="hd">
      <h1 class="page_title">Page 2</h1>
    </div>
  </div>
  <ii-footer v-show="!hideFooter"></ii-footer>
</template>

<script> 
import IiFooter from '../components/Footer.vue'

export default {
  components: {
    IiFooter
  }
}
</script>