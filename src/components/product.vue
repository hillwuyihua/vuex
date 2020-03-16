<template>
  <div class="product">
    <h4>商品信息</h4>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>id</th><th>名称</th> <th>价格</th><th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(shop,index) in shoplist'>
        	
          <td>{{shop.id}}</td><td>{{shop.name}}</td><td>{{shop.price}}</td> <td>
            <div @click='addToCart(shop)' class="btn btn-info">购物车</div>
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
	var data_test= [{
        id: 11, name: '鱼香肉丝22', price: 12
      }, {
        id: 22, name: '宫保鸡丁22',price: 14
      }, {
        id: 34,name: '土豆丝22',price: 10
      }, {
        id: 47,name: '米饭22',price: 2
      }]

	
  import { mapGetters, mapActions,mapMutations} from "vuex";
  export default {
    name: 'product',
     
    data() {
      return { }
    },
    computed: {
      ...mapGetters(['shoplist'])
    },
    
    created() {
    this.Ajax_data(data_test)//设置取Ajax数据，把值写进state里
    // this.$store.state.cart.abc=jsons;
    	console.log(this.$store.state.cart.shop_list)
    	console.log(this.$store.state.cart.abc)
     //this.$store.state.abc=[0,1,2]
    },
    methods: {
      ...mapActions(['addToCart','Ajax_data']),
     
    }
  }
</script>

<style scoped>
  .table-shop>th {
    text-align: center;
  }

  .item-wrapper {
    display: flex;
    background-color: #dfdfdf;
    align-items: center;
    justify-content: center;
  }

  .item {
    flex: 1;
  }
</style>
