<template>
    <div class="news-info-container">
        <h3 class="title">{{news.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{news.add_time | dateFromat()}}</span>
            <span>点击：{{news.click}}次</span>
        </p>
        <hr/>
        <p>{{news.content}}</p>
    </div>
</template>
<!--api/v1/news/1-->
<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "NewsInfo",
        data() {
            return {
                news: {},
                id: this.$route.params.id
            }
        },
        created() {
            this.getNewsById();
        },
        methods: {
            getNewsById() {
                this.$http.get("api/v1/news/" + this.id).then(result => {
                    console.log("根据id获取新闻详情")
                    if (result.status === 200) {
                        //成功了
                        this.news = result.body;
                        Toast('网络正常');
                    } else {
                        //失败了
                        Toast('网络异常');
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .news-info-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle {
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
