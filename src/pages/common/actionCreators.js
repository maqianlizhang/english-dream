import actionTypes from './actionTypes'

const getNavListInfoAction = (list, detaillist) => {
  return {
    type: actionTypes.GET_NAVLIST_DATA,
    list: list,
    english: detaillist

  }
}

export default {
	getNavListInfoSucc () {
    const list = []
		return (dispatch) => {
      fetch('/api/header.json')
        .then((res)=>res.json())
        .then((res) => {
          res.data.detailtitle.map((value) => {
            for(var i = 0; i < res.data.detaillist.length; i++) {
              if( value.type === res.data.detaillist[i].type) {
                if( value.list ) {
                  value.list = [...value.list,res.data.detaillist[i]] 
                } else {
                  value.list = [...[],res.data.detaillist[i]]
                }
              }
            }
            list.push(value) 
          })
          dispatch(getNavListInfoAction(res.data.navlist, list))
      })
    }
  }
}