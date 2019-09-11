<template>
    <div class="news-comment">
        <h3>评论列表</h3>

        <hr/>

        <textarea placeholder="请开始你的BB（限制输入120字）" maxlength="120"></textarea>

        <mt-button type="primary" size="large">发表评论</mt-button>

        <ul>
            <li v-for="(item, index) in comments" :key="item.id">
                <div>
                    第{{index+1}}楼&nbsp;&nbsp;用户名：{{item.name}}&nbsp;&nbsp;时间：{{item.add_time}}
                </div>
                <p>{{item.content}}</p>
            </li>
        </ul>

        <mt-button type="danger" size="large" plain @click="getMoreNewsComments">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: "Comment",
        data() {
            return {
                comments: [],
            }
        },
        created() {
            this.getNewsComments()
        },
        methods: {
            getNewsComments() {
                console.log("获取新闻详情评论")
                this.$http.get("api/v1/news/comments").then(result => {
                    console.log("获取新闻详情评论")
                    if (result.status === 200) {
                        //成功获取数据
                        Toast("网络正常");
                        // this.comments = result.body
                    } else {
                        //获取数据失败
                        Toast("网络异常");
                    }
                })
                this.comments = [{
                    "id": 1,
                    "name": "周彬彬",
                    "add_time": "2012-12-12 12:12:12",
                    "content": "锄禾日当午 汗滴禾下土 谁知盘中餐 粒粒皆辛苦"
                },
                    {
                        "id": 1,
                        "name": "周彬彬",
                        "add_time": "2012-12-12 12:12:12",
                        "content": "锄禾日当午 汗滴禾下土 谁知盘中餐 粒粒皆辛苦"
                    },
                    {
                        "id": 1,
                        "name": "周彬彬",
                        "add_time": "2012-12-12 12:12:12",
                        "content": "锄禾日当午 汗滴禾下土 谁知盘中餐 粒粒皆辛苦"
                    },
                    {
                        "id": 1,
                        "name": "周彬彬",
                        "add_time": "2012-12-12 12:12:12",
                        "content": "锄禾日当午 汗滴禾下土 谁知盘中餐 粒粒皆辛苦"
                    },
                    {
                        "id": 1,
                        "name": "周彬彬",
                        "add_time": "2012-12-12 12:12:12",
                        "content": "锄禾日当午 汗滴禾下土 谁知盘中餐 粒粒皆辛苦"
                    },
                    {
                        "id": 1,
                        "name": "周彬彬",
                        "add_time": "2012-12-12 12:12:12",
                        "content": "锄禾日当午 汗滴禾下土 谁知盘中餐 粒粒皆辛苦"
                    },
                    {
                        "id": 1,
                        "name": "周彬彬",
                        "add_time": "2012-12-12 12:12:12",
                        "content": "锄禾日当午 汗滴禾下土 谁知盘中餐 粒粒皆辛苦"
                    }]

            },
            getMoreNewsComments() {
                console.log("加载更多")

            }
        }
    }
</script>

<style scoped lang="scss">
    .news-comment {
        h3 {
            font-size: 16px;
        }

        textarea {
            height: 85px;
            font-size: 14px;
            margin: 0;
        }

        ul {
            list-style-type: none;
            padding: 0px;
            margin: 4px 0;

            div {
                background-color: #cccccc;
                font-size: 14px;
                height: 34px;
                line-height: 34px;
            }

            p {
                height: 40px;
                line-height: 40px;
                color: black;
                text-indent: 2em;
                margin: 0;
            }
        }

    }
</style>
