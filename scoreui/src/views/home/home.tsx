import React from 'react';
import { Col, Row } from 'antd';
import Dashboard from '../../components/dashboard/dashboard';

const Home: React.FC = () => (
  <>
    <Row>
      <Col span={24}><Dashboard/></Col>
    </Row>

  </>
);

export default Home;
