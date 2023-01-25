<template>

  <ListComponent/>
</template>

<script> 
  import ListComponent from './components/ListComponent.vue';
  export default {
        name:"App",
        components:{
          ListComponent
        }
    }
</script>


<style scoped>
.scroller {
  height: 100%;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>