<template>
	<div id="SidePage">
		<SideBar 
			@changePage="changePage"
			:isStudent="isStudent"/>
		<button 
			@click="handleMaskClicked">
		</button>
	</div>
</template>

<script>
import SideBar from '../../components/SidePage/SideBar.vue'

export default {
	name: 'SidePage',
	components: {
		SideBar
	},
	methods: {
		handleMaskClicked () {
			this.$emit('func', false);
		},
		changePage (index) {
			this.$emit('getPageIndex', index)
		}
	},
	props: {
		isStudent: Boolean
	}
}
</script>

<style lang="less">
#SidePage {
		width: 100%;
		height: 100%;
		background-color: rgba(187, 187, 187, 0.6);
		position: absolute;
		top: 0;
		button {
			width: 55%;
			height: 100%;
			opacity: 0;
			position: absolute;
			left: 45%;
			top: 0;
		}
	}
</style>
