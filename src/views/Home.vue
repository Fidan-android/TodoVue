<template>
  <div class="container">
      <div class="menu">
          <router-link to="/settings" class="btn_settings"></router-link>
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
                <Todo v-for="todo in todoes" :key="todo.id" v-on:click.native="showForm(todo.id)" :title="todo.title" :message="todo.message" :created="todo.created"></Todo>
              </div>
              <div class="no-item" v-if="!loaded">No todoes</div>
              <button class="btn_add"></button>
          </div>
      </div>

      <!-- Модальные окна -->
      <TodoForm ref="todo-form"/>

      <ShowForm ref="info-form"/>      
  </div>
</template>

<script>
  import { signout } from '../helpers/fetch';
  import { userInfo } from '../helpers/fetch';
  import Todo from '../components/Todo.vue';
  import ShowForm from '../components/ShowForm.vue';
  import TodoForm from '../components/TodoForm.vue';

  export default {
    name: 'Home',
    components: {
      Todo,
      ShowForm,
      TodoForm
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
      },
      showForm(index) {
        
      }
    }
  }
</script>
