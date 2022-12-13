import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios'


export default function Login() {

    const onFinish = values => {
        const {username, password} = values;
        axios.post('http://localhost:3001/validatepassword', {username, password})
        .then(res => {
            if(res.data.validation){
                alert('corect password, thank you')
            }else{
                alert('Incorrect password')
            }
        })
    }


  return (


    <div style={{display: 'flex', justifyContent: 'center', alighItems: 'center'}}> 
         <div style={{width: 400}}>

            <h2 style={{textAlign: 'center'}}>Login</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}

                >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    ]}
                >
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    ]}
                >
                    <Input
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
                </Form>
            </div>
        </div>   
  )
}
