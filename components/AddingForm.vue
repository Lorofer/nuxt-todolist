<script setup>
const emit = defineEmits(["submit"]);

const formTitle = ref("");
const formDescription = ref("");

function submitFrom(event) {
  event.preventDefault();
  emit("submit", formTitle.value, formDescription.value);
  formTitle.value = formDescription.value = "";
}
</script>

<template>
  <form v-on:submit="submitFrom">
    <input class="adding-form-input" type="text" v-model="formTitle" placeholder="Название" />
    <input class="adding-form-input" type="text" v-model="formDescription" placeholder="Описание" />
    <input class="adding-form-input" type="submit" value="Добавить" />
  </form>
</template>

<style scoped>
.adding-form-input {
  width: 100%;
  height: 28px;
}
.adding-form-input:not(:first-child) {
  margin-top: 8px;
}
</style>