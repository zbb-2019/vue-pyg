<template>
    <div class="goods-info">
        <!--商品图片-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotulist="lunbotulist"></swiper>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：
                        <del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsInfo.sell_price}}</span>
                    </p>
                    <p>购买数量：
                        <numbox></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
                    <p>上架日期：{{goodsInfo.add_time | dateFromat()}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <router-link :to="'/home/goods-graphic-introduction/'+goodsInfo.id">
                <mt-button class="ymj" type="primary" size="large" plain>图文介绍</mt-button>
                </router-link>
                <router-link :to="'/home/goods-goods-comments/'+goodsInfo.id">
                <mt-button class="ymj" type="danger" size="large" plain>商品评论</mt-button>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
    import {Toast} from 'mint-ui';
    import Swiper from './Swiper.vue'
    import numbox from './GoodsInfo_numbox'

    export default {
        name: "Home",
        created() {
            this.getLunBoTu();
            this.getGoodsInfoById();
        },
        data() {
            return {
                lunbotulist: [],
                goodsInfo: {},
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
            },
            getGoodsInfoById() {
                this.$http.get("api/v1/goods-info/" + this.$route.params.id).then(result => {
                    console.log(result)
                    if (result.status === 200) {
                        //成功了
                        this.goodsInfo = result.body;
                        Toast("网络正常");
                    } else {
                        //失败了
                        Toast("网络异常");
                    }
                });
            }
        },
        components: {
            swiper: Swiper,
            numbox: numbox,
        }
    }
</script>

<style scoped lang="scss">
    .goods-info {
        background-color: #eeeeee;
        overflow: hidden;

        .now_price {
            color: red;
            font-size: 16px;
        }
        .mui-card-footer {
            display: block;

            .ymj {
                margin: 20px 0;
            }
        }
    }
</style>
