<template>
	<div 
		id="RecordTable"
		:style="ifOverflow">
		<div class="SelectWeek">
			<span>
				请选择周数：
			</span>
			<el-select 
				v-model="value"
				placeholder="请选择">
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</div>
		<div id="tableSign">
			<AtdRecord
				v-for="record,index in records"
				:students="Students"
				:Items="record"
				@handleExtend="handleExtend"/>
		</div>
	</div>
</template>

<script>
import AtdRecord from './AtdRecord.vue'

export default {
	name: 'RecordTable',
	components: {
		AtdRecord
	},
	props: {
		Students: Array,
		Records: Array
	},
	data () {
		return {
			value: '',
			options: [
				{
					value: "选项一",
					label: "周一"
				},
				{
					value: "选项二",
					label: "周二"
				},
				{
					value: "选项三",
					label: "周三"
				},
				{
					value: "选项四",
					label: "周四"
				},
				{
					value: "选项五",
					label: "周五"
				},
				{
					value: "选项六",
					label: "周六"
				},
				{
					value: "选项七",
					label: "周日"
				},
			],
			records: this.Records,
			signHeight: 0
		}
	},
	computed: {
		ifOverflow () {
			if(this.signHeight < 620 && this.Records.length < 16) {
				console.log("not overflow" + ' ' + this.Records.length + ' ' + this.signHeight);
				return {height: '650px'};
			}
			else {
				console.log("overflow" + this.Records.length);
				return {};
			}
		}
	},
	methods: {
		handleExtend (height) {
			this.getSignHeight(height);
			return this.ifOverflow;
		},
		getSignHeight (height) {
			var sign = document.querySelector("div[id='tableSign']");
			this.signHeight = sign.offsetHeight + height;
		}
	},
}
</script>

<style lang="less">
#RecordTable {
	width: 100%;
	padding-bottom: 20px;
	.SelectWeek {
		text-align: center;
	}
}
</style>
