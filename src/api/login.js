import service from '../utils/request.js'
/**
 * 登录请求数据
 */
export function LoginCheck(loginForm) {
	return service.request({
		headers: {
			'Content-Type': 'application/json;charset=UTF-8;'
		},
		transformRequest: [function(data){
			data = JSON.stringify(data)
			return data
		}],
		method: 'post',
		url: 'api/loginCheck',
		data: loginForm
	});
}

/**
 * 登录返回数据
 */