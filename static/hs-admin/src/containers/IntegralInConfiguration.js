import React from 'react'
import DocumentTitle from 'react-document-title'

// fto 可以将表单装换成 json
import fto from 'form_to_object'

import {values} from 'lodash'

import values1 from 'lodash'

// validator 用户表单验证
// import validator from 'validator'

// 创建 less 文件，但是引用 css 文件
import './full-cut-shipping.css'

// req 用于发送 AJAX 请求
import req from 'superagent'

// ErrorMsg 显示表单错误
import ErrorMsg from '../components/ErrorMsg'
import moment from 'moment';
import ValueGroup from '../components/ValueGroups'
import InputMoment from 'input-moment'
//import 'react-date-picker/index.css'
import './input-moment/input-moment.less'
class IntegralInConfiguration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      count: 1,
      initValue: null, //刚开始要设置成 null，只会从外部拿一次数据
      initRow: 2,
      config:{}
    }
  }

  componentDidMount() {
    req.get('/uclee-backend-web/integralinConfiguration').end((err, res) => {
      if (err) {
        return err
      }
      var data = JSON.parse(res.text)
      console.log(data);
      this.setState({
        initRow: data.size,
        initValue: data.data,
      })
      console.log(this.state.initValue);
    })
    
    req.get('/uclee-backend-web/config').end((err, res) => {
      if (err) {
        return err
      }
      var data = JSON.parse(res.text)
      this.setState({
        config: data.config,
      })
      console.log(this.state.config)
    })
  }
  
  render() {
    return (
      <DocumentTitle title="签到赠送设置">
        <div className="freight">
         {/* 类名加上页面前缀防止冲突 */}
          <form onSubmit={this._submit} className="form-horizontal">
            <div className="form-group ">
            	<label className="control-label col-md-3" style={{marginTop:'10px'}}>签到积分赠送数量：</label>
              <div className="col-md-9" style={{marginTop:'10px'}}>
                <input type="number" value={this.state.config.signInPoint} name="signInPoint" className="form-control" onChange={this._change}/>
              </div>
              <label className="control-label col-md-3" style={{marginTop:'10px'}}>签到礼券赠送数量：</label>
              <div className="col-md-9" style={{marginTop:'10px'}}>

                {/*
                  如果 initValue 的值来自 api
                  等拿到值再渲染
                  {
                    this.state.initValue ?
                    <ValueGroup initValue={xxx}/>
                    :
                    null
                  }                  
                */}

                {this.state.initValue
                  ? <ValueGroup
                      condition={'赠送'}
                      keyText={'连续签到次数'}
                      value0Text={'会员卡余额'}
                      valueText={'优惠券对应商品号'}
                      value1Text={'数量'}
                      keyName={'myKey'}
                      value0Name={'myValue0'}
                      valueName={'myValue'}
                      value1Name={'myValue1'}
                      maxRow={5}
                      initRow={this.state.initRow}
                      initValue={this.state.initValue}
                    />
                  : null}
              </div>
              <label className="control-label col-md-3" style={{marginTop:'10px'}}>签到奖品规则页面内容：</label>
              <div className="col-md-9" style={{marginTop:'10px'}}>
                <textarea rows="3" cols="20" value={this.state.config.signText} name="signText" className="form-control" onChange={this._change}>
                </textarea>
              </div>
            </div>
            <ErrorMsg msg={this.state.err} />
            <div className="form-group">
              <div className="col-md-9 col-md-offset-3">
                <button type="submit" className="btn btn-primary">提交 </button>
              </div>
            </div>
          </form>
        </div>
      </DocumentTitle>
    )
  }

	_change = (e) => {
    var c = Object.assign({}, this.state.config)
    c[e.target.name] = e.target.value
    this.setState({
      config: c
    })
  }

  _submit = e => {
    e.preventDefault()
    var data = fto(e.target)
    console.log(data)
    console.log(data.myValue.length)
    console.log(data.myKey.length)
    if (!data.signInPoint) {
      return this.setState({
        err: '请填写 签到积分赠送数量'
      })
    }
    if(values(data.myKey).length!==values(data.myValue).length){
      this.setState({
        err: "信息填写不完整"
      })
      return;
    }
    data.myKey = values1(data.myKey)
    data.myValue = values1(data.myValue)
    
    this.setState({
      err: null
    })

		req
      .post('/uclee-backend-web/activityConfigHandler')
      .send(data)
      .end((err, res) => {
        if (err) {
          return err
        }
       
        console.log(res.body)
      })

    req.post('/uclee-backend-web/integralinConfigurationHandler').send(data).end((err, res) => {
      if (err) {
        return err
      }

      if (res.text) {
        window.location = '/integralinConfiguration'
      }
    })
  }
}

export default IntegralInConfiguration
