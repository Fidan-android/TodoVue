<template>
    <div class="modal">
          <div class="modal__content">
              <div class="m-header">
                  <h2 class="title">to do list</h2>
                  <a class="close_btn" id="close" @click="this.onCloseForm"></a>
              </div>
              <div class="m-section" align="center">
                  <form @submit="this.onSubmit">
                      <input type="text" name="title" class="field-profile" placeholder="Title" required>
                      <textarea class="field-profile" name="message" placeholder="Description" required></textarea>
                      <input type="date" class="field-profile" name="created" value="Date"  required>
                      <input type="submit" class="m-white_btn" value="save" style="width: 100%;">
                  </form>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name: "NewTodo",
    props: {
        onCloseForm: Function,
        onSubmit: Function,
    }
}
</script>