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
				placeholder="请选择"
				@change="getWeek">
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
				v-for="(record, index) in Records"
				:key="record.courseName"
				:students="students[index]"
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
		students: Array,
		Records: Array,
		getWeek: Function
	},
	data () {
		return {
			value: '',
			options: [
				{
					value: 1,
					label: "第一周"
				},
				{
					value: 2,
					label: "第二周"
				},
				{
					value: 3,
					label: "第三周"
				},
				{
					value: 4,
					label: "第四周"
				}
			],
			signHeight: 0
		}
	},
	computed: {
		ifOverflow () {
			if(this.Records != null) {
				if(this.signHeight < 620 && this.Records.length < 16) {
				return {height: '650px'};
				}
				else {
					return {};
				}
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
