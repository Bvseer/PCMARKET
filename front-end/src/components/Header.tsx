import { Button, Col, Row } from 'antd';
import * as React from 'react';


export interface IHeaderProps {
}

export default function App (props: IHeaderProps) {
  return (
    <Row>
      <Col span={8} >
        <Button type='link'>
          Магазины
        </Button>
        <Button type='link'>
          Доставка и оплата
        </Button>
      </Col>
    </Row>
  );
}

