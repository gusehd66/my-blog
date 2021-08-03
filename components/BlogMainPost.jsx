import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';

export default function BlogMainPost({ slug, thumbnail, title, subtitle, author, createdAt }) {
  return (
    <Row
      align="middle"
      style={{
        height: 'auto',
      }}
    >
      <Col span={24}>
        <Link href={`/post/${slug}`}>
          <a>
            <Card
              style={{ border: "none" }}
              cover={
                // eslint-disable-next-line @next/next/no-img-element
                <img alt={thumbnail.alt} src={thumbnail.imageUrl} />
              }>
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <h4>{author.name} &#47;&#47; {dayjs(createdAt).format('MMMM D')}</h4>
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  )
}