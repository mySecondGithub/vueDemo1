export default{
	showHeader:({commit})=>{
		commit('showHeader')
	},
	hideHeader:({commit})=>{
		commit('hideHeader')
	},
	showNavlist:({commit})=>{
		commit('showNavlist')
	},
	hideNavlist:({commit})=>{
		commit('hideNavlist')
	},
	showFooter:({commit})=>{
		commit('showFooter')
	},
	hideFooter:({commit})=>{
		commit('hideFooter')
	}
}