const relation_tags = require("../API/relation_tags");

module.exports = {
    title: '哔哩哔哩 - 关注列表',
    style: 'list',
    async fetch() {
        var tags = await relation_tags(cookie);
        if (tags != false) {
            var data = [{
                title: '全部显示',
                style: 'category'
            }, {
                title: '全部显示 - 最常访问',
                route: $route('list/Follow', {
                    mid: mid,
                    all: true,
                    attention: true
                })
            }, {
                title: '全部显示 - 最新关注',
                route: $route('list/Follow', {
                    mid: mid,
                    all: true,
                    attention: false
                })
            }, {
                title: '分类显示',
                style: 'category'
            }];
            var tmp = tags.map(tag => {
                return {
                    title: tag.name,
                    route: $route('list/Follow', {
                        tagid: tag.tagid,
                        mid: mid,
                        all: false
                    })
                }
            })
            tmp.forEach(f => {
                data.push(f);
            })
            return data;
        }
    },
    beforeCreate() {
        getCookie();
    }
}