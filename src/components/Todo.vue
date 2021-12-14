<template>
    <div class="item dark">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <label>Created at {{ created }}</label>
        <a class="trash_btn"></a>
    </div>
</template>

<script>
    export default {
        name: 'Todo',
        props: {
            title: String,
            message: String,
            created: String
        }
    }
</script>