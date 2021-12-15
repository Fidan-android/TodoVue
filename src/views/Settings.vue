<template>
    <div class="container">
        <div class="menu">
            <router-link to="/" class="back_profile"></router-link>
            <div class="user__logo" v-bind:style="{ 'background-image': 'url(' + small_photo + ')', 'background-size': 'cover'}">
            </div>
            <p>{{ username }}</p>
            <button class="m-white_btn" @click="onExit">log out</button>
        </div>
        <div class="content" align="center">
            <h1 class="title">profile settings</h1>
            <div class="user__logo_big" @click="changeAvatar" v-bind:style="{ 'background-image': 'url(' + small_photo + ')', 'background-size': 'cover' }">
                <input id="file-input" type="file" name="user_photo" style="display: none;" />
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
    import { signout } from '../helpers/fetch';;
    import { changeImage } from '../helpers/fetch';

    export default {
        name: "Settings",
        created() {
            userInfo(localStorage.getItem("token")).then(data => {
                this.username = data['fullname'];
                this.email = data['email'];
                console.log( "http://a91745zj.beget.tech/user/imgs/" + data['photo_name']);
                this.small_photo = "http://a91745zj.beget.tech/user/imgs/" + data['photo_name'];
            });
        },
        data() {
            return {
                username: "",
                email: "",
                small_photo: "",
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

            changeAvatar(e) {
                var input = document.getElementById('file-input');
                input.type = 'file';    
                input.onchange = (e) => {
                    var file = e.target.files[0];
                    changeImage(localStorage.getItem("token"), file).then(data => {
                        this.small_photo = "http://a91745zj.beget.tech/user/imgs/" + data['photo_name'];
                    });
                };
                input.click();
            } 
        }  
    }
</script>