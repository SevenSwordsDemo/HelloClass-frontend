import service from '../utils/request.js'
import qs from 'qs'

export function postAtdRecord (tno, week, dayofweek) {
	return service.request({
		headers: {
			// 'Content-Type': 'application/json;charset=UTF-8;'
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		transformRequest: [function(data){
			// data = JSON.stringify(data)
			data = qs.stringify(data);
			console.log(data);
			return data
		}],
		method: 'post',
		url: '/api/teacher/signIn',
		data: {
            tno: tno,
            week: week,
			dayofweek: dayofweek
		}
	}).then(body => {
		console.log(body.data)
	})
}