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
				:ParentH="ParentH"/>
			<div class="selectBuilding">
				<span>请选择教学楼：</span>
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
			<InfoTable :tableInfo="translatedData"/>
		</div>
		
	</div>
</template>

<script>
import PagesHeader from '../../components/PagesComponents/PagesHeader.vue'	
import ButtonGroup from '../../components/PagesComponents/ButtonGroup.vue'
import InfoTable from '../../components/PagesComponents/InfoTable.vue'

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
		tableInfo: Array,
		buildingInfo: Array
	},
	data () {
		return {
			heightRate: 0.883,
			options: this.buildingInfo,
			value: '',
			contentHeight: 0,
		}
	},
	computed: {
		ifOverflow () {
			if(this.tableInfo.length < 13){
				return {height: '710px'};
			}
			else{
				return {};
			}
		},
		translatedData () {
			return this.dataTranslate(this.tableInfo);
		}
	},
	methods: {
		getContentHeight () {
			var content = document.querySelector("div[class='PagesContent']");
			this.contentHeight = content.offsetHeight;
		},
		dataTranslate (Arr) {
			let array = JSON.parse(JSON.stringify(Arr));
			array.forEach((item,index) => {
				for(var i in item) {
					var Type =  typeof item[i];
					if(Type === "number") {
						if(i === "classTime")
							item[i] = "第" + item[i] + "节课";
						else if(i === "studentNumber")
							item[i] = item[i] + "名学生";
					}
					else if(Type === "boolean") {
						if(item[i] === true) {
							array[index][i] = "已预约";
						}
						else {
							array[index][i] = "未预约";
						}
					}
					else {
						array[index][i] = item[i];
					}
				}
			})
			return array;
		}
	},
	mounted () {
		this.getContentHeight();
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
