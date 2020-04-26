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
			:value="item.value"
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
					index: 1,
					value: 'Monday'
				},
				{
					label: '周二',
					ifClicked: '',
					index: 2,
					value: 'Tuesday'
				},
				{
					label: '周三',
					ifClicked: '',
					index: 3,
					value: 'Wednesday'
				},
				{
					label: '周四',
					ifClicked: '',
					index: 4,
					value: 'Thursday'
				},
				{
					label: '周五',
					ifClicked: '',
					index: 5,
					value:'Friday'
				},
				{
					label: '周六',
					ifClicked: '',
					index: 6,
					value: 'Saturday'
				},
				{
					label: '周日',
					ifClicked: '',
					index: 7,
					value: 'Sunday'
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
			this.handOutButtonState();
		},
		//分发按钮状态
		handOutButtonState () {
			for(var i = 0; i < this.buttonGroup.length; i++) {
				this.buttonGroup[i].ifClicked = this.buttonStates[i];
			}
		},
		//获得点击按钮索引、值
		getButtonIndex (index, theday) {
			this.checkButtonState(index);
			this.returnTheday(theday);
		},
		returnTheday (theday) {
			this.$emit('getTheday', theday);
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
