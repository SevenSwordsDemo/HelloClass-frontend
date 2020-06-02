<template>
	<div id="ContentBar">
		<ContentHeader
			:isStudent="isStudent" 
			:userName = "userName"/>
		<div
			v-if="!isStudent" 
			class="ContentArea">
			<CourseBrowse
				v-for="(item,index) in teacher_bars" 
				:key="index"
				:showData="item"/>
		</div>
		<div
			v-if="isStudent" 
			class="ContentArea">
			<CourseBrowse
				v-for="(item,index) in student_bars" 
				:key="index"
				:showData="item"/>
		</div>
	</div>
</template>

<script>
import ContentHeader from './ContentHeader.vue'
import CourseBrowse from './CourseBrowse.vue'
	
export default {
	name: 'ContentBar',
	components: {
		ContentHeader,
		CourseBrowse
	},
	props: {
		isStudent: Boolean,
		userName: String
	},
	data () {
		return {
			//等待注入数据，需要判断角色
			teacher_bars: [
				{
					Title: '任课速览',
					Data: [
						{
							courseName: '英语课',
							weekDay: '星期日',
							classTime: '第5节课'
						},
						{
							courseName: '数学课',
							weekDay: '星期六',
							classTime: '第6节课'
						}
					]
				}
			],
			student_bars: [
				{
					Title: '上课速览',
					Data: [
						{
							courseName: '英语课',
							weekDay: '星期日',
							classTime: '第5节课'
						},
						{
							courseName: '数学课',
							weekDay: '星期六',
							classTime: '第6节课'
						}
					]
				},
				{
					Title: '查看申请进度',
					Data: this.$route.params.applyStates
				}
			]
		}
	}
}
</script>

<style lang="less">
#ContentBar {
	width: 78%;
	// height: 78%;
	position: relative;
	left: 11%;
	top: 50px;
	background: white;
	border-radius: 10px;
	line-height: 20px;
	text-align: center;
	border: 1px solid rgba(187, 187, 187, 1);
	color: rgba(16, 16, 16, 1);
	.ContentArea {
		width: 100%;
		height: 62.5%;
	}
}
</style>
