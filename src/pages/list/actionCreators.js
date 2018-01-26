import actionTypes from './actionTypes'

const changeListInfoAction = (info) => ({
  type: actionTypes.CHANGE_LIST_INFO,
  info: info
})
export default {
	changeListInfo (link) {
    return (dispatch) => {
      fetch('/api/list.json?link='+ link)
        .then((res) => res.json())
        .then((res) => {
          dispatch(changeListInfoAction(res.list))
        })
        .catch(()=> {
          console.log('获取list失败')
        })
    }
  }
}
