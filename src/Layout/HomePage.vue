<template>
	<div id="HomePage">
		<!-- 主页页头 -->
		<Header 
			:ParentW="HomePageW"
			:ParentH="HomePageH" 
			@func="handleSideBar" />
		<!-- 主页内容区 -->
		<ContentBar 
			v-if="ifHome"
			:isStudent="isStudent"
			:userName="userName" />
		<!-- 教室信息查询 -->
		<InfoPage 
			v-if="ifClassInfo"
			:ParentW="HomePageW"
			:ParentH="HomePageH"
			:pageName="ClassInfoName"
			:tableInfo="ClassTableInfo"
			:buildingInfo="BuildingInfo"
			:ifClass="ifClassInfo"/>
		<!-- 任课信息查询 -->
		<InfoPage 
			v-if="ifCourseInfo"
			:ParentW="HomePageW"
			:ParentH="HomePageH"
			:pageName="CourseInfoName"
			:tableInfo="CourseTableInfo"
			:buildingInfo="BuildingInfo"
			:ifClass="ifClassInfo"/>
		<!-- 签到记录查询 -->
		<AtdRecordPage 
			v-if="ifRecord"
			:ParentW="HomePageW"
			:ParentH="HomePageH"
			:pageName="AtdRecordName"
			:Students="Students"
			:Records="Records"/>
		<!-- 学生申请教室 -->
		<ApplyRoomPage 
			v-if="ifApply"
			:pageName="ApplyRoomName"
			:ParentW="HomePageW"
			:ParentH="HomePageH"/>
		<!-- 侧边栏 -->
		<SidePage 
			v-show="ifSide" 
			@func="handleSideBar"
			@getPageIndex="getPageIndex"/>
	</div>
</template>

<script>
import Header from '../components/HomePage/Header.vue'
import ContentBar from '../components/HomePage/ContentBar.vue'
import SidePage from './Pages/SidePage.vue'
import InfoPage from './Pages/InfoPage.vue'
import AtdRecordPage from './Pages/AtdRecordPage.vue'
import ApplyRoomPage from './Pages/ApplyRoomPage.vue'
import {postCourseInfo} from '../api/infoAPI.js'

export default {
	name: 'HomePage',
	components: {
		Header,
		ContentBar,
		SidePage,
		InfoPage,
		AtdRecordPage,
		ApplyRoomPage
	},
	props: {
		HomePageW: Number,
		HomePageH: Number,
		isStudent: Boolean,
		userName: String
	},
	data () {
		//等待注入数据
		return {
			ifArray: [true, false, false, false, false, false], //ifArray储存所有页面的v-if指令
			ifHome: '',
			ifSide: '',
			ifClassInfo: '',
			ifCourseInfo: '',
			ifRecord: '',
			ifApply: '',
			PageNames: [],
			ClassInfoName: "教室情况查询",
			CourseInfoName: "任课信息查询",
			AtdRecordName: "签到记录查询",
			ApplyRoomName: "申请教室",
			ClassTableInfo: [
				{
					address: "健B110",
					classTime: 1,
					isAppointed: true,
					user: '凤弱地'
				},
				{
					address: "广C201",
					classTime: 5,
					isAppointed: false,
					user: '龙傲天'
				},
			],
			CourseTableInfo: [
				{
					course: "高数",
					address: "郁B210",
					classTime: 4,
					studentNumber: 50
				},
				{
					course: "C++",
					address: "博C507",
					classTime: 8,
					studentNumber: 60
				},
				{
					course: "Java",
					address: "博C508",
					classTime: 6,
					studentNumber: 48
				},
				{
					course: "C++",
					address: "博C507",
					classTime: 8,
					studentNumber: 60
				},
				{
					course: "英语",
					address: "致远207",
					classTime: 10,
					studentNumber: 32
				},
				{
					course: "web",
					address: "博C307",
					classTime: 8,
					studentNumber: 60
				},
				{
					course: "游戏设计",
					address: "郁B210",
					classTime: 6,
					studentNumber: 40
				},
				{
					course: "游戏设计",
					address: "郁B210",
					classTime: 6,
					studentNumber: 40
				},
				{
					course: "游戏设计",
					address: "郁B210",
					classTime: 6,
					studentNumber: 40
				},
				{
					course: "游戏设计",
					address: "郁B210",
					classTime: 6,
					studentNumber: 40
				},
				{
					course: "游戏设计",
					address: "郁B210",
					classTime: 6,
					studentNumber: 40
				},
				{
					course: "游戏设计",
					address: "郁B210",
					classTime: 6,
					studentNumber: 40
				},
				{
					course: "游戏设计",
					address: "郁B210",
					classTime: 6,
					studentNumber: 40
				}
			],
			BuildingInfo: [
				{
					value: '健行',
					label: '健行楼'
				}, 
				{
					value: '广知',
					label: '广知楼'
				}, 
				{
					value: '博易',
					label: '博易楼'
				}, 
				{
					value: '郁文',
					label: '郁文楼'
				}, 
				{
					value: '语林',
					label: '语林楼'
				}
			],
			Students: [
				['张三', '李四', '王五', '赵六', '黄七'],
				['钱八', '', '', '', '']
			],
			Records: [
				{
					courseName: '高数',
					address: '博C507',
					studentNumber: '到课48人',
				},
				{
					courseName: '英语',
					address: '致远B210',
					studentNumber: '到课40人',
				}
				
			]
		}
	},	
	methods: {
		// 接收侧边栏按钮点击事件，不触发checkPageState
		handleSideBar (ifclicked) {
			this.ifSide = ifclicked;
			this.ifArray[1] = ifclicked;
			this.postTest();
		},
		//点击侧边栏内导航按钮时
		//检查所有页面状态，并将传入的index对应页面状态修改,
		//不包括页头侧边栏按钮点击
		checkPageState (index) {
			for( var i = 0; i < this.ifArray.length; i++){
				this.ifArray[i] = false;
			}
			this.ifArray[index] = true;
			this.handOutPageState();
		},
		//分发页面状态
		handOutPageState () {
			this.ifHome = this.ifArray[0];
			this.ifSide = this.ifArray[1];
			this.ifClassInfo = this.ifArray[2];
			this.ifCourseInfo = this.ifArray[3];
			this.ifRecord = this.ifArray[4];
			this.ifApply = this.ifArray[5];
		},
		//获取点击页面的索引
		getPageIndex (index) {
			this.checkPageState(index);
		},
		//传送数据测试
		// postTest () {
		// 	this.$axios.request({
		// 		method: 'post',
		// 		url: '/api/student/apply',
		// 		data: {
		// 			sid: "1",
		// 			classroom: "健b",
		// 			start: 1,
		// 			end : 2,
		// 			state: "待审核",
		// 			reason: "xxxx",
		// 			applyTime: "2020-04-23 13:52:00",
		// 			dayOfWeek: "Monday",
		// 			date: "2020-04-23",
		// 			week: 3
		// 		}
		// 	}).then(body => {
		// 		console.log(body.data)
		// 	})
		// },
		postTest () {
			postCourseInfo();
		},	
	},
	mounted () {
		this.handOutPageState();
		console.log(this.$route.params.data);
	}
}
</script>

<style lang="less">
#HomePage {
	width: 100%;
	background: #EEEBEB 100%;
	line-height: 20px;
	background-color: rgba(238, 235, 235, 1);
	padding-bottom: 20px;
}
</style>
