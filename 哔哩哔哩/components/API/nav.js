const axios = require("axios");

module.exports = nav;

/**
 * 导航个人信息
 * @param {String} cookie 请求Cookie
 * @returns {Object}
 */
async function nav(cookie) {
    var url = "https://api.bilibili.com/x/web-interface/nav";
    var headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
        'cookie': cookie
    }
    try {
        var res = await axios.get(url, {
            headers: headers
        })
    } catch {
        console.log("请求错误！");
        return false;
    }
    if (res.data.code == 0) {
        return res.data.data;
    } else {
        return false;
    }
}