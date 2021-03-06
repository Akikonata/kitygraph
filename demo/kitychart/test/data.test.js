var dScatter = {
	colors: [],
	axis: {
		cateX: ["-40%", "10%", "60%", "110%", "160%"],
		cateY: ["-40%", "10%", "60%", "110%", "160%"],
		tagX: "市场增速",
		tagY: "",
	},
	data: {
		series: [{
			color: "orange",
			r: 50,
			x: 0.4,
			y: 0.5,
			label: "旅游",
			percent: 0.7
		}, {
			color: "pink",
			r: 40,
			x: 1.2,
			y: 0,
			label: "零售",
			percent: 0.1
		}, {
			color: "orange",
			r: 40,
			x: 0.1,
			y: 1,
			"label": "网游",
			percent: 0.5,
		}, {
			color: "orange",
			r: 30,
			x: 0.8,
			y: 0.8,
			label: "教育",
			percent: 0.8
		}, {
			color: "pink",
			r: 30,
			x: 0.4,
			y: 0.45,
			label: "金融",
			percent: 0.16,
		}, {
			color: "pink",
			r: 20,
			x: 0.92,
			y: 0.4,
			label: "IT消费电子",
			percent: 0.27
		}, {
			color: "orange",
			r: 10,
			x: 0.2,
			y: 0.3,
			label: "日化",
			percent: 0.8
		}, {
			color: "pink",
			r: 10,
			x: 0.7,
			y: 0.5,
			label: "汽车",
			percent: 0.45
		}, {
			color: "pink",
			r: 8,
			x: 0.5,
			y: 0.3,
			label: "食品饮料",
			percent: 0.12
		}, {
			color: "pink",
			r: 10,
			x: 0.5,
			y: 0.45,
			label: "服饰",
			percent: 0.28
		}],
		format: function(obj) {
			return obj;
		}
	}
};
var randData = function(base, top) {
	var items = [];
	var area = top - base;
	for (var i = 0; i < 10; i++) {
		items.push(
			base + Math.ceil(Math.random() * area)
		);
	}
	return items;
};

var dLine = {
	colors: ["deeppink", "deepskyblue"],
	axis: {
		cateX: [
			"2012.04",
			"2012.05",
			"2012.06",
			"2012.07",
			"2012.08",
			"2012.09",
			"2012.10",
			"2012.11",
			"2012.12",
			"2013.01",
			"2013.02",
			"2013.03",
			"2013.04",
			"2013.05",
			"2013.06",
			"2013.07",
			"2013.08",
		],
		cateY: [],
	},
	series: [{
		label: "",
		data: (function() {
			var items = [];
			for (var i = 0; i < 3; i++) {
				items.push(randData(12000, 13000));
			}
			for (var j = 0; j < 17; j++) {
				items.push(randData(15000, 19000));
			}
			return items;
		})()
	}, {
		label: "",
		data: (function() {
			var items = [];
			for (var i = 0; i < 17; i++) {
				items.push(randData(11000, 12000));
			}
			return items;
		})()
	}]
};

var dMap = {
	colors: ["yellowgreen", "black", "brown"],
	series: [{
		label: "美的",
		data: [{
			x: 160,
			y: 210,
			hot: 50
		}, {
			x: 230,
			y: 210,
			hot: 30
		}]
	}, {
		label: "海尔",
		data: [{
			x: 250,
			y: 250,
			hot: 70
		}, {
			x: 290,
			y: 215,
			hot: 30
		}]
	}, {
		label: "西门子",
		data: [{
			x: 280,
			y: 100,
			hot: 50
		}, {
			x: 200,
			y: 150,
			hot: 30
		}]
	}]
};

var genderData = function() {

}