function fn1() {
	var array = [ 1, 2, 3, 4 ];
	function copy(array) {
		let newArray = [];
		for (let item of array) {
			newArray.push(item);
		}
		return newArray;
	}
	var copyArray = copy(array);
	copyArray[0] = 100;
	console.log(array); // [1, 2, 3, 4]
	console.log(copyArray); // [100, 2, 3, 4]
}

function fn2() {
	var array = [ 1, 2, 3, 4 ];
	var copyArray = array.slice();
	copyArray[0] = 100;
	console.log(array); // [1, 2, 3, 4]
	console.log(copyArray); // [100, 2, 3, 4]
}

function fn3() {
	var array = [ 1, 2, 3, 4 ];
	var copyArray = array.concat();
	copyArray[0] = 100;
	console.log(array); // [1, 2, 3, 4]
	console.log(copyArray); // [100, 2, 3, 4]
}

fn1();
fn2();
fn3();

function copyObj1() {
	var obj = {
		name: '彭湖湾',
		job: '学生'
	};
	var copyObj = Object.assign({}, obj);
	copyObj.name = '我才不叫彭湖湾呢！ 哼  (。・`ω´・)';
	console.log(obj); // {name: "彭湖湾", job: "学生"}
	console.log(copyObj); // {name: "我才不叫彭湖湾呢！ 哼  (。・`ω´・)", job: "学生"}
}

function copyObj2() {
	var obj = {
		name: '彭湖湾',
		job: '学生'
	};
	var copyObj = Object.assign({}, obj);
	copyObj.name = '我才不叫彭湖湾呢！ 哼  (。・`ω´・)';
	console.log(obj); // {name: "彭湖湾", job: "学生"}
	console.log(copyObj); // {name: "我才不叫彭湖湾呢！ 哼  (。・`ω´・)", job: "学生"}
}

function copyObj3() {
	var obj = {
		name: '彭湖湾',
		job: '学生'
	};
	var copyObj = { ...obj };
	copyObj.name = '我才不叫彭湖湾呢！ 哼  (。・`ω´・)';
	console.log(obj.name); //   彭湖湾
	console.log(copyObj.name); // 我才不叫彭湖湾呢！ 哼  (。・`ω´・)
}

copyObj1();
copyObj2();
copyObj3();

function copyByJson() {
    var array = [
        { number: 1 },
        { number: 2 },
        { number: 3 }
    ];
    var copyArray = JSON.parse(JSON.stringify(array))
    copyArray[0].number = 100;
    console.log(array); //  [{number: 1}, { number: 2 }, { number: 3 }]
    console.log(copyArray); // [{number: 100}, { number: 2 }, { number: 3 }]
}

function copyByRecursive() {
	var array = [ { number: 1 }, { number: 2 }, { number: 3 } ];
	function copy(obj) {
		var newobj = obj.constructor === Array ? [] : {};
		if (typeof obj !== 'object') {
			return;
		}
		for (var i in obj) {
			newobj[i] = typeof obj[i] === 'object' ? copy(obj[i]) : obj[i];
		}
		return newobj;
	}
	var copyArray = copy(array);
	copyArray[0].number = 100;
	console.log(array); //  [{number: 1}, { number: 2 }, { number: 3 }]
	console.log(copyArray); // [{number: 100}, { number: 2 }, { number: 3 }]
}

copyByJson();
copyByRecursive();
