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
			<InfoTable :tableInfo="tableInfo"/>
		</div>
		
	</div>
</template>

<script>
import PagesHeader from '../../components/PagesComponents/PagesHeader.vue'	
import ButtonGroup from '../../components/PagesComponents/ButtonGroup.vue'
import InfoTable from '../../components/PagesComponents/InfoTable.vue'
import {postClassInfo, postCourseInfo, postBuilding} from '../../api/infoAPI.js'

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
		ifClass: Boolean,
	},
	data () {
		return {
			tno: '',
			heightRate: 0.883,
			tableInfo: [],
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
			buildings: [
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
			this.chooseByBuilding(this.week, this.theday, this.build)
		},
		//获取周次返回值
		getWeek (week) {
			this.week = week;
			this.getClassData();
		},
		//获取星期
		getTheday (theday) {
			this.theday = theday;
			if(this.ifClass)
				this.getClassData();
			else
				this.getCourseData();
		},
		//获得教室信息
		getClassData () {
			const res = postClassInfo(this.week, this.theday).then(value => {
				this.tableInfo = value;
			});
		},
		//获得任课信息
		getCourseData () {
			const res = postCourseInfo(this.tno, this.theday).then(value => {
				this.tableInfo = value;
			});
		},
		//按楼名过滤
		chooseByBuilding (week, theday, build) {
			const res = postBuilding(week, theday, build).then(value => {
				this.tableInfo = value;
			})
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
