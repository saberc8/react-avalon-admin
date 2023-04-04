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
  const { userStore } = useStore()
  const { validateFields } = form
  const rules = {
    username: [
      { required: true, message: '请填写用户名', trigger: 'blur' },
      { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请填写密码', trigger: 'blur' },
      { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' },
    ],
  }
  const onFinish = async (values: LoginForm) => {
    console.log(values)
    const validate = await validateFields()
    console.log('Success:', validate)
    console.log('Success:', values)
    if (validate) {
      const res = await userStore.login(values)
      console.log(res, 'res')
    }
    setLoading(true)
  }
  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <p>基于vite构建的react admin</p>
      <div>
        <Form
          layout="horizontal"
          form={form}
          onFinish={onFinish}
          initialValues={{
            username: 'admin',
            password: '1234561',
          }}
        >
          <Form.Item label="Username" name="username" rules={rules.username}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules.password}>
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
