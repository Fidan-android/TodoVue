<template>
    <div class="info_item">
          <div class="modal__content">
              <div class="i-header">
                  <a class="arr_btn" @click="onCloseForm"></a>
                  <div class="special_btns">
                      <a class="pen_btn" @click="onEdit"></a>
                      <a class="del_btn" @click="onDelete"></a>
                  </div>
              </div>
              <div class="i-section">
                  <p class="title_item">{{ title }}</p>
                  <textarea class="title_text" readonly v-model="message"></textarea>
                  <p class="title_date" align="center">{{ created }}</p>
              </div>
          </div>
          <div class="deleteElements" style="display: block;" v-show="isDelete">
              <div class="del_wrapper">
                  <button style="color: #EA4643;" class="delbtn btn_delete_el" @click="this.onConfirm">delete</button>
                  <button style="color: #24BD4F;" class="delbtn btn_cancel" @click="this.onCancel">cancel</button>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name: "InfoTodo",
    props: {
        id: String,
        title: String,
        message: String,
        created: String,
        onCloseForm: Function,
        onDelete: Function,
        onCancel: Function,
        onConfirm: Function,
        onEdit: Function,
        isDelete: Boolean,
    }
}
</script>