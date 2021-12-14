<template>
    <div class="container">
        <div class="menu">
            <router-link to="/" class="back_profile"></router-link>
            <div class="user__logo">
                <img src="../assets/img/user_mini.png" alt="User photo">
            </div>
            <p>{{ username }}</p>
            <button class="m-white_btn" @click="onExit">log out</button>
        </div>
        <div class="content" align="center">
            <h1 class="title">profile settings</h1>
            <div class="user__logo_big">
                <img src="../assets/img/user_big.png" alt="User photo">
            </div>

            <table class="user_data">
                <tr>
                    <td>Full Name</td>
                    <td class="user_info">{{ username }}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td class="user_info">{{ email }}</td>
                </tr>
            </table>
            <a href="#" class="btn_blue" @click="onExit">log out</a>
        </div>
    </div>
</template>

<script>
    import { userInfo } from '../helpers/fetch';
    import { signout } from '../helpers/fetch';

    export default {
        name: "Settings",
        created() {
            userInfo(localStorage.getItem("token")).then(data => {
                this.username = data['fullname'];
                this.email = data['email'];
            });
        },
        data() {
            return {
                username: "",
                email: "",
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