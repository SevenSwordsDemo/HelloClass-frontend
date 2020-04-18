<template>
	<div id="ButtonGroup">
		<WeekButton 
			v-for="item in buttonGroup"
			:key="item.index"
			:style="{
				display: 'inline-block',
				height: ParentH * 0.06 + 'px'}"
			:label="item.label"
			:index="item.index"
			:ifClicked="item.ifClicked"
			@getButtonIndex="getButtonIndex"/>
	</div>
</template>

<script>
import WeekButton from './WeekButton.vue'

export default {
	name: 'ButtonGroup',
	components: {
		WeekButton
	},
	props: {
		ParentH: Number
	},
	data () {
		return {
			buttonStates: [false, false, false, false, false, false, false],
			buttonGroup: [
				{
					label: '周一',
					ifClicked: '',
					index: 1
				},
				{
					label: '周二',
					ifClicked: '',
					index: 2
				},
				{
					label: '周三',
					ifClicked: '',
					index: 3
				},
				{
					label: '周四',
					ifClicked: '',
					index: 4
				},
				{
					label: '周五',
					ifClicked: '',
					index: 5
				},
				{
					label: '周六',
					ifClicked: '',
					index: 6
				},
				{
					label: '周日',
					ifClicked: '',
					index: 7
				},
			]
		}
	},
	methods: {
		judgeGroupClicked () {
			
		},
		//检查各按钮状态，初始化后修改触发点击事件的按钮状态
		checkButtonState (index) {
			for(var i = 0; i < this.buttonStates.length; i++) {
				this.buttonStates[i] = false;
			}
			this.buttonStates[index] = true;
			console.log(index, this.buttonStates, this.buttonGroup);
			this.handOutButtonState();
		},
		//分发按钮状态
		handOutButtonState () {
			for(var i = 0; i < this.buttonGroup.length; i++) {
				this.buttonGroup[i].ifClicked = this.buttonStates[i];
			}
		},
		//获得点击按钮索引
		getButtonIndex (index) {
			this.checkButtonState(index);
		}
	},
	mounted () {
		this.handOutButtonState();
	}

}
</script>

<style lang="less">
#ButtonGroup {
	width: 100%;
	height: 8.5%;
}
</style>
