<template>
    <div class="modal">
          <div class="modal__content">
              <div class="m-header">
                  <h2 class="title">to do list</h2>
                  <a class="close_btn" id="close"></a>
              </div>
              <div class="m-section" align="center">
                  <form>
                      <input type="text" class="field-profile" placeholder="Title" v-model="title">
                      <textarea class="field-profile" placeholder="Description" v-model="message"></textarea>
                      <input type="date" class="field-profile" value="Date" v-model="created">
                      <input type="submit" class="m-white_btn" value="save" style="width: 100%;">
                  </form>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name: "TodoForm",
    props: {
        title: String,
        message: String,
        created: String,
    }
}
</script>