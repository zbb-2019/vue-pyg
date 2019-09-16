<template>
    <div class="shop-car">
        <div class="mui-card" v-for="item in cars" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="mui-switch mui-switch-blue mui-switch-mini" @click="changeSelected(item.id)"
                         :class="{ 'mui-active': item.selected }">
                        <div class="mui-switch-handle"></div>
                    </div>
                    <img :src="item.img"/>
                    <div class="ri">
                        <h3>{{item.title}}</h3>
                        <span>￥{{item.price}}</span>
                        <numbox :count="item.count" :max="item.max" :id="item.id"></numbox>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card mai">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div>
                        <p>总计（不含运费）：</p>
                        <p>已选购商品<span> {{$store.getters.getAllGoodsAllCount.allCount}} </span>件，总价：￥<span> {{$store.getters.getAllGoodsAllCount.allPrice}} </span>
                        </p>
                    </div>
                    <mt-button type="danger" size="small">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from './Shopcar_numbox.vue'
    import mui from "../lib/mui/js/mui.min";

    export default {
        name: "Shopcar",
        mounted() {
            mui(".mui-numbox").numbox();
        },
        data() {
            return {
                cars: [],
            }
        },
        created() {
            this.cars = JSON.parse(localStorage.getItem("cars"));
        },
        components: {
            numbox: numbox,
        },
        methods: {
            changeSelected(id) {
                this.$store.commit("updateGoods", id);
            }
        }
    }
</script>

<style scoped lang="scss">

    .shop-car {
        .mui-card {
            background-color: #eeeeee;
            .mui-card-content {
                .mui-card-content-inner {
                    display: flex;
                    text-align: center;
                    .mui-switch {
                        margin-top: 16px;
                    }
                    img {
                        width: 20%;
                        padding: 4px;
                    }
                    .ri {
                        padding-left: 20px;
                        h3 {
                            text-align: left;
                            font-size: 13px;
                        }
                        span {
                            color: red;
                            font-size: 16px;
                            padding-right: 20px;
                        }
                    }

                }

            }
        }
        .mai {
            .mui-card-content-inner {
                display: flex;
                justify-content: space-between;
                .mint-button--small {
                    margin-top: auto;
                }
                p {
                    text-align: left;
                    span {
                        font-size: 16px;
                        color: red;
                    }
                }

            }

        }
    }

</style>
