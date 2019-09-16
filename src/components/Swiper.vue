<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
                <img :src="baseHttp+item.img"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props: ["lunbotulist"],
        data() {
            return {
                baseHttp: this.$http.options.root
            }
        },
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
</style>
