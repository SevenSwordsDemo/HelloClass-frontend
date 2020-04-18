<template>
	<div id="ApplyRoomPage">
		<PagesHeader :title="pageName"/>
		<div 
			class="RoomContent"
			:style="{height: ParentH * heightRate  + 'px'}">
			<TextInput 
				v-for="item in inputItems"
				:label="item.label"
				:placeholder="item.placeholder"/>
			<div class="UseTime">
				<span>使用时间：</span>
				<el-select
					v-for="items in selectItems"
					v-model="value"
					class="selects"
					placeholder="请选择">
					<el-option
					v-for="item in items"
					:key="item.value"
					:label="item.label"
					:value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="ApplyReason">
				<span>申请原因:</span>
				<el-input
					v-model="textarea"
					class="ReasonText"
					type="textarea"
					placeholder="申请教室的原因">
					
				</el-input>
			</div>
			<el-button class="submitButton">
				提交
			</el-button>
		</div>
	</div>
</template>

<script>
import PagesHeader from '../../components/PagesComponents/PagesHeader.vue'
import TextInput from '../../components/PagesComponents/TextInput.vue'

export default {
	name: 'ApplyRoomPage',
	components: {
		PagesHeader,
		TextInput
	},
	props: {
		pageName: String,
		ParentH: Number
	},
	data () {
		return {
			value: '',
			heightRate: 0.72,
			textarea: '',
			inputItems: [
				{
					label: "姓名",
					placeholder: "请输入你的姓名"
				},
				{
					label: "学号",
					placeholder: "请输入你的学号"
				},
				{
					label: "申请教室",
					placeholder: "请输入你要申请的教室"
				},
			],
			selectItems: [
				[
					{
						value: "选项一",
						label: "第1周"
					},
					{
						value: "选项二",
						label: "第2周"
					},
					{
						value: "选项三",
						label: "第3周"
					},
					{
						value: "选项四",
						label: "第4周"
					}
				],
				[
					{
						value: "选项一",
						label: "星期一"
					},
					{
						value: "选项二",
						label: "星期二"
					},
					{
						value: "选项三",
						label: "星期三"
					},
					{
						value: "选项四",
						label: "星期四"
					},
					{
						value: "选项五",
						label: "星期五"
					},
					{
						value: "选项六",
						label: "星期六"
					},
					{
						value: "选项七",
						label: "星期日"
					}
				],
				[
					{
						value: "选项一",
						label: "第1节课"
					},
					{
						value: "选项二",
						label: "第2节课"
					},
					{
						value: "选项一三",
						label: "第3节课"
					},
					{
						value: "选项四",
						label: "第4节课"
					},
				]
			]
		}
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
		.UseTime {
			position: relative;
			width: 80%;
			top: 50px;
			left: 20%;
			span {
				font-size: 25px;
			}
			.selects {
				width: 24%;
				left: 3%;
				margin-right: 10px;
			}
		}
		.ApplyReason {
			position: relative;
			width: 80%;
			left: 20%;
			top: 100px;	
			span {
				display: inline-block;
				font-size: 25px;
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
