<template>
	<div
		id="Header"
		:style="{
			width: ParentW + 'px',
			height: ParentH * heighRate + 'px'
		}">
		<button
			@click="handleClickSideButton()"
			class="SideButton" 
			:style="{
				width: buttonLength,
				height: buttonLength,
				margin: buttonMargin
			}">
			<i
				class="el-icon-s-unfold"
				:style="{fontSize: buttonLength}">
			</i>
		</button>
		<span
			class="UserIcon"
			:style="{
				width: userLength,
				height: userLength,
				marginTop: userMarginTop,
				left: userLeft
			}">
			<i
				class="el-icon-user-solid"
				:style="{fontSize: userLength}">
				
			</i>
		</span>
	</div>
</template>

<script>
export default {
	name: 'Header',
	props: {
		ParentW: Number,
		ParentH: Number
	},
	data () {
		return {
			heighRate: 0.117,
		}
	},
	computed: {
		buttonLength () {
			return (this.ParentH * this.heighRate * 0.6) + 'px';
		},
		buttonMargin () {
			return (this.ParentH * this.heighRate * 0.2) +'px';
		},
		userLength () {
			return (this.ParentH * this.heighRate * 0.8) + 'px';
		},
		userMarginTop () {
			return (this.ParentH * this.heighRate * 0.1) + 'px';
		},
		userLeft () {
			return (this.ParentW - this.ParentH * this.heighRate * 1) + 'px';
		},
	},
	methods: {
		handleClickSideButton() {
			this.$emit('func', true);
		}
	}
}
</script>

<style lang="less">
#Header {
	background: white;
	.SideButton {
		padding: 0;
		border: 0;
		background-color: white;
	}
	.UserIcon {
		position: absolute;
		opacity: 0.9;
		border-radius: 100%;
		background: #EEEBEB 100%;
	}
}
</style>
