<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='999'>
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="subtract">-</button>
        <input id="test" ref="goodsCount" class="mui-input-numbox" type="number" @change="changes"
               v-model="this.count"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
    </div>
</template>

<script>
    import mui from "../lib/mui/js/mui.min";

    export default {
        name: "Shopcar_numbox",
        props: ["count", "max", "id"],
        mounted() {
            mui(".mui-numbox").numbox();
            // mui(".mui-numbox").numbox().setOption('max', parseInt(this.max));
        },
        methods: {
            add() {
                let count = this.$refs.goodsCount.value;
                let car = {
                    id: this.id,
                    count: parseInt(count)
                };
                this.$store.commit('updateGoodsCount', car);

            },
            subtract() {
                let count = this.$refs.goodsCount.value;
                let car = {
                    id: this.id,
                    count: parseInt(count)
                };
                this.$store.commit('updateGoodsCount', car);
            },
            changes() {

            }
        },
        watch: {}
    }
</script>

<style scoped lang="scss">

</style>
