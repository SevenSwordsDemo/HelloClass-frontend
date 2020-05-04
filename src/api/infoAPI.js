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
 * 按楼名过滤
 */
export function postBuilding (week, theday, build) {
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
		url: '/api/teacher/theDayPlansByBuild',
		data: {
			week : week,
			theday : theday,
			build : build,
			page : 0,
			size : 100000
		}
	}).then(body => {
		var Arr = dealClassInfo(body.data.data);
		console.log(Arr);
		return Arr
	})
}

/**
 * 处理教室信息
 */
function dealClassInfo (Arr) {
	let array = [];
	let flag = 0;
	if(Arr != null) {
		Arr.forEach(item => {
			let schedules = item.schedules;
			schedules.forEach(schedule => {
				array[flag] = {
					address: item.classroom,
					classTime: "第" + schedule.start + "~" + schedule.end + "节课",
					isAppointed: schedule.state,
					user: schedule.user
				}
				flag++;
			})
			
		})
	}
	console.log("教室信息：", array);
	return array;
}

/**
 * 处理任课信息
 */
function dealCourseInfo (Arr) {
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