import service from '../utils/request.js'
import qs from 'qs'
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
export function getApplyState (sid) {
	return service.request({
		headers: {
			// 'Content-Type': 'application/json;charset=UTF-8;'
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		transformRequest: [function(data){
			// data = JSON.stringify(data)
			data = qs.stringify(data);
			return data
		}],
		method: 'post',
		url: 'api/student/viewStudentApply',
		data: {
			sid: sid
		}
	});
}

/**
 * 处理登录返回数据
 */
export function translateApplyState (array) {
	var states = [];
	array.forEach((element,index) => {
		states[index] = element.state;
	});
	return states;
}