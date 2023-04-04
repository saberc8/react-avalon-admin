import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import './login.less'
import { useTitle } from 'ahooks'
import { useStore } from '@/store'
interface LoginForm {
  username: string
  password: string
}
const LoginPage: React.FC = () => {
  useTitle('登录')
  const [form] = Form.useForm<LoginForm>()
  const [loading, setLoading] = useState(false)
  // const { useStore } = useStore()
  const { validateFields } = form
  const onFinish = async (values: LoginForm) => {
    const validate = await validateFields()
    console.log('Success:', validate)
    console.log('Success:', values)
    setLoading(true)
  }
  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <p>基于vite构建的react admin</p>
      <div>
        <Form
          layout="horizontal"
          // form={form}
          onFinish={onFinish}
          initialValues={{
            username: 'admin',
            password: '123456',
          }}
        >
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button block size="large" type="primary" htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
