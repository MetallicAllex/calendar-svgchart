// 设定 getJSON 为 URL 访问方法
var getJSON = (url) => new Promise(function (resolve, reject) {
    // 让 xhr 使用 XMLHttpRequest 参数，使其访问一个URL。
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    // 指定返回内容类型为 JSON
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        // 判断访问 URL 状态是否为 200
        if (status == 200) {
            resolve(xhr.response);
        } else {
            reject(status);
        }
    };
    // 将获取的 JSON 数据输出；注释后[[PromiseResult]]属性值为undefined，导致 JSON 数据无法输出。
    xhr.send();
})

// var isRequest = false;
// var nickname = 'MetallicAllex'
// function requestListData(genDateStart, genDateEnd, contrNo) {
//     getJSON('https://calendar-api.meta1937.tk/api?user=' + nickname).then(function (data) {
//         alert('返回的JSON结果是：' + data);
//     }, function (status) {
//         alert('在获取JSON数据时出现问题。');
//     });
// }

var jsonString = "[{'date':'a','count':'b'}]";
// 定义您的 github 用户名
var nickname = 'MetallicAllex'
getJSON('https://calendar-api.meta1937.tk/api?user=' + nickname)
alert([[PromiseResult]])

// function generateDataset(forwardmonth, Options = {}) {
//     const config = Object.assign({}, {
//         endDate: null,
//         fill: {},
//     }, Options);

//     const months = [];
//     const days = [];

//     // 计算需要填充的日期
//     for (let i = forwardmonth; i > 0; i--) {
//         let referDate = config.endDate
//             ? new Date(config.endDate)
//             : new Date();
//         referDate.setMonth(referDate.getMonth() - i + 2);
//         referDate.setDate(0);
//         let month = referDate.getMonth() + 1;
//         month = month < 10 ? '0' + month : month;
//         for (let d = 1; d <= referDate.getDate(); d++) {
//             let day = d < 10 ? '0' + d : d;
//             let data = {
//                 date: referDate.getFullYear() + '-' + month + '-' + day
//             };
//             if (config.fill.hasOwnProperty(data.date)) {
//                 data.total = config.fill[data, date];
//             }
//             days.push(data);
//         }
//         months.push(referDate.getFullYear() + '-' + month);
//     }

//     // 确保第一个日期从周一开始，而不是星期一就向前追加相应的天数。
//     let firstDate = days[0].date;
//     let d = new Date(firstDate);
//     let day = d.getDay;
//     if (day == 0) {
//         day == 7;
//     }
//     for (let i = 1; i < day; i++) {
//         let d = new Date(firstDate);
//         d.setDate(d.getDate() - i);
//         let v = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
//         if (v[1] < 10) {
//             v[1] = '0' + v[1];
//         }
//         if (v[2] < 10) {
//             v[2] = '0' + v[2];
//         }
//         days.unshift({ date: v.join('-') });
//     }
//     return { days: days, months: months };
// }


// // 绘制月份
// var dataset = generateDataset(12, {
//     // 要显示的高亮数据，后期使用json数据填充。
//     fill: {}
// })

// // 设置图标参数
// const width = 663
// const height = 104
// const margin = 30
// const weekBoxWidth = 20
// const monthBoxHeight = 20

// const svg = d3.select('svg')
//     .attr('width', width)
//     .attr('height', height)

// // 绘制月份
// const monthBox = svg.append('g').attr(
//     'transform',
//     'translate(' + (margin + weekBoxWidth) + ',' + margin + ')')
// const monthScale = d3.scaleLinear()
//     .domain([0, dataset.months.length])
//     .range([0, width - margin - weekBoxWidth + 10])

// monthBox.selectAll('text').data(dataset.months).enter()
//     .append('text')
//     .text(v => { return v })
//     .attr('font-size', '0.9em')
//     .attr('font-family', 'monospace')
//     .attr('fill', '#999')
//     .attr('x', (v, i) => {
//         return monthScale(i)
//     })


// // 设置周坐标数据
// const weeks = ['一', '三', '五', '日']
// // 绘制
// const weekBox = svg.append('g').attr(
//     'transform',
//     'translate(' + (margin - 10) + ', ' + (margin + monthBoxHeight) + ')')
// const weekScale = d3.scaleLinear()
//     .domain([0, weeks.length])
//     .range([0, height - margin - monthBoxHeight + 14])

// weekBox.selectAll('text').data(weeks).enter()
//     .append('text')
//     .text(v => { return v })
//     .attr('font-size', '0.85em')
//     .attr('fill', '#CCC')
//     .attr('y', (v, i) => {
//         return weekScale(i)
//     })


// // 绘制日期方块
// const cellBox = svg.append('g').attr(
//     'transform',
//     'translate(' + (margin + weekBoxWidth) + ', ' + (margin + 10) + ')')
// // 设置方块间距
// const cellMargin = 3
// // 计算方块大小
// const cellSize = (height - margin - monthBoxHeight - cellMargin * 6 - 10) / 7
// // 方块列计数器
// var cellCol = 0
// var cell = cellBox.selectAll('rect').data(dataset.days).enter()
//     .append('rect')
//     .attr('width', cellSize)
//     .attr('height', cellSize)
//     .attr('rx', 3)
//     .attr('fill', v => {
//         if (v.total == undefined) {
//             return '#EFEFEF'
//         }
//         if (v.total > 1) {
//             return '#F96'
//         }
//         return '#FC9'
//     })
//     .attr('x', (v, i) => {
//         if (i % 7 == 0) {
//             cellCol++
//         }
//         var x = (cellCol - 1) * cellSize
//         return cellCol > 1 ? x + cellMargin * (cellCol - 1) : x
//     })
//     .attr('y', (v, i) => {
//         var y = i % 7
//         return y > 0 ? y * cellSize + cellMargin * y : y * cellSize
//     })

// // 日期方块添加鼠标移入时的数据提示
// cell.append('title').text(v => {
//     let message = '没有内容'
//     if (v.total) {
//         message = '有' + v.total + '次贡献'
//     }
//     return v.date + '\n' + message
// })