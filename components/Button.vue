<script setup>
const props = defineProps(["content"]);
const emit = defineEmits(["click"]);

function createEmit(event) {
  event.stopPropagation();
  emit("click", event);
}
</script>

<template>
  <button @click="createEmit" type="button">
    {{ props.content }}
  </button>
</template>

<style scoped></style>
