let express = require('express')
let app = express();
let whitList = ['http://localhost:3000']
app.use(function(req, res, next) {
    let origin = req.headers.origin;
    if(whitList.includes(origin)) {
        // 设置哪些头可以访问
        res.setHeader('Access-Control-Allow-Origin', origin);
        // 允许携带哪些多余头
        res.setHeader('Access-Control-Allow-Headers', 'name');
        // 允许哪些方法访问
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        // 预检的存活时间  单位秒
        res.setHeader('Access-Control-Max-Age', '600');
        // 允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials', true);
        // 允许前段获取那个头
        res.setHeader('Access-Control-Expose-Headers', 'name')
    };
    if(req.method === 'OPTIONS') {
        res.end();
    } else {
        next()
    }
    
})
app.put('/putData', function(req, res) {
    console.log(req.headers);
    res.setHeader('name', 'chnemeng')
    res.send(`xixixi`)
});
app.get('/getData', function(req, res) {
    res.send(`hahaha`)
});

app.listen(4000);