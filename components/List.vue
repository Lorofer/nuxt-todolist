<script setup></script>

<template>
  <div class="list">
    <slot name="list-items"> </slot>
  </div>
</template>

<style scoped>
.list {
  margin-top: 16px;
}
.list > *:not(:first-child) {
  margin-top: 8px;
}
</style>
