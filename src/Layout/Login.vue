<template >
	<div class="loginpage">
		<!-- 左侧登陆栏 -->
		<div 
			class="loginbox"
			:style="{width: setLoginWidth}">
			<div class="logo"><img src="../assets/logo.png" /></div>
			<div class="title">
				欢迎使用 
				<div class="name">电子班牌管理视图</div>
			</div>
			<div class="subtitle">
				<div>学生与班级信息管理 设备管理及数据分析</div>
				<div>还没想好写啥就先插个眼</div>
			</div>
			<el-form :model="loginform" class="logininput" :rules="rules" ref="loginref">
				<div class="ap">账号</div>
					<el-form-item prop="userName">
					<div class="accountpassword" >
						<el-input prefix-icon="el-icon-user" placeholder="请输入账号" v-model="loginform.userName" clearable></el-input>
					</div>
					</el-form-item>
				<div style="display: flex;">
					<div class="ap">密码</div>
					<el-link class="forget" type="primary">忘记密码？</el-link>
				</div>
				<div class="accountpassword">
					<el-form-item prop="password">
						<el-input prefix-icon="el-icon-lock" show-password placeholder="请输入密码" v-model="loginform.password" clearable></el-input>
					</el-form-item>
				</div>
				<div class="choicetitle">选择身份</div>
				<div style="display: flex;">
					<div class="choice">
						<el-form-item prop="role">
							<el-select v-model="loginform.role" placeholder="请选择">
								<el-option label="学生" value="学生"></el-option>
								<el-option label="老师" value="老师"></el-option>
								<el-option label="管理员" value="管理员"></el-option>
							</el-select>
						</el-form-item>
					</div>	
					<div class="loginbtn">
						<el-form-item>
							<el-button type="primary" @click="login">登陆</el-button>
						</el-form-item>
					</div>
				</div>
			</el-form>
			<!-- footer -->
			<div style="display: flex;">
				<div class="problemtext">遇到问题?</div>
				<el-link class="problemlink" type="primary">请点这里</el-link>
			</div>
			<div class="introduce">powered by 七剑下天山</div>
		</div>
		<!-- 右侧背景 -->
		<div 
			class="backgroundimg"
			v-if="!ifMobile">
			<img src="../assets/login.jpg" />
		</div>
	</div>

</template>

<script>
import {LoginCheck} from '../api/login.js'
export default{
	name: 'Login',
	props: {
		HomePageW: Number,
		HomePageH: Number
	},
	data() {
		return {
			loginform: {
				userName:'t123465',
				password:'123456',
				role: '教师',
			},
			rules: {
				userName: [{ required:true,message:"请输入账号",tigger:'blur'}, { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }],
				password: [{ required:true,message:"请输入密码",tigger:'blur'}, { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }],
				role: [{ required:true,message:"请输选择角色",tigger:'blur'}],
			}	
		}
	},
	methods: {
		login() {
			this.$refs.loginref.validate(async valid => {
				console.log(valid)
				if(!valid) 
					return;
				const {data:res} = await this.$axios.request({
					method: 'post',
					url: 'api/loginCheck',
					data: {
						userName: this.loginform.userName,
						password: this.loginform.password,
						role: this.loginform.role
					},
				})
				console.log(res);
				if(res.status !== 200) 
					return this.$message.error('登陆失败')
				
				// window.sessionStorage.setItem('token', res.data.token);
				
				this.$router.push({
					path: "/homepage",
					name: "homepage",
					params: res
				});
				this.$message.success('登陆成功');
			});
		}
	},
	computed: {
		setLoginWidth () {
			return this.ifMobile ? "100%" : "33%"
		},
		ifMobile () {
			return (this.HomePageW < 1000) ? true : false;
		}
	},
}
</script>

<style lang="less" scoped>
	.loginpage
	{
		display: flex;
		width: 100%;
		height: 100%;
		
		.loginbox{
			background-color: #fff;
			// width: 33%;
			box-shadow: 0 0 5px #ccc;
			.logo{
				background-color: pink;
				margin-left:10%;
				margin-top:8%;
				width: 90px;
				height: 90px;
				border: 1px solid #fff;
				border-radius: 50%;
				box-shadow: 0 0 10px #ccc;
				img{
					width: 100%;
					height: 100%;
					border-radius: 50%;
				};
			};
			.title{
				display: flex;
				margin-left:10%;
				margin-top:10%;
				font-size: 26px;
				.name{
					font-size: 27px;
					margin-left: 10px;
					font-weight: 700;
				}
			}
			.subtitle{
				margin-left: 10%;
				margin-top: 10px;
				color: #ccc;
			}
			.logininput
			{
				margin-left: 10%;
				margin-top: 5%;
				height: 40%;
				.ap{
					font-size: 12px;
					font-weight: 700;
					margin-top: 2%;
				}
				.forget{
					margin-top: 2%;
					font-size: 12px;
					margin-left: 64%;
					
				}
				.accountpassword
				{
					margin-top: 1%;
					width: 80%;
					height: 12%;
				}
				.choicetitle{
					font-weight: 700;
					font-size: 12px;
					margin-top: 10%;
				}
				.choice{
					margin-top: 1%;
					width: 30%;
					height: 12%;
				}
				.loginbtn{
					margin-left: 36%;
					margin-top:1%;
				}
			}
			.problemtext{
				font-size: 16px;
				margin-left: 35%;
				margin-top: 5%;
			}
			.problemlink{
				font-size: 16px;
				margin-top: 5%;
			}
			.introduce{
				color: #ccc;
				font-size: 12px;
				margin-top: 13%;
				margin-left: 35%;
				
			}
		}
	.backgroundimg{
			background-color: black;
			width: 67%;
		}
	}
	
	
</style>
