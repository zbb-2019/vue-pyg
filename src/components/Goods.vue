<template>
    <div class="goods">
        <ul>
            <router-link :to="'/home/goods-info/'+item.id" v-for="item in goods" :key="item.id" tag="li">
                <div class="show">
                    <img :src="baseHttp+item.img_url" alt="商品图片"/>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.zhaiyao }}</p>
                </div>
                <div class="content">
                    <p class="jiage"><span>￥{{ item.sell_price }}</span>&nbsp;&nbsp;<i>￥{{ item.market_price }}</i></p>
                    <p class="remai"><span>热卖中</span><span>已售{{item.stock_quantity}}件</span></p>
                </div>
            </router-link>
        </ul>

        <mt-button type="danger" size="large" plain @click="nextPagesGoods">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: "Goods",
        data() {
            return {
                goods: [],
                pages: 0,
                baseHttp: this.$http.options.root
            }
        },
        created() {
            this.getPagesGoods();
        },
        methods: {
            getPagesGoods() {
                this.$http.get("api/v1/goods/" + this.pages).then(result => {
                    console.log("获取商品列表");
                    if (result.status === 200) {
                        this.goods = this.goods.concat(result.body);
                        Toast("网络正常")
                    } else {
                        Toast("网络异常")
                    }
                })
            },
            nextPagesGoods() {
                this.pages++;
                this.getPagesGoods();
            }
        }
    }
</script>

<style scoped lang="scss">
    .goods {
        padding: 6px;
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            list-style-type: none;
            justify-content: space-between;
            li {
                width: 49%;
                float: left;
                border: 1px solid #dddddd;
                margin-bottom: 6px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .show {
                    img {
                        width: 100%;
                        vertical-align: middle;
                    }

                    h3 {
                        font-size: 12px;
                        margin: 2px;

                        left: 0;
                        bottom: 16px;
                    }
                    p {
                        font-size: 12px;
                        margin: 0;

                        left: 0;
                        bottom: 0;
                        color: black;
                        font-weight: bold;
                    }
                }
                .content {
                    background-color: #eeeeee;
                    padding: 4px;

                    p {
                        margin: 0;
                    }
                    .jiage {
                        span {
                            font-size: 16px;
                            color: red;
                        }
                        i {
                            font-size: 12px;
                            text-decoration: line-through;
                        }
                    }
                    .remai {
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                    }
                }

            }
        }
    }
</style>
