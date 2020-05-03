import service from '../utils/request.js'
import qs from 'qs'

/**
 * 请求签到数据
 */
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
		var Arr = dealAtdRecord(body.data.data);
		console.log(Arr);
		return Arr;
	})
}

/**
 * 处理签到数据
 */
export function dealAtdRecord (Arr) {
	console.log(Arr);
	let simpleArr = [];
	let notSignArr = [];
	if(Arr != null) {
		Arr.forEach((item, index) => {
			let notSignin = [];
			var i = 0;
			var j = 0;
			while(i < item.notSignin.length) {
				i++;
				if(i % 5 == 0) {
					notSignin[j / 5] = item.notSignin.slice(j, i);
					j = i;
				}
			}
			if(j != i) {
				notSignin[j / 5] = item.notSignin.slice(j, i);
			}
			simpleArr[index] = {
				courseName: item.cname,
				address: item.classroom,
				studentNumber: item.signinNumber + "人到课"
			}
			notSignArr[index] = notSignin;
		})
		var array = {
			simpleArr: simpleArr,
			notSignArr: notSignArr
		}
	}
	return array
}