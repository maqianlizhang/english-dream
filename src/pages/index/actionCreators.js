import actionTypes from './actionTypes'

const getIndexInfoAction = (list) => ({
  type: actionTypes.CHANGE_LIST,
  list: list
})
export default {
	getIndexInfo () {
    return (dispatch) => {
      fetch('/api/index.json')
        .then((res)=> res.json())
        .then((res)=> {
           dispatch(getIndexInfoAction(res.list))
         })
        .catch(()=>{
          console.log('shibai')
        })
    }
  },
  changeIndexInfo (link) {
    return (dispatch) => {
      fetch('/api/detaillist.json?link=' + link)
        .then((res)=> res.json())
        .then((res)=> {
           dispatch(getIndexInfoAction(res.list))
         })
        .catch(()=>{
          console.log('shibai')
        })
    }
  }
}