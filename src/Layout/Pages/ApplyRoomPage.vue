<template>
	<div id="ApplyRoomPage">
		<PagesHeader :title="pageName"/>
		<div 
			class="RoomContent"
			:style="{height: ParentH * heightRate  + 'px'}">
			<!-- <div 
				class="Sid"
				:style="{marginBottom: marginbottom}">
				<span
					:style="{fontSize: fontsize + 'px'}">
					学号:
				</span>
				<el-input
					class="Input"
					v-model=sid>
				</el-input>
			</div> -->
			<div 
				class="Classroom"
				:style="{marginBottom: marginbottom}">
				<span
					:style="{fontSize: fontsize + 'px'}">
					申请教室:
				</span>
				<el-input
					class="Input"
					v-model="classroom">
				</el-input>
			</div>
			<div 
				class="UseTime">
				<span
					:style="{fontSize: fontsize + 'px'}">
					使用时间：
				</span>
				<el-select
					v-for="(items,index) in selectItems"
					:key="index"
					v-model="selectValue[index]"
					:class="[defineStyle(index) ? 'selects ClassTime' : 'selects']"
					:style="{marginRight: marginright + 'px'}"
					placeholder="请选择">
					<el-option
						v-for="item in items"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</div>
			<div 
				class="ApplyReason"
				:style="{top: ApplyTop + 'px'}">
				<span
					:style="{fontSize: fontsize + 'px'}">
					申请原因:
				</span>
				<el-input
					v-model="Reason"
					class="ReasonText"
					type="textarea"
					placeholder="申请教室的原因">
					
				</el-input>
			</div>
			<el-button 
				class="submitButton"
				:style="buttonStyle"
				@click="returnApplyData">
				提交
			</el-button>
		</div>
	</div>
</template>

<script>
import PagesHeader from '../../components/PagesComponents/PagesHeader.vue'
// import TextInput from '../../components/PagesComponents/TextInput.vue'
import {postApply} from '../../api/apply.js'

export default {
	name: 'ApplyRoomPage',
	components: {
		PagesHeader
	},
	props: {
		pageName: String,
		ParentW: Number,
		ParentH: Number
	},
	data () {
		return {
			heightRate: 0.72,
			sid: 0,
			classroom: '',
			Reason: '',
			selectValue: ['', '', '', ''], //week dayofweek start end
			selectItems: [
				[
					{
						value: 1,
						label: "第1周"
					},
					{
						value: 2,
						label: "第2周"
					},
					{
						value: 3,
						label: "第3周"
					},
					{
						value: 4,
						label: "第4周"
					}
				],
				[
					{
						value: "Monday",
						label: "星期一"
					},
					{
						value: "Tuesday",
						label: "星期二"
					},
					{
						value: "Wednesday",
						label: "星期三"
					},
					{
						value: "Thursday",
						label: "星期四"
					},
					{
						value: "Friday",
						label: "星期五"
					},
					{
						value: "Saturday",
						label: "星期六"
					},
					{
						value: "Sunday",
						label: "星期日"
					}
				],
				[
					{
						value: 1,
						label: "第1节课"
					},
					{
						value: 2,
						label: "第2节课"
					},
					{
						value: 3,
						label: "第3节课"
					},
					{
						value: 4,
						label: "第4节课"
					},
				],
				[
					{
						value: 1,
						label: "第1节课"
					},
					{
						value: 2,
						label: "第2节课"
					},
					{
						value: 3,
						label: "第3节课"
					},
					{
						value: 4,
						label: "第4节课"
					},
				]
			],
			//返回后台数据
			applyForm: {}
		}
	},
	methods: {
		defineStyle (index) {
			if(index < 2)
				return false;
			else
				return true;
		},
		//获取日期
		getDate (bool) {
			let DATE = new Date();
			let dateArr = [DATE.getFullYear(), DATE.getMonth() + 1, DATE.getDate(),
							DATE.getHours(), DATE.getMinutes(), DATE.getSeconds()];
			for(let i = 1; i < 6; i++) {
				if(dateArr[i] < 10) 
					dateArr[i] = "0" + dateArr[i];
			}
			let applyTime = dateArr[0] + "-" + dateArr[1] + "-" + dateArr[2] + " " +
						dateArr[3] + ":" + dateArr[4] + ":" + dateArr[5];
			let date = dateArr[0] + "-" + dateArr[1] + "-" + dateArr[2];
			return bool ? applyTime : date;
		},
		//返回后台数据
		returnApplyData () {
			this.applyForm = {
				sid: this.sid,
				classroom: this.classroom,
				start: this.selectValue[2],
				end: this.selectValue[3],
				reason: this.Reason,
				applyTime: this.getDate(true),
				dayOfWeek: this.selectValue[1],
				date: this.getDate(false),
				week: this.selectValue[0]
			}
			postApply(this.applyForm);
			console.log(this.applyForm);
		},
		
	},
	computed: {	
		fontsize () {
			if(this.ParentW < 700)
				return 12;
			else
				return 25;
		},
		marginright () {
			if(this.ParentW < 700)
				return 15;
			else 
				return 40;
		},
		marginbottom () {
			if(this.ParentW < 700)
				return 10;
			else
				return 50;
		},
		ApplyTop () {
			if(this.ParentW < 700)
				return 80;
			else
				return 100;
		},
		buttonStyle () {
			if(this.ParentW < 700){
				return {
					height: '40px',
					width: '100px',
					fontSize: '20px',
					top: '160px',
				}
			}
			else{
				return {
					height: '80px',
					width: '250px',
					fontSize: '40px',
					top: '250px',
				}
			}
		}
	},
	mounted () {
		this.sid = this.$route.params.id;
	}
}
</script>

<style lang="less">
#ApplyRoomPage {
	width: 100%;
	.RoomContent {
		position: relative;
		width: 91.2%;
		left: 4.4%;
		padding-top: 20px;
		background-color: white;
		.Sid {
			position: relative;
			width: 50%;
			height: 40px;
			left: 20%;
			top: 5%;
			margin-bottom: 50px;
			span {
				display: inline-block;
				height: 100%;
				line-height: 40px;
			}
			.Input {
				position: absolute;
				width: 60%;
				left: 40%;
			}
		}
		.Classroom {
			position: relative;
			width: 50%;
			height: 40px;
			left: 20%;
			top: 5%;
			margin-bottom: 50px;
			span {
				display: inline-block;
				height: 100%;
				line-height: 40px;
			}
			.Input {
				position: absolute;
				width: 60%;
				left: 40%;
			}
		}
		.UseTime {
			position: relative;
			width: 80%;
			left: 20%;
			top: 20px;
			.selects {
				width: 30%;
				left: 3%;
			}
			.ClassTime {
				left: 26%;
				top: 20px;
			}
		}
		.ApplyReason {
			position: relative;
			width: 80%;
			left: 20%;
			span {
				display: inline-block;
			}
			.ReasonText {
				position: absolute;
				width: 40%;
				left: 25%;
				top: -10px;
				textarea {
					height: 100px;
				}
			}
		}
		.submitButton {
			position: relative;
			left: 50%;
			top: 250px;
			width: 250px;
			height: 80px;
			transform: translate(-50%);
			font-size: 40px;
			background: #E14A4A;
			color: black;
		}
	}
}
</style>
