<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" ref="goodsCount" class="mui-input-numbox" type="number" value="1" @change="changeGoodsCount"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from "../lib/mui/js/mui.min";

    export default {
        name: "GoodsInfo_numbox",
        props: ["max"],
        mounted() {
            mui(".mui-numbox").numbox();
        },
        methods: {
            changeGoodsCount() {
                const count = parseInt(this.$refs.goodsCount.value);
                this.$emit('getCount', count)
            }
        },
        watch: {
            max: function (newName, oldvalue) {
                mui(".mui-numbox").numbox().setOption('max', newName)
            }
        }
    }
</script>

<style scoped>

</style>
