<template>
	<div id="SideBar">
		<div class="SideHeader">
			<span>七剑下天山</span>
		</div>
		<el-menu
		  default-active="2"
		  class="el-menu"
		  @open="handleOpen"
		  @close="handleClose"
		  @select="changePage"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		  <el-menu-item class="el-menu-item" index="1">
				<i class="el-icon-location-information"></i>
				<span slot="title">教室情况</span>
		  </el-menu-item>
		  <el-menu-item class="el-menu-item" index="2">
			<i class="el-icon-document"></i>
			<span slot="title">任课信息</span>
		  </el-menu-item>
		  <el-menu-item class="el-menu-item" index="3">
			<i class="el-icon-notebook-1"></i>
			<span slot="title">签到记录</span>
		  </el-menu-item>
		  <el-menu-item class="el-menu-item" index="4">
			<i class="el-icon-document-checked"></i>
			<span slot="title">申请教室</span>
		  </el-menu-item>
		</el-menu>

	</div>
</template>

<script>
export default {
	name: 'SideBar',
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
	    handleClose(key, keyPath) {
			console.log(key, keyPath);
	    },
		changePage(key) {
			var index = parseInt(key) + 1;
			this.$emit('changePage', index);
		}
	}
}
</script>

<style lang="less">
#SideBar {
	left: 0px;
	width: 45%;
	height: 100%;
	.SideHeader {
		width: 100%;
		height: 17.8%;
		background-color: #545c64;
		color: #fff;
		text-align: center;
		span {
			position: relative;
			vertical-align: middle;
			top: 40%;
			font-size: 67px;
			font-family:"book antiqua";
		}
	}
	.el-menu {
		width: 100%;
		height: 82.2%;
		border: 0;
		.el-menu-item {
			height: 20%;
		}
		i {
			position: relative;
			left: 20%;
			top: 37%;
			transform: translate(-50%, -50%);
			font-size: 25px;
		}
		span {
			position: relative;
			left: 25%;
			top: 30%;
			transform: translate(-50%, -50%);
			font-size: 30px;
		}
		button {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			opacity: 0;
		}
	}
}
</style>
