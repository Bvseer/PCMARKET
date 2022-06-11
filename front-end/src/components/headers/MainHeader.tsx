import React from 'react'
import { Button as AntButton, ButtonProps, Col, Row, Typography } from 'antd'
import styled from 'styled-components';
import { Header } from 'antd/lib/layout/layout';


interface IMainHeader {

}

export default function MainHeader () {
   return (
      <Header style={{backgroundColor: "#fff"}}>
         <Col span={20} offset={2}> 
         <Row justify='space-between'>
            <Col>
               <Button type='text'>Shops</Button>
               <Button type='text'>Delivery</Button>
            </Col>
            <Col>
               <Typography.Link style={{color: '#868686', fontWeight: 700}}>+99897-777-77-77</Typography.Link>
            </Col>
         </Row>
         </Col>
      </Header>
   )
}


const Button: React.FunctionComponent<ButtonProps> = styled(AntButton)`
  color: #868686;
  &:hover{
    opacity: .7;
  }
`;