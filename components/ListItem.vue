<script setup>
const props = defineProps(["title", "description", "id"]);

const editMode = ref(false);
const title = ref(props.title);
const description = ref(props.description);
const id = props.id;

defineExpose({
  editMode, title, description, id
});

function cancel() {
  editMode.value = false;
  title.value = props.title;
  description.value = props.description;
}
</script>

<template>
  <div class="list-item">
    <div
        class="list-item-content"
        v-if="!editMode"
        v-on:click="editMode = !editMode"
    >
      <div class="list-item-text">
        <h2 class="list-item-title">
          {{ props.title }}
        </h2>
        <p class="list-item-description" v-if="!editMode">
          {{ props.description }}
        </p>
      </div>
      <slot name="delete-button"></slot>
    </div>
    <div
        class="list-item-form"
        v-else
    >
      <div class="list-item-inputs">
        <input type="text" v-model="title">
        <input type="text" v-model="description">
      </div>
      <div class="list-item-buttons-container">
        <Button
            class="list-item-button"
            :content="'&#10060;'"
            v-on:click="cancel"
        />
        <slot class="list-item-button" name="edit-button"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  padding: 12px;
  border: 1px solid grey;
  border-radius: 4px;

  .list-item-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .list-item-title {
      font-size: 16px;
      margin: 0;
    }

    .list-item-description {
      font-size: 14px;
      margin: 6px 0 0;
    }
  }

  .list-item-form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .list-item-buttons-container {
      display: flex;
      gap: 8px;
    }
  }

  :slotted(Button), Button {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }
}
</style>
