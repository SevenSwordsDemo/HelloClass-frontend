import service from '../utils/request.js'
import qs from 'qs'

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
		var Arr = dealClassInfo(body.data.data);
		return Arr;
	})
}

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
		var Arr = dealCourseInfo(body.data.data);
		return Arr;
	});
}

/**
 * 处理教室信息
 */
export function dealClassInfo (Arr) {
	let array = [];
	if(Arr != null) {
	}
	return array;
}

/**
 * 处理任课信息
 */
export function dealCourseInfo (Arr) {
	let array = [];
	if(Arr != null) {
		Arr.forEach((item,index) => {
			let time = "第" + item.start + "~" + item.end + "节课";
			array[index] = {
				course: item.course.cname,
				address: item.classroom,
				classTime: time,
				studentNumber: item.course.selectedCourses.length + "名学生"
			}
		})
	}
	return array
}