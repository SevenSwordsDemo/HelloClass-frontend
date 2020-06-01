<template>
	<div 
		id="HomePage"
		:style="{height: homeHeight}">
		<!-- 主页页头 -->
		<Header 
			:ParentW="HomePageW"
			:ParentH="HomePageH" 
			@handleSideBar="handleSideBar"
			@handleHome="handleHome" />
		<!-- 主页内容区 -->
		<ContentBar 
			v-if="ifHome"
			:isStudent="isStudent"
			:userName="userName"/>
		<!-- 教室信息查询  教师、学生可用-->
		<InfoPage 
			v-if="ifClassInfo"
			:ParentW="HomePageW"
			:ParentH="HomePageH"
			:pageName="PageNames[0]"
			:ifClass="ifClassInfo"/>
		<!-- 任课信息查询  教师可用-->
		<InfoPage 
			v-if="ifCourseInfo"
			:ParentW="HomePageW"
			:ParentH="HomePageH"
			:pageName="PageNames[1]"
			:ifClass="ifClassInfo"/>
		<!-- 签到记录查询  教师可用-->
		<AtdRecordPage 
			v-if="ifRecord"
			:ParentW="HomePageW"
			:ParentH="HomePageH"
			:pageName="PageNames[2]"/>
		<!-- 学生申请教室 学生可用-->
		<ApplyRoomPage 
			v-if="ifApply"
			:pageName="PageNames[3]"
			:ParentW="HomePageW"
			:ParentH="HomePageH"/>
		<!-- 侧边栏 -->
		<SidePage 
			v-show="ifSide" 
			@func="handleSideBar"
			@getPageIndex="getPageIndex"
			:isStudent="isStudent"/>
	</div>
</template>

<script>
import Header from '../components/HomePage/Header.vue'
import ContentBar from '../components/HomePage/ContentBar.vue'
import SidePage from './Pages/SidePage.vue'
import InfoPage from './Pages/InfoPage.vue'
import AtdRecordPage from './Pages/AtdRecordPage.vue'
import ApplyRoomPage from './Pages/ApplyRoomPage.vue'

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
	data () {
		return {
			isStudent: false,
			tno: '',
			sno: '',
			userName: '',
			HomePageW: 0,
			HomePageH: 0,
			ifArray: [true, false, false, false, false, false], //ifArray储存所有页面的v-if指令
			ifHome: '',
			ifSide: '',
			ifClassInfo: '',
			ifCourseInfo: '',
			ifRecord: '',
			ifApply: '',
			PageNames: ["教室情况查询", "任课信息查询", "签到记录查询", "申请教室"],
			homeHeight: ''
		}
	},	
	methods: {
		// 接收侧边栏按钮点击事件，不触发checkPageState
		handleSideBar (ifclicked) {
			this.ifSide = ifclicked;
			this.ifArray[1] = ifclicked;
		},
		//接受头像点击，返回主页事件
		handleHome () {
			this.checkPageState(0);
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
		//自适应长度
		fitHeight () {
			var header = document.querySelector("div[id='Header']");
			var contentBar = document.querySelector("div[id='ContentBar']");
			var fitheight = (header.offsetHeight + contentBar.offsetHeight + 80) + 'px'
			return fitheight;
		}
	},
	mounted () {
		this.handOutPageState();
		this.isStudent = (this.$route.params.role === "学生") ? true : false;
		this.userName = this.$route.params.username;
		this.HomePageW = this.$route.params.HomePageW;
		this.HomePageH = this.$route.params.HomePageH;
		setTimeout(() => {
			this.homeHeight = this.fitHeight();
		}, 100)
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
