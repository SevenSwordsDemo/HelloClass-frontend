<template>
	<div
		id="AtdRecordPage"
		:style="{
			width: ParentW + 'px'
		}">
		<PagesHeader :title="pageName"/>
		<div class="RecordArea">
			<ButtonGroup
				:ParentH="ParentH"
				@getTheday="getTheday"/>
			<RecordTable 
				:students="students"
				:Records="Records"
				:getWeek="getWeek"/>
		</div>
	</div>
</template>

<script>
import PagesHeader from '../../components/PagesComponents/PagesHeader.vue'
import ButtonGroup from '../../components/PagesComponents/ButtonGroup.vue'
import RecordTable from '../../components/PagesComponents/RecordTable.vue'
import {postAtdRecord} from '../../api/attendRecord.js'

export default {
	name: 'AtdRecordPage',
	components: {
		PagesHeader,
		ButtonGroup,
		RecordTable
	},
	props: {
		ParentW: Number,
		ParentH: Number,
		pageName: String,
	},
	data () {
		return {
			heightRate: 0.833,
			Records: [],
			students: [],
			//传后端数据
			week: 0,
			theday: 0,
			tno: ''
		}
	},
	methods: {
		//获取星期
		getTheday (theday) {
			this.theday = theday;
			this.returnTheday();
		},
		//获取周次
		getWeek (week) {
			this.week = week;
			this.returnWeek();
		},
		//返回星期，并获取签到记录
		returnTheday () {
			const res = postAtdRecord(this.tno, this.week, this.theday).then(value => {
				this.Records = value.simpleArr;
				this.students = value.notSignArr
			})
		},
		//返回周次，并获取签到记录
		returnWeek () {
			const res = postAtdRecord(this.tno, this.week, this.theday).then(value => {
				this.Records = value.simpleArr;
				this.students = value.notSignArr
			})
		}
	},
	mounted () {
		this.tno = this.$route.params.tno;
	}
}
</script>

<style lang="less">
#AtdRecordPage {
	.RecordArea {
		position: relative;
		width: 91.2%;
		left: 4.4%;
		top: 5px;
		background-color: white;
	}
}
</style>
