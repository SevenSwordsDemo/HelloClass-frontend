<template>
  <div id="app" :style="{width: screenWidth + 'px',
						height: screenHeight + 'px'}">
		<router-view
			:HomePageW="screenWidth"
			:HomePageH="screenHeight">
			
		</router-view>
		<!-- <HomePage 
				:HomePageW="screenWidth"
				:HomePageH="screenHeight"/> -->
  </div>
</template>

<script>
import HomePage from './Layout/HomePage.vue'
import Login from './Layout/Login.vue'

export default {
	name: 'app',
	components: {
	  HomePage,
	  Login
	},
	data () {
	  return {
		  screenWidth: document.documentElement.clientWidth,
		  screenHeight: document.documentElement.clientHeight,
		//   // 用户身份，学生/老师，需要后端发送
		//   isStudent: true,
		//   // 用户姓名
		//   userName: '龙傲天'
	  }
	},
	methods: {
	  getPageSize() {
		  const that = this
		  window.onresize =()  =>{
			return (()=>{
				window.screenWidth = document.documentElement.clientWidth,
				that.screenWidth = window.screenWidth
				window.screenHeight = document.documentElement.clientHeight,
				that.screenHeight = window.screenHeight;
				//console.log("窗口宽高：" + that.screenWidth + " " +that.screenHeight )
			})()
		  };
	  }
	},
    mounted() {
	    this.getPageSize();
	},
	watch:{
		screenWidth(val){
			// 为了避免频繁触发resize函数导致页面卡顿，使用定时器
			if(!this.timer){
				// 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
				this.screenWidth = val
				this.timer = true
				let that = this
				setTimeout(function(){
					that.timer = false
				},400)
			}
		},
		screenHeight(val){
			if(!this.timer){
				this.screenHeight = val
				this.timer = true
				let that = this
				setTimeout(function(){
					that.timer = false
				},400)
			}
		},
	}
}
</script>

<style lang="less">
#app {
	background-color: rgba(238, 235, 235, 1);
}
</style>
