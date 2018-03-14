import getters from './getters'

const state={
	header:true,
	navlist:true,
	footer:true
};

const mutations={
	// 头部
	showHeader(state){
		state.header=true;
	},
	hideHeader(state){
		state.header=false;
	},
	// 两边的nav列表
	showNavlist(state){
		state.navlist=true;
	},
	hideNavlist(state){
		state.navlist=false;
	},
	// footer
	showFooter(state){
		state.footer=true;
	},
	hideFooter(state){
		state.footer=false;
	}
};

export default{
	state,
	mutations,
	getters
}