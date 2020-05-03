<template>
	<div id="AtdRecord">
		<div class="surfaceTable">
			<table class="Table">
				<tr>
					<td
						v-for="(item, index) in items"
						:key="index">
						{{item}}
					</td>
				</tr>
			</table>
			<button
				:class="buttonClass"
				@click="handleRecord()">
			</button>
		</div>
		<table 
			class="hidenTable"
			v-show="ifExtend">
			<tr class="firstRow">
				<th colspan="5">未签到学生</th>
			</tr>
			<tr
				class="stuList"
				v-for="(stubar, index) in students"
				:key="index">
				<td
					v-for="(stu,index) in stubar"
					:key="index">
					{{stu}}
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	
export default {
	name: 'AtdRecord',
	props: {
		students: Array,
		Items: Object
	},
	data () {
		return {
			ifExtend: false,
			items: this.Items
		}
	},
	computed: {
		buttonClass () {
			var iconclass = this.ifExtend ? "el-icon-caret-top" : "el-icon-caret-bottom"
			return "RecordButton " + iconclass;
		}
	},
	methods: {
		handleRecord () {
			this.ifExtend = !this.ifExtend;
			var height = 50 + this.students.length * 25;
			height = this.ifExtend ? height : -height;
			this.$emit('handleExtend', height)
		}
	}
}
</script>

<style lang="less">
#AtdRecord {
	position: relative;
	width: 75%;
	left: 12.5%;
	top: 10px;
	.surfaceTable {
		height: 100%;
		height: 40px;
		.Table {
			width: 90%;
			height: 40px;
			border-spacing: 0;
			tr {
				td {
					width: 30%;
					background-color: rgba(198, 247, 243, 1);
					text-align: center;
				}
			}
		}
		.RecordButton {
			position: absolute;
			display: inline;
			width: 10%;
			height: 40px;
			left: 90%;
			top: 0;
			border: 0;
			padding: 0;
		}
	}
	.hidenTable {
		width: 100%;
		height: 100px;
		.firstRow {
			height:50px;
			font-size: 40px;
			text-align: center;
			border-spacing: 0;
			line-height: 50px;
			background-color: #E14A4A;
			th {
				padding: 0;
			}
		}
		.stuList {
			td {
				width: 20%;
				height: 25px;
				text-align: center;
				background-color: rgba(247, 208, 198, 1);
				padding: 0;
			}
		}
	}
}
</style>
