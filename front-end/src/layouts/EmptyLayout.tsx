import { Col, Layout, Row } from 'antd'
import React from 'react'


export default function EmptyLayout({children}: any) {
   return (
      <Layout style={{width: '100%', height: '100vh', paddingTop: '200px'}}>
         <Row align='middle' justify='center'> 
            <Col span={6} >
               {children}
            </Col>
         </Row>
      </Layout>
   )
}

