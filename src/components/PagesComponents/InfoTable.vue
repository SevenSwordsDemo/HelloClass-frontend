<template>
	<table id="InfoTable">
		<tr 
			v-for="item in tableInfo"
			:class="[blueOrRed(item.isAppointed) ? 'isred' : 'isblue']">
			<td 
				v-for="value in item"
				:style="{fontSize: fontsize + 'px'}">
				{{value}}
			</td>
		</tr>
	</table>
</template>

<script>
	
export default {
	name: 'InfoTable',
	props: {
		tableInfo: Array
	},
	data () {
		return {
			//等待注入数据
			classRoomData: [],
		}
	},
	computed: {
		fontsize () {
			var screenWidth = document.documentElement.clientWidth;
			var fontsize = 0;
			if(screenWidth < 700){
				fontsize = 12;
			}
			else {
				fontsize = 30;
			}
			return fontsize;
		},
	},
	methods: {
		blueOrRed (str) {
			if(str == "已预约") {
				return true;
			}
			else {
				return false;
			}
		}
	},
	mounted () {
		this.classRoomData = this.tableInfo;
	}
}
</script>

<style lang="less">
#InfoTable {
	position: relative;
	width: 93.2%;
	left: 3.4%;
	margin-top: 10px;
	tr {
		width: 100%;
		height: 50px;
		td {
			width: 25%;
			text-align: center;
			border: 1px;
			font-weight: 600;
		}
	}
	.isblue {
		background-color: rgba(198, 247, 243, 1);
	}
	.isred {
		background-color: rgba(247, 208, 198, 1);
	}
}
</style>
