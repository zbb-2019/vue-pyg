<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/news-info/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="baseHttp+item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'><span>发表时间：{{item.add_time | dateFromat()}} </span>
                            <span>点击：{{item.click}}次</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "NewsList",
        data() {
            return {
                newslist: [],
                baseHttp: this.$http.options.root
            }
        },
        created() {
            this.getNewsList();
        },
        methods: {
            getNewsList() {
                console.log(this.$http.options.root)
                this.$http.get("api/v1/newslist").then(result => {
                    console.log('新闻列表');
                    if (result.status === 200) {
                        //成功了
                        this.newslist = result.body;
                        Toast("网络正常");
                    } else {
                        //失败了
                        Toast("网络异常");
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">


</style>
