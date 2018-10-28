var lib = function(ele) {
	var obj = document.getElementById(ele);
	return {
		next: function() {
			var obj = document.getElementById(ele);
			if(!obj.nextSibling) return null;
			while (obj.nextSibling.nodeType != 1) {
				obj = obj.nextSibling;
			}
			return obj.nextSibling;
		},
		
		prev: function() {
			var obj = document.getElementById(ele);
			if(!obj.previousSibling) return null;
			while (obj.previousSibling.nodeType != 1) {
				obj = obj.previousSibling;
			}
			return obj.previousSibling;
		},
		
		nextAll: function() {
			var list = [];
			var obj = document.getElementById(ele);
			if(!obj.nextSibling) return null;
			while (obj.nextSibling != null) {
				obj = obj.nextSibling;
				if (obj.nodeType == 1) {
					list.push(obj);
				}
			}
			return list;
		},
		
		prevAll: function() {
			var list = [];
			var obj = document.getElementById(ele);
			if(!obj.previousSibling) return null;
			while (obj.previousSibling != null) {
				obj = obj.previousSibling;
				if (obj.nodeType == 1) {
					list.push(obj);
				}
			}
			return list;
		},
		
		index: function() {
			var index = 0;
			while (obj.previousSibling != null) {
				obj = obj.previousSibling;
				if (obj.nodeType == 1) {
					index++;
				}
			}
			return index;
		},

		siblings: function() {
			var nodes = obj.parentNode.childNodes;
			var list = [];
			for (var i = 0; i < nodes.length; i++) {
				if (nodes[i].nodeType == 1 && nodes[i].id != ele) {
					list.push(nodes[i]);
				}
			}
			return list;
		},

		children: function() {
			var nodes = obj.childNodes;
			var list = [];
			for (var i = 0; i < nodes.length; i++) {
				if (nodes[i].nodeType == 1) {
					list.push(nodes[i]);
				}
			}
			return list;
		},

		first: function() {
			var firstObj = obj.firstChild;
			while (firstObj.nodeType != 1) {
				firstObj = firstObj.nextSibling;
			}
			return firstObj;
		},

		last: function() {
			var lastObj = obj.lastChild;
			while (lastObj.nodeType != 1) {
				lastObj = lastObj.previousSibling;
			}
			return lastObj;
		},

		eq: function(index) {
			return this.children()[index] || null;
		},

		classList: function() {
			var classNames = obj.className.split(' ');
			return classNames[0] ? classNames : null;
		},

		append: function(newEle) {
			obj.appendChild(typeof newEle == 'string' ? document.createTextNode(newEle) : newEle);
		}
	};
};

var $ = lib;
