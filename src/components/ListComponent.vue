<template>
    <div class="scrolling-component" ref="scrollComponent">
        <post-component
        v-for="(post,index) in posts"
        :posts="post"
        :key="index"
        />

    </div>
</template>

<script>
import getPosts from './../api/get-posts'
import PostComponent from './Post.vue'
import{ ref, onMounted, onUnmounted } from 'vue'

    export default {
        name:"listComponent",
        components:{
            PostComponent
        },
        setup(){
            const posts = ref(getPosts(10));
            const scrollComponent = ref(null);
            const loadMorePosts = () =>{
                let newPosts = getPosts(10)
                posts.value.push(...newPosts);
            }

            const handleScroll = (e) =>{
                let element = scrollComponent.value;
                if(element.getBoundingClientRect().bottom < window.innerHeight){
                    console.log('triggered');
                    loadMorePosts();
                }
            }
            onMounted(()=>{
                window.addEventListener("scroll",handleScroll)
            })
            onUnmounted(()=>{
                window.removeEventListener("scroll",handleScroll)
            })

            return {
                posts,
                scrollComponent
            }
        }
    }
</script>

<style scoped>

</style>