import actionTypes from './actionTypes'

const getNavListInfoAction = (list, english) => {
  return {
    type: actionTypes.GET_NAVLIST_DATA,
    list: list,
    english: english
  }
}

export default {
	getNavListInfoSucc (value) {
		return (dispatch) => {
      fetch('/api/header.json')
        .then((res)=>res.json())
        .then((res) => {
          dispatch(getNavListInfoAction(res.data.navlist, res.data.english))
      })
    }
  }
}