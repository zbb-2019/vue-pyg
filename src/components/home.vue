<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
                <img :src="item.img"/>
            </mt-swipe-item>

        </mt-swipe>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default {
        name: "home",
        created() {
            this.getLunBoTu();
        },
        data() {
            return {
                lunbotulist:[],
            }
        },
        methods: {
            getLunBoTu() { //获取轮播图数据接口
                console.log('获取轮播图数据接口');
                this.$http.get("http://192.168.5.211:7001/api/v1/lunbotu").then(result => {
                    console.log(result)
                    if(result.status === 200){
                        //成功了
                        this.lunbotulist = result.body;
                        Toast("网络正常");
                    }else {
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
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
