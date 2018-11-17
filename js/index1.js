var a = {
	name: 'liunian',
	age: 25,
	fen: {
		Chinese: 93,
		Math: 29
	},
	aaa: [ 1, 2, 3, 4, 5 ]
};

var b = copy(a);
console.log(b);
b.fen.Math = 100;
b.aaa[3] = 100;
console.log(a);
console.log(b);

function copy(obj) {
	if (typeof obj === 'object') {
		if (obj instanceof Array) {
			var newArr = [];
			for (var i = 0; i < obj.length; i++) {
				newArr.push(copy(obj[i]));
			}
			return newArr;
		} else {
			var newObj = {};
			for (var item in obj) {
				newObj[item] = copy(obj[item]);
			}
			return newObj;
		}
	} else {
		return obj;
	}
}
