import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //购物车的数据-数据结构为{id:商品id,count:购买商品数量,price:商品单价,selected:是否选择购买}
        cars: [],
    },
    mutations: {
        addGoods(state, car) {
            let flag = false;
            state.cars.some(item => {
                if (item.id == car.id) {
                    item.count += parseInt(car.count);
                    flag = true;
                    return true;
                }
            })
            if (!flag) {
                state.cars.push(car);
            }
            localStorage.setItem("cars",JSON.stringify(state.cars));
        }

    },
    actions: {},
    getters:{
        getAllGoodsCount(state){
            let c = 0;
            state.cars.forEach(item => {
                c += item.count;
            })
            return c;
        }
    }
})
