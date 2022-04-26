import { Button, Checkbox, Form, Input, Row, Typography } from 'antd';
import * as React from 'react';
import rules from '../../helpers/validationRules';

export interface IAuthForm {
}

export default function AuthForm (props: IAuthForm) {
   const [isLogin, setLogin] = React.useState<Boolean>(false)

   const onSubmitHandler = (values: any) => {
      console.log('Success:', values);
   };
  
   const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
   };

   const toggleAuthHandler = () => {
      setLogin(!isLogin)
   }
  
   return (
      <div>
         {
            isLogin 
            ?
            <Form
               name="auth"
               layout='vertical'
               initialValues={{ remember: true }}
               onFinish={onSubmitHandler}
               onFinishFailed={onFinishFailed}
               autoComplete="off"
            >
               <Typography.Title level={3}>
                  Authentication
               </Typography.Title>
               <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }, rules.emailValidation]}
                  validateStatus="success"
               >
                  <Input name='email' />
               </Form.Item>
         
               <Form.Item
                  label="Password"
                  name="password"
                  validateStatus="success"
                  rules={[{ required: true, message: 'Please input your password!' }]}
               >
                  <Input.Password />
               </Form.Item>

               <Form.Item
                  label="PasswordConfirm"
                  name="password_confirm"
                  rules={[{required: true, message: 'Please confirm your password'}, rules.confirmPasswordRule]}
               >
                  <Input.Password />
               </Form.Item>
         
               <Row justify='space-between'>
                  <Form.Item 
                     name="remember" 
                     valuePropName="checked" 
                  >
                     <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <Form.Item>
                     <Typography.Link 
                        onClick={toggleAuthHandler}
                     >
                        Authentication
                     </Typography.Link>
                  </Form.Item>
               </Row>

               <Form.Item >
                  <Button type="primary" htmlType="submit">
                     Create
                  </Button>
               </Form.Item>
            </Form>
         : 
            <Form
               name="auth"
               layout='vertical'
               initialValues={{ remember: true }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               autoComplete="off"
            >
               <Typography.Title level={3}>
                  Registration
               </Typography.Title>
               <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }, rules.emailValidation]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
               >
                  <Input.Password />
               </Form.Item>

               <Row justify='space-between'>
                  <Form.Item 
                     name="remember" 
                     valuePropName="checked" 
                  >
                     <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <Form.Item>
                     <Typography.Link 
                        onClick={toggleAuthHandler}
                     >
                        Registration
                     </Typography.Link>
                  </Form.Item>
               </Row>

               <Form.Item >
                  <Button type="primary" htmlType="submit">
                     Login
                  </Button>
               </Form.Item>
            </Form>
         }
        
      </div>
   )
}