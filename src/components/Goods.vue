<template>
    <div class="goods">
        <ul>
            <li>
                <div class="show">
                    <img src="http://127.0.0.1:7001/public/lunbotu3.jpg" alt="商品图片"/>
                    <h3>华为（huawei）荣耀手机</h3>
                    <p>16G双4G版</p>
                </div>
                <div class="content">
                    <p class="jiage"><span>￥2195</span>&nbsp;&nbsp;<i>￥2499</i></p>
                    <p class="remai"><span>热卖中</span><span>已售100件</span></p>
                </div>
            </li>
            <li>
                <div class="show">
                    <img src="http://127.0.0.1:7001/public/lunbotu3.jpg" alt="商品图片"/>
                    <h3>华为（huawei）荣耀手机广泛广泛鬼画符鬼画符给规范化风格发</h3>
                    <p>16G双4G版</p>
                </div>
                <div class="content">
                    <p class="jiage"><span>￥2195</span>&nbsp;&nbsp;<i>￥2499</i></p>
                    <p class="remai"><span>热卖中</span><span>已售100件</span></p>
                </div>
            </li>
            <li>
                <div class="show">
                    <img src="http://127.0.0.1:7001/public/lunbotu3.jpg" alt="商品图片"/>
                    <h3>华为（huawei）荣耀手机</h3>
                    <p>16G双4G版</p>
                </div>
                <div class="content">
                    <p class="jiage"><span>￥2195</span>&nbsp;&nbsp;<i>￥2499</i></p>
                    <p class="remai"><span>热卖中</span><span>已售100件</span></p>
                </div>
            </li>


        </ul>
    </div>
</template>

<script>
    export default {
        name: "Goods"
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
