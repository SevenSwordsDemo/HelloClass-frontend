<template>
	<div id='ContentHeader'>
		<img src="../../assets/userPic.jpg" />
		<p :style="{fontSize: FontSize + 'px'}">
			{{userName}}{{called}} 您好！
		</p>
		<p :style="{fontSize: (FontSize - 12) + 'px'}">
			登录状态： {{identity}}
		</p>
	</div>
</template>

<script>
	
export default {
	name: 'ContentHeader',
	computed: {
		FontSize () {
			var screenWidth = document.documentElement.clientWidth;
			var fontsize = 0;
			if(screenWidth < 700){
				fontsize = 16
			}
			else {
				fontsize = 40
			}
			return fontsize;
		},
		called () {
			if(this.isStudent) {
				return "同学"
			}
			else {
				return "老师"
			}
		},
		identity () {
			if(this.isStudent) {
				return "学生"
			}
			else {
				return "教师"
			}
		}
		
	},
	data () {
		return {
			standleScreenWidth: 414,
			standleScreenHeight: 736,
		}
	},
	props: {
		isStudent: Boolean,
		userName: String
	}
}
</script>

<style lang="less">
#ContentHeader {
	width: 100%;
	height: 37.5%;
	line-height: 20px;
	border-radius: 10px 10px 120px 120px;
	background-color: rgba(24, 143, 253, 1);
	text-align: center;
	border: 1px solid rgba(187, 187, 187, 1);
	img {
		top: 12.6%;
		width: 100px;
		height: 100px;
		border-radius: 100%;
		display: block;
		margin: auto;
	}
}
</style>
