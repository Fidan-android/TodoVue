<template>
    <div class="modal">
          <div class="modal__content">
              <div class="m-header">
                  <h2 class="title">to do list</h2>
                  <a class="close_btn" id="close" @click="this.onCloseForm"></a>
              </div>
              <div class="m-section" align="center">
                  <form @submit="this.onSubmit">
                      <input type="text" name="title" class="field-profile" placeholder="Title" v-model="title" required>
                      <textarea class="field-profile" name="message" placeholder="Description" v-model="message" required></textarea>
                      <input type="date" class="field-profile" name="created" value="Date" v-model="created" required>
                      <input type="submit" class="m-white_btn" value="save" style="width: 100%;">
                  </form>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name: "EditTodo",
    props: {
        title: String,
        message: String,
        created: String,
        onCloseForm: Function,
        onSubmit: Function,
    }
}
</script>