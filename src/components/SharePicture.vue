<template>
    <div class="share-picture">
        <!--//顶部滑动区域-->
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" @click="getSharePictureByClazz(0)">
                        全部
                    </a>
                    <a class="mui-control-item" v-for="item in clazzs" :key="item.id"
                       @click="getSharePictureByClazz(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>
        <!--图片列表区域-->
        <ul class="picture-list">
            <li v-for="item in list" :key="item.id">
                <RouterLink :to="'/home/share-picture-info/'+item.id">
                    <img v-lazy="baseHttp+item.img_url">
                </RouterLink>
                <div>
                    <h4>{{item.title}}</h4>
                    <p>{{item.zhaiyao}}</p>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
    import mui from '../lib/mui/js/mui.min.js'
    import {Toast} from 'mint-ui'

    export default {
        name: "SharePicture",
        data() {
            return {
                clazzs: [],//图片分类数据
                list: [],//图片列表数据
                baseHttp: this.$http.options.root
            }
        },
        created() {
            this.getAllClazz();
            this.getSharePictureByClazz(0);
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getAllClazz() {
                this.$http.get("api/v1/classifications").then(result => {
                    console.log("取得所有图片分享的分类")
                    if (result.status === 200) {
                        this.clazzs = result.body
                        Toast("网络正常")
                    } else {
                        Toast("网络异常")
                    }
                })
            },
            getSharePictureByClazz(clazzid) {
                this.$http.get("api/v1/sharepictures/" + clazzid).then(result => {
                    console.log("根据图片分类去除所有图片")
                    if (result.status === 200) {
                        this.list = result.body
                        Toast("网络正常")
                    } else {
                        Toast("网络异常")
                    }
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    * {
        touch-action: pan-y;
    }

    .share-picture {
        .picture-list {
            list-style-type: none;
            margin: 0;
            padding: 10px;
            padding-bottom: 0;
            li {
                background-color: #cccccc;
                text-align: center;
                margin-bottom: 10px;
                box-shadow: 0 0 9px #999;
                position: relative;
                img {
                    width: 100%;
                    vertical-align: middle;
                }
                div {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    background-color: rgba(0, 0, 0, .5);
                    h4 {
                        text-align: left;
                        color: white;
                        font-size: 14px;
                    }
                    p {
                        text-align: left;
                        color: white;
                        font-size: 12px;
                        margin: 0;
                    }
                }
                img[lazy=loading] {
                    width: 40px;
                    height: 300px;
                    margin: auto;
                }
            }

        }

    }
</style>
