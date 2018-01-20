import actionTypes from './actionTypes'

const getIndexInfoAction = (list, friendLink) => ({
  type: actionTypes.CHANGE_LIST,
  list: list,
  friendLink: friendLink
})
export default {
	getIndexInfo (id) {
    return (dispatch) => {
      fetch('/api/index.json')
        .then((res)=> res.json())
        .then((res)=> {
         dispatch(getIndexInfoAction(res.data.list,res.data.friendLink))
        })
        .catch(()=>{
          console.log('shibai')
        })
    }
  }
}