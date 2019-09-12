<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
                <img :src="item.img"/>
            </mt-swipe-item>
        </mt-swipe>


        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/news-list">
                    <img src="../../public/img/icons/apple-touch-icon-120x120.png">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/share-picture">
                    <img src="../../public/img/icons/apple-touch-icon-120x120.png">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goods">
                    <img src="../../public/img/icons/apple-touch-icon-120x120.png">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../public/img/icons/apple-touch-icon-120x120.png">
                <div class="mui-media-body">留言反馈</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../public/img/icons/apple-touch-icon-120x120.png">
                <div class="mui-media-body">视频专区</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../public/img/icons/apple-touch-icon-120x120.png">
                <div class="mui-media-body">联系我们</div>
            </a></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "Home",
        created() {
            this.getLunBoTu();
        },
        data() {
            return {
                lunbotulist: [],
            }
        },
        methods: {
            getLunBoTu() { //获取轮播图数据接口
                console.log('获取轮播图数据接口');
                this.$http.get("api/v1/lunbotu").then(result => {
                    console.log(result)
                    if (result.status === 200) {
                        //成功了
                        this.lunbotulist = result.body;
                        Toast("网络正常");
                    } else {
                        //失败了
                        Toast("网络异常");
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }

            &:nth-child(2) {
                background-color: yellow;
            }

            &:nth-child(3) {
                background-color: green;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    ul.mui-grid-view {
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        div {
            font-size: 12px;
        }

        border: none;

        img {
            width: 60px;
            height: 60px;
        }
    }
</style>
