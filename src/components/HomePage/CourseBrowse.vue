<template>
	<div id="CourseBrowse">
		<p>
			{{Data.Title}}
		</p>
		<table class="CourseInfo"
				cellspacing="1px">
			<tr v-for="item,index in items" 
				:key="index"
				:class="[judgeParity(index) ? 'odd' : 'even']">
				<th v-for="value in item">
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
		Data: Object
	},
	data () {
		return {
			items: []
		}
	},
	methods: {
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
		this.items = this.Data.childrenData;
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
