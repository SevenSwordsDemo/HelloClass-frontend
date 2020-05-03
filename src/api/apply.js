import service from '../utils/request.js'
import qs from 'qs'

export function postApply (applyForm) {
	return service.request({
		headers: {
			'Content-Type': 'application/json;charset=UTF-8;'
			// 'Content-Type': 'application/x-www-form-urlencoded'
		},
		transformRequest: [function(data){
			data = JSON.stringify(data)
			// data = qs.stringify(data);
			console.log(data);
			return data
		}],
		method: 'post',
		url: '/api/student/apply',
		data: applyForm
	}).then(body => {
		console.log(body.data)
	})
}