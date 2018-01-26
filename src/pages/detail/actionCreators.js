import actionTypes from './actionTypes'

const getDetailInfoAction = (detail) => ({
  type: actionTypes.CHANGE_DETAILINFO,
  detail: detail
})

export default {
  getDetailInfo(id) {
  let detail = {}
    return (dispatch) => {
      fetch('/api/detail.json?id='+id)
        .then((res)=>res.json())
        .then((res)=> {
          res.detail.title = res.title
          detail = res.detail
          dispatch(getDetailInfoAction(detail))
        })
        .catch(()=>{
          console.log('获取详情失败')
        })
    }
  }
}