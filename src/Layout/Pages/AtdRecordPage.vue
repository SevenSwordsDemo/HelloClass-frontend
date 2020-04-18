<template>
	<div
		id="AtdRecordPage"
		:style="{
			width: ParentW + 'px'
		}">
		<PagesHeader :title="pageName"/>
		<div class="RecordArea">
			<ButtonGroup
				:ParentH="ParentH"/>
			<RecordTable 
				:Students="Students"
				:Records="Records"/>
		</div>
	</div>
</template>

<script>
import PagesHeader from '../../components/PagesComponents/PagesHeader.vue'
import ButtonGroup from '../../components/PagesComponents/ButtonGroup.vue'
import RecordTable from '../../components/PagesComponents/RecordTable.vue'

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
		tableInfo: Array,
		Students: Array,
		Records: Array
	},
	data () {
		return {
			heightRate: 0.833
		}
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
