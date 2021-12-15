<template>
  <div class="container">
      <div class="menu">
          <router-link to="/settings" class="btn_settings"></router-link>
          <div class="user__logo" v-bind:style="{ 'background-image': 'url(' + userphoto + ')', 'background-size': 'cover'}">
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
              <button class="btn_add" @click="() => { this.showNewTodo = true; }"></button>
          </div>
      </div>

      <!-- Модальные окна -->
      <EditTodo ref="todoForm" v-show="showModal" :onCloseForm="onCloseForm" :onSubmit="onConfirmEdit"
            :id.sync="todo.id" :title.sync="todo.title" :message.sync="todo.message" :created.sync="todo.created"/>
      
      <NewTodo ref="newForm" v-show="showNewTodo" :onCloseForm="onCloseForm" :onSubmit="onCreateTodo"/>

      <InfoTodo ref="infoForm" v-show="showInfo" :onCloseForm="onCloseForm" :id="idTodo" :title="todo.title"
            :message="todo.message" :created="todo.created" :isDelete="isDelete" 
              :onDelete="() => {this.isDelete = true; }" :onEdit="onEdit" :onCancel="() => { this.isDelete = false; }"
               :onConfirm="onConfirmDelete"/>      
  </div>
</template>

<script>
  import { signout } from '../helpers/fetch';
  import { userInfo } from '../helpers/fetch';
  import { createTodo } from '../helpers/fetch';
  import { deleteTodo } from '../helpers/fetch';
  import { editTodo } from '../helpers/fetch';
  import Todo from '../components/Todo.vue';
  import InfoTodo from '../components/InfoTodo.vue';
  import EditTodo from '../components/EditTodo.vue';
  import NewTodo from '../components/NewTodo.vue';

  export default {
    name: 'Home',
    components: {
      Todo,
      InfoTodo,
      EditTodo,
      NewTodo
    },
    created() {
      userInfo(localStorage.getItem("token")).then(data => {
        this.username = data['fullname'];
        this.userphoto = "http://a91745zj.beget.tech/user/imgs/" + data['photo_name'];
        this.todoes = data['todoes'];
      });
    },
    data(){
      return {
        username: "",
        userphoto: "",
        todoes: [],
        showModal: false,
        showInfo: false,
        showNewTodo: false,
        todo: {},
        isDelete: false,
        idTodo: "",

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
        
        for (let i = 0; i < this.todoes.length; i++) {
          if (this.todoes[i].id == index) {
            this.todo = this.todoes[i];
          }
        };
        this.idTodo = this.todo.id;
        this.showInfo = true;
      },


      onCloseForm() {
        this.showModal = false;
        this.showInfo = false;
        this.showNewTodo = false;
        this.isDelete = false;
      },


      onCreateTodo(e) {
        e.preventDefault();
        createTodo(localStorage.getItem("token"), e.target).then((data) => {
          e.target.reset();
          this.onCloseForm();
          this.todoes = data['todoes'];
        });
      },


      onEdit() {
        this.onCloseForm();
        this.showModal = true;
      },


      onConfirmDelete() {
        deleteTodo(localStorage.getItem("token"), this.idTodo).then(data => {
          this.onCloseForm();
          this.todoes = data['todoes'];
        });        
      },

      onConfirmEdit(e) {
        e.preventDefault();
        editTodo(localStorage.getItem("token"), e.target).then(data => {
          this.onCloseForm();
          this.todoes = data['todoes'];
        });
      }

    }
  }
</script>
