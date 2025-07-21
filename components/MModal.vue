<script setup lang="ts">
import Custom_cursor from './custom_cursor.vue';

</script>

<template>
  <div class="relative z-50">
    <div class="aa fixed inset-0 bg-white bg-opacity-40 backdrop-blur-sm">
      <div class="modal fixed inset-0 pt-4 pl-8 pr-8 ">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@media (max-width: 640px)
  .aa
    --tw-bg-opacity: 0.9
    .modal
      padding-left: 0
      padding-right: 0
      padding-top: 0
      margin: 2.5vw 2.5vw
      margin-top: -.1rem
</style>
