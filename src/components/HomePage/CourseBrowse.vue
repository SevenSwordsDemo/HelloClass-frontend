<template>
	<div id="CourseBrowse">
		<p>
			{{showData.Title}}
		</p>
		<table
			class="CourseInfo"
			cellspacing="1px">
			<tr
				v-for="(item,index) in items" 
				:key="index"
				:class="[judgeParity(index) ? 'odd' : 'even']">
				<th 
					v-for="(value,index) in item"
					:key="index">
					{{value}}
				</th>
			</tr>
		</table>
	</div>
</template>

<script>
	
export default {
	name: 'CourseBrowse',
	props: {
		showData: Object
	},
	data () {
		return {
			items: [],
			ifCourses: false,
			ifApplyState: true
		}
	},
	methods: {
		//根据单复数行赋值颜色
		judgeParity ( index ) {
			if(index % 2 != 0){
				return true;
			}
			else{
				return false;
			}
		}
	},
	mounted () {
		this.items = this.showData.Data;
		if(this.showData.Title === "任课速览")
			this.ifCourses = true;
		this.ifApplyState = !this.ifCourses;
	}
}
</script>

<style lang="less">
#CourseBrowse {
	width: 96.6%;
	margin: 10px 0 0 1.7%;
	line-height: 20px;
	border-radius: 0px 0px 20px 20px;
	background-color: rgba(255, 255, 255, 0);
	text-align: left;
	border: 1px solid rgba(187, 187, 187, 1);
	p {
		font-size: 28px;
		color: rgba(91, 107, 115, 1);
	}
	table {
		width: 82.7%;
		margin: auto;
		margin-bottom: 20px;
		tr{
			height: 55px;
			font-family: "microsoft yahei";
			color: rgba(91, 107, 115, 1);
			th {
				text-align: center;
				font-size: 20px;
			}
		}
	}
	.odd {
		background: #F7D0C6 100%;
	}
	.even {
		background: #C6F7F3 100%;
	}
}
</style>
