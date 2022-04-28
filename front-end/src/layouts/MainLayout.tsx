import { Button as AntButton, ButtonProps, Col, Layout, Row, Typography } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import React from 'react'
import styled from 'styled-components'


export default function MainLayout({children}: any) {
  return (
    <Layout>
        <Header>
          <Row justify='space-between'>
            <Col offset={2}>
              <Button type='text'>Shops</Button>
              <Button type='text'>Delivery</Button>
            </Col>
            <Col>
              <Typography.Link style={{color: '#ffff'}}>+99897-777-77-77</Typography.Link>
            </Col>
          </Row>
        </Header>
        <Content>
          {children}
        </Content>
        <Footer>

        </Footer>
    </Layout>
  )
}


const Button: React.FunctionComponent<ButtonProps> = styled(AntButton)`
  color: #ffff;
  &:hover{
    color: #cccc;
  }
`;