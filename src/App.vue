<template>
  <div id="app">
  	<HeaderView v-show="headerShow"></HeaderView>
	<router-view></router-view>	
	<FooterView v-show="footerShow"></FooterView>
  </div>
</template>
<script>
	import HeaderView from './components/Header.vue'
	import FooterView from './components/Footer.vue'
	import {mapGetters} from 'vuex'
	export default{
		computed:mapGetters([
			'headerShow',
			'footerShow'
		]),
		mounted(){
			var path = this.$route.path.substring(1);
			this.headerChange(path);
			this.footerChange(path);
		},
		watch:{
			$route(to){
				var  path = to.path.substring(1);
				this.headerChange(path);
				this.footerChange(path);
				/*if(to.path == '/login'||to.path == '/reg'){
					this.$store.dispatch('hideHeader');
				}else{
					this.$store.dispatch('showHeader');
				}*/
			}
		},
		methods:{
			headerChange(path){
				if(path == 'login' || path == 'reg' || path.indexOf('article') != -1){
					this.$store.dispatch('hideHeader');
				}else{
					this.$store.dispatch('showHeader');
				}
			},
			footerChange(path){
				if(path == 'reg' || path == 'login'){
					this.$store.dispatch('hideFooter');
				}else{
					this.$store.dispatch('showFooter');
				}
			}
		},
		components:{
			HeaderView,
			FooterView
		}
	}
</script>
<style scoped>
</style>
