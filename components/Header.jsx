import { CodeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import Link from 'next/link';


export default function Header() {
  return (
    <Row
      align="middle"
      style={{
        height: 64,
      }}
    >
      <Col span={24}>
        <Link href="/">
          <a>
            <div style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
              <CodeOutlined /> Dongit&#39;s Blog
            </div>
          </a>
        </Link>
      </Col>
    </Row>
  )
}