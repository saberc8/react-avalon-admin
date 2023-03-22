import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import './login.less'
import { useTitle } from 'ahooks'
const LoginPage = () => {
  useTitle('登录')
  return (
    <div className='login-container'>
      <h1>Welcome</h1>
      <p>基于vite构建的react admin</p>
      <div>
        <Form>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
