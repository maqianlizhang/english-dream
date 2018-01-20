import actionTypes from './actionTypes'

const getDetailInfoAction = (detail, link) => ({
  type: actionTypes.CHANGE_DETAILINFO,
  detail: detail,
  Link: link
})

export default {
  getDetailInfo(value) {
    return (dispatch) => {
      fetch('/api/detail.json')
        .then((res)=>res.json())
        .then((res)=> {
          dispatch(getDetailInfoAction(res.data.detail, res.data.Link))
        })
        .catch(()=>{
          console.log('获取详情失败')
        })
    }
  }
}