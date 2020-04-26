import service from '../utils/request.js'
import qs from 'qs'

/**
* 请求任课数据
*/
export function postCourseInfo (tno, theday) {
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
		url: '/api/teacher/teachCourses',
		data: {
			tno: tno,
			theday: theday
		}
	}).then(body => {
		console.log(body.data)
	})
}

/**
 * 请求教室数据  
 */
export function postClassInfo(week, theday) {
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
		url: '/api/teacher/theDayPlans',
		data: {
			week : week,
			theday : theday
		}
	}).then(body => {
		console.log(body.data)
	})
}

/**
 * 转换数据
 */
export function dataTranslate (Arr) {
	let array = JSON.parse(JSON.stringify(Arr));
	array.forEach((item,index) => {
		for(var i in item) {
			var Type =  typeof item[i];
			if(Type === "number") {
				if(i === "classTime")
					item[i] = "第" + item[i] + "节课";
				else if(i === "studentNumber")
					item[i] = item[i] + "名学生";
			}
			else if(Type === "boolean") {
				if(item[i] === true) {
					array[index][i] = "已预约";
				}
				else {
					array[index][i] = "未预约";
				}
			}
			else {
				array[index][i] = item[i];
			}
		}
	})
	return array;
}