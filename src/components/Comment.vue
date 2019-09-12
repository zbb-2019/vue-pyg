<template>
    <div class="news-comment">
        <h3>评论列表</h3>

        <hr/>

        <textarea placeholder="请开始你的BB（限制输入120字）" maxlength="120" v-model="contents"></textarea>

        <mt-button type="primary" size="large" @click="saveComment">发表评论</mt-button>

        <ul>
            <li v-for="(item, index) in comments" :key="item.id">
                <div>
                    第{{index+1}}楼&nbsp;&nbsp;用户名id：{{item.user_id}}&nbsp;&nbsp;时间：{{item.add_time | dateFromat()}}
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
                newsid: this.$route.params.id,
                contents: '',
                pages:0
            }
        },
        props: ['type'],
        created() {
            this.getNewsComments(0)
        },
        methods: {
            getNewsComments(pages) {
                this.$http.get("api/v1/news/comments/1/" + this.newsid+"/"+pages+"/"+this.type).then(result => {
                    console.log("获取新闻详情评论")
                    if (result.status === 200) {
                        //成功获取数据
                        Toast("网络正常");
                        this.comments = result.body
                    } else {
                        //获取数据失败
                        Toast("网络异常");
                    }
                })
            },
            getMoreNewsComments(pages) {
                console.log("加载更多");
                this.pages++;
                pages = this.pages;
                this.$http.get("api/v1/news/comments/1/" + this.newsid+"/"+pages+"/"+this.type).then(result => {
                    console.log("获取新闻详情评论")
                    if (result.status === 200) {
                        //成功获取数据
                        Toast("网络正常");
                        this.comments = this.comments.concat(result.body)
                    } else {
                        //获取数据失败
                        Toast("网络异常");
                    }
                })
            },
            saveComment() {
                console.log("增加评论");
                console.log(new Date());
                this.$http.post("api/v1/news/comments", {
                    type: this.type,
                    user_id: 1,
                    content: this.contents,
                    add_time: new Date().getTime(),
                    news_id: this.newsid
                }, {emulateJSON: true}).then(result => {
                    console.log("获取新闻详情评论");
                    if (result.status === 200) {
                        //成功获取数据
                        Toast("网络正常");
                        this.getNewsComments(0);
                        this.contents=''
                    } else {
                        //获取数据失败
                        Toast("网络异常");
                    }
                })
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
