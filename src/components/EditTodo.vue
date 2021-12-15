<template>
    <div class="modal">
          <div class="modal__content">
              <div class="m-header">
                  <h2 class="title">to do list</h2>
                  <a class="close_btn" id="close" @click="this.onCloseForm"></a>
              </div>
              <div class="m-section" align="center">
                  <form @submit="this.onSubmit">
                      <input type="hidden" name="id" v-model="idInput"/>
                      <input type="text" name="title" class="field-profile" placeholder="Title" v-model="titleInput" required>
                      <textarea class="field-profile" name="message" placeholder="Description" v-model="messageInput" required></textarea>
                      <input type="date" class="field-profile" name="created" value="Date" v-model="createdInput" required>
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
        id: String,
        title: String,
        message: String,
        created: String,
        onCloseForm: Function,
        onSubmit: Function,
    },
    computed: {
        idInput: {
            get: function(){
                return this.id;
            },
            set: function(newValue){
                this.$emit('update:id', newValue)
            }   
        },
        titleInput: {
            get: function(){
                return this.title;
            },
            set: function(newValue){
                this.$emit('update:title', newValue)
            }   
        },
        messageInput: {
            get: function(){
                return this.message;
            },
            set: function(newValue){
                this.$emit('update:message', newValue)
            }   
        },
        createdInput: {
            get: function(){
                return this.created;
            },
            set: function(newValue){
                this.$emit('update:created', newValue)
            }   
        },
    }
}
</script>