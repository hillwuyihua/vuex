<template>
    <div>
        <h4>已选商品</h4>
        <table class="table table-hover table-bordered">
            <thead>
                <tr> <th>id</th><th>名称</th><th>价格</th> <th>数量</th><th>操作</th></tr>
            </thead>
            <tbody>
                <tr v-for = '(shop,index) in cartProducts'>
                    <td>{{shop.id}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td>
                    <td>{{shop.num}}</td>
                    <td>
                       <div  id="carlistBtn">
	                       	<a @click='remove_one(shop)' class="btn btn-danger btn-sm" title="减1数量">-</a>
	                       	<a @click='add_one(shop)' class="btn btn-danger btn-sm" title="加1数量">+</a>
	                       	<a @click='delProduct(shop)' class="btn btn-danger btn-sm">删除些分类</a>
                       </div>
                    </td>
                </tr>
                <tr v-if="!cartProducts.length">
                    <td colspan="5" class="text-center">您的购物车空空如也。。。</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    
    export default {
        name: 'cart',
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['cartProducts'])
        },
        methods:{
            ...mapActions(['delProduct',"remove_one","add_one"])
        }
    }
</script>

<style scoped>
	#carlistBtn a{ color: #fff;}
</style>