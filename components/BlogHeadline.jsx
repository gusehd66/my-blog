import { Col, Row } from 'antd';

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: 'center',
      }}
    >
      <Col span={24}>
        <h1 style={{
          fontSize: 70,
          fontWeight: 'bold'
        }}>
          Dongit&#39;s Blog
        </h1>
        <p style={{
          fontSize: 24
        }}>
          &#39;항상 어제 보다 나은 계발하는 개발자&#39;
        </p>
      </Col>
    </Row>
  )
}