<template>
	<div
		id="InfoPage"
		:style="{
			width: ParentW + 'px'
		}">
		<PagesHeader :title="pageName"/>
		<div 
			class="PagesContent"
			:style="ifOverflow">
			<ButtonGroup 
				:ParentH="ParentH"
				@getTheday="getTheday"/>
			<div 
				v-if="ifClass"
				class="selectBuilding">
				<span>请选择教学楼：</span>
				<el-select
					v-model="buildingvalue"
					placeholder="请选择"
					@change="getBuilding">
					<el-option
						v-for="item in buildings"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</div>
			<div
				v-if="ifClass"
				class="selectBuilding">
				<span>请选择周数：</span>
				<el-select
					v-model="weekvalue"
					placeholder="请选择"
					@change="getWeek">
					<el-option
						v-for="item in weeks"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</div>
			<InfoTable :tableInfo="translatedData"/>
		</div>
		
	</div>
</template>

<script>
import PagesHeader from '../../components/PagesComponents/PagesHeader.vue'	
import ButtonGroup from '../../components/PagesComponents/ButtonGroup.vue'
import InfoTable from '../../components/PagesComponents/InfoTable.vue'
import {postClassInfo, postCourseInfo, dataTranslate} from '../../api/infoAPI.js'

export default {
	name: 'InfoPage',
	components: {
		PagesHeader,
		ButtonGroup,
		InfoTable
	},
	props: {
		ParentW: Number,
		ParentH: Number,
		pageName: String,
		tableInfo: Array,
		buildingInfo: Array,
		ifClass: Boolean,
	},
	data () {
		return {
			tno: '',
			heightRate: 0.883,
			buildings: this.buildingInfo,
			weeks: [
				{
					value: 1,
					label: '第一周'
				},
				{
					value: 2,
					label: '第二周'
				},
				{
					value: 3,
					label: '第三周'
				},
				{
					value: 4,
					label: '第一周'
				}
			],
			contentHeight: 0,
			buildingvalue: '',
			weekvalue: '',
			//传入后台参数
			week: 0, //周次
			theday: 0,//星期几
			build: ''//楼名
		}
	},
	computed: {
		ifOverflow () {
			if(this.tableInfo.length < 13)
				return {height: '710px'};
			else
				return {};
		},
		translatedData () {
			return dataTranslate(this.tableInfo);
		}
	},
	methods: {
		getContentHeight () {
			var content = document.querySelector("div[class='PagesContent']");
			this.contentHeight = content.offsetHeight;
		},
		//获取楼名返回值
		getBuilding (build) {
			this.build = build;
		},
		//获取周次返回值
		getWeek (week) {
			this.week = week;
			this.returnClassData();
		},
		//获取星期
		getTheday (theday) {
			this.theday = theday;
			if(this.ifClass)
				this.returnClassData();
			else
				this.returnCourseData();
		},
		//返回教室信息
		returnClassData () {
			postClassInfo(this.week, this.theday);
		},
		//返回任课信息
		returnCourseData () {
			postCourseInfo(this.tno, this.theday);
		}
	},
	mounted () {
		this.getContentHeight();
		this.tno = this.$route.params.tno;
		console.log(this.$route.params);
	}
}
</script>

<style lang="less">
#InfoPage {
	background-color: rgba(238, 235, 235, 1);
	.PagesContent {
		position: relative;
		width: 91.2%;
		left: 4.4%;
		top: 5px;
		padding-bottom: 10px;
		background-color: white;
		.selectBuilding {
			text-align: center;
		}
	}
}
</style>
