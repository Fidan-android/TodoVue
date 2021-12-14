<template>
  <div class="container">
      <div class="menu">
          <a href="settings.html" class="btn_settings"></a>
          <div class="user__logo">
              <img src="../assets/img/user_mini.png" alt="User photo">
          </div>
          <p>{{ username }}</p>
          <button class="m-white_btn" @click="onExit">log out</button>
      </div>
      <div class="list" align="center">
          <h1 class="title">to do list</h1>
          <div class="content__wrapper">
              <p class="mini_title">list of todo</p>
              <div class="items" v-if="loaded">
                <Todo v-for="todo in todoes" :key="todo.id" :title="todo.title" :message="todo.message" :created="todo.created"></Todo>
              </div>
              <div class="no-item" v-if="!loaded">No todoes</div>
              <button class="btn_add"></button>
          </div>
      </div>

      <!-- Модальные окна -->
      <div class="modal">
          <div class="modal__content">
              <div class="m-header">
                  <h2 class="title">to do list</h2>
                  <a class="close_btn" id="close"></a>
              </div>
              <div class="m-section" align="center">
                  <form>
                      <input type="text" class="field-profile" placeholder="Title">
                      <textarea class="field-profile" placeholder="Description"></textarea>
                      <input type="date" class="field-profile" value="Date">
                      <input type="submit" class="m-white_btn" value="save" style="width: 100%;">
                  </form>
              </div>
          </div>
      </div>

      <div class="info_item">
          <div class="modal__content">
              <div class="i-header">
                  <a class="arr_btn" id="close_info"></a>
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
      </div>

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
  </div>
</template>

<script>
  import { signout } from '../helpers/fetch';
  import { userInfo } from '../helpers/fetch';
  import Todo from '../components/Todo.vue';

  export default {
    name: 'Home',
    components: {
      Todo
    },
    created() {
      userInfo(localStorage.getItem("token")).then(data => {
        this.username = data['fullname'];
        this.todoes = data['todoes'];
      });
    },
    data(){
      return {
        username: "",
        todoes: [],
      }
    },
    computed: {
      loaded() {
        return this.todoes?.length > 0
      }
    },
    methods: {
      onExit(e) {
        e.preventDefault();
        var route = this.$router;
        signout(localStorage.getItem('token')).then(data => {
          if (data['code'] == '200') {
            setTimeout(() => {
              localStorage.removeItem("token");
              route.push('/login').catch(() => {});
            }, 3000);
          } else {
            console.log(data);
          }
        });
      }
    }
  }
</script>
