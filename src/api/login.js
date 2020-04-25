import service from '../utils/request.js'
/**
 * 登录请求数据
 */
export function LoginCheck(loginForm) {
	service.request({
		method: 'post',
		url: 'api/loginCheck',
		data: {
			userName: loginForm.userName,
			password: loginForm.password,
			role: loginForm.role
		}
	})
}

/**
 * 登录返回数据
 */