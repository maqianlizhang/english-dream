import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router'
import actionCreators from './actionCreators'
import ListHeader from './component/header'
import ListLeft from './component/left'
import ListRight from './component/right'
import { Layout } from 'antd';
import './list.css'

const { Sider, Content, Header } = Layout;

class List extends Component {
	render() {
		return (<div>
				<ListHeader></ListHeader>
        <Layout className="list-navs">
          <Header>
            {
              this.props.list.map((value) => {
                return (<span className="list-nav" ><Link to={{pathname:`/list/${value.link}`}} key={value._id}>{value.title}</Link></span>)
              })
            }
          </Header>
          <Layout>
            <Content>
              <ListLeft></ListLeft>
            </Content>
            <Sider>
              <ListRight></ListRight>
            </Sider>
          </Layout>
        </Layout>

        </div>)
	}

  componentDidMount () {
    this.props.getListInfo(this.props.params.link)
  }
  
  componentWillReceiveProps(nextProps) {
    if( nextProps.params.link !== this.props.params.link ) {
      this.props.getListInfo(nextProps.params.link)
    }
  }
}

const mapStateToProps = (state) => ({
  list: state.common.list
})

const mapDispatchToProps = (dispatch) => ({
  getListInfo (link) {
    console.log(123)
    dispatch(actionCreators.changeListInfo(link))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(List)