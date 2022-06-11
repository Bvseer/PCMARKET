import { Col, Row } from 'antd'
import Layout, { Content } from 'antd/lib/layout/layout'
import MainFooter from 'components/headers/MainFooter'
import MainHeader from 'components/headers/MainHeader'
import React from 'react'


export default function MainLayout({children}: any) {
  return (
    <Layout>
        <MainHeader/>
        <Content >
          <Row>
            <Col span={20} offset={2} style={{height: '100vh'}} >
              {children}
            </Col>
          </Row>
        </Content>
        <MainFooter/>
    </Layout>
  )
}

