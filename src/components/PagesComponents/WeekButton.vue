<template>
	<button 
		id="WeekButton"
		@click="handleWeekClicked()"
		:class="[ifClicked ? 'click' : 'notclick']"
		:style="{fontSize: fontsize + 'px'}">
		{{label}}
	</button>
</template>

<script>
	
export default {
	name: 'WeekButton',
	props: {
		label: String,
		ifClicked: Boolean,
		index: Number,
		value: String
	},
	methods: {
		handleWeekClicked () {
			this.$emit('getButtonIndex', this.index - 1, this.value);
		}
	},
	computed: {
		fontsize () {
			var screenWidth = document.documentElement.clientWidth;
			var fontsize = 0;
			if(screenWidth < 700){
				fontsize = 12;
			}
			else {
				fontsize = 24;
			}
			return fontsize;
		}
	}
}
</script>

<style lang="less">
#WeekButton {
	width: 14.28%;
	height: 100%;
	font-weight: 600;
	display: inline-block;
	border-radius: 0 0 0 60%;
	padding: 0;
	border: 1px;
}
.click {
	background-color: rgba(24, 143, 253, 1);
}
.notclick {
	background-color: rgba(225, 74, 74, 1);
}
</style>
