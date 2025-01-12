<script setup>
const tasks = ref([]);
onMounted(async () => {
  let response = await fetch("http://127.0.0.1:8000/api/get-tasks");
  response = await response.json();
  tasks.value = response;
});

const listItems = ref([]);

async function addTask(title, description) {
  const response = await fetch("http://127.0.0.1:8000/api/add-task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: description,
    }),
  });

  if (response.ok) {
    const json = await response.json();
    tasks.value.push({
      title: json.title,
      description: json.description,
      id: json.id,
    });
  }
}
async function editTask(id) {
  const currentTask = listItems.value.find((item) => item.id === id);

  const response = await fetch("http://127.0.0.1:8000/api/update-task", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: currentTask.title,
      description: currentTask.description,
      id: currentTask.id,
    }),
  });

  currentTask.editMode = false;

  if (response.ok) {
    tasks.value = tasks.value.map(task => {
      return task.id === id ? {
        ...task,
        title: currentTask.title,
        description: currentTask.description,
      } : task;
    })
  }
}
async function deleteTask(id) {
  const response = await fetch("http://127.0.0.1:8000/api/delete-task", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });

  if (response.ok) {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  }
}
</script>

<template>
  <h1 class="wtf">чо?</h1>
  <AddingForm v-on:submit="addTask" />
  <List>
    <template v-slot:list-items>
      <ListItem
        v-for="task in tasks"
        :key="task.id"
        ref="listItems"

        :title="task.title"
        :description="task.description"
        :id="task.id"
      >
        <template v-slot:delete-button>
          <Button
              :content="'&#128465;'"
              v-on:click="deleteTask(task.id)"
          />
        </template>
        <template v-slot:edit-button>
          <Button
              :content="'&#9989;'"
              v-on:click="editTask(task.id)"
          />
        </template>
      </ListItem>
    </template>
  </List>
</template>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}
.wtf {
  line-height: 32px;
  margin: 16px 0;
}
</style>
