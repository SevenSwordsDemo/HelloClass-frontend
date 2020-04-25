import service from '../utils/request.js'

/**
* 请求数据
*/
export function postCourseInfo () {
	service.request({
		method: 'post',
			url: '/api/teacher/teachCourses',
			data: {
				tno : "t123456",
				theday : "Monday"
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