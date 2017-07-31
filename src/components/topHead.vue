<template>
  <div>
    <rightSidebar></rightSidebar>
    <backTop></backTop>
  </div>
</template>
<script>
  import rightSidebar from './rightSidebar.vue';
  import backTop from './backTop.vue';
  // import topTip from './topTip.vue';
  export default{
    components: {
      rightSidebar,
      backTop
    }
  }
</script>