<template>
	<div id="PagesHeader">
		<span 
			:style="{fontSize: titleSize + 'px'}">
			{{title}}
		</span>
	</div>
</template>

<script>
	
export default {
	name: 'PagesHeader',
	props: {
		title: String
	},
	computed: {
		titleSize () {
			var screenWidth = document.documentElement.clientWidth;
			var fontsize = 0;
			if(screenWidth < 700){
				fontsize = 42
			}
			else {
				fontsize = 72
			}
			return fontsize;
		}
	}
}
</script>

<style lang="less">
#PagesHeader {
	width: 100%;
	height: 150px;
	border-radius: 0px 0px 100px 100px;
	background-color: rgba(24, 143, 253, 1);
	text-align: center;
	border: 1px solid rgba(187, 187, 187, 1);
	span {
		position: relative;
		top: 40%;
		font-weight: bold;
		letter-spacing: 10px;
	}
}
</style>
