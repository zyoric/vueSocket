<template>
  <div class="hello">
    <p>{{msg}}</p>
    <el-button round @click="clickBtn">圆形按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg : 'Welcome to Your Vue.js App',
      id : '1122'
    }
  },
  sockets : {
    connect: ()=>{
      this.id = this.$socket.id;
    },
    customEmit:( val )=>{
      console.log( 'customEmit a val : ' + val );
    }
  },
  methods : {
    clickBtn : ( val )=>{
      console.log( this );
      // this.$socket.emit( val );
    }
  }
}
</script>

<style scoped>

p {
  color: #42b983;
}
</style>
