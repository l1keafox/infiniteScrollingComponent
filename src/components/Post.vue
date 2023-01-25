<template>
    <div class = "post">
        <h2> {{posts.author}}</h2>
        <p> {{posts.content}}</p>
    </div>
</template>

<script>
    export default {
        name:"Post",
        props:{
            posts:Object
        }
    }
</script>

<style scoped>
    .post {
        background: #fff;
        padding:1.5em;
        
    }

    .post:not(:last-child){
        border-bottom:1px solid #ddd
    }

    .post h2{
        font-size: 1.3em;
        color: black;
        padding-bottom: 0.25rem;;
    }
    .post p {
        color: #888
    }
</style>