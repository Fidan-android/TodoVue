<template>
    <div class="info_item">
          <div class="modal__content">
              <div class="i-header">
                  <a class="arr_btn"></a>
                  <div class="special_btns">
                      <a class="pen_btn"></a>
                      <a class="del_btn"></a>
                  </div>
              </div>
              <div class="i-section">
                  <p class="title_item"></p>
                  <textarea class="title_text" readonly></textarea>
                  <p class="title_date" align="center"></p>
              </div>
          </div>
          <div class="deleteElements">
              <div class="del_wrapper">
                  <a href="profile.html" style="color: #EA4643;" class="delbtn btn_delete_el">delete</a>
                  <a href="#" style="color: #24BD4F;" class="delbtn btn_cancel">cancel</a>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name: "ShowForm",
    props: {
        title: String,
        message: String,
        created: String,
    }
}
</script>