<template>
	<div 
		id="TextInput"
		:style="{marginBottom: marginbottom + 'px'}">
		<span
			:style="{fontSize: fontsize + 'px'}">
			{{label}}:
		</span>
		<el-input
			class="Input"
			v-model="input">
		</el-input>
	</div>
</template>

<script>

export default {
	name: 'TextInput',
	props: {
		label: String,
		placeholder: String,
		fontsize: Number,
		marginbottom: Number
	},
	data () {
		return {
			input: '',
			//等待注入数据
			options: []
		}
	},
}
</script>

<style lang="less">
#TextInput {
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
</style>
