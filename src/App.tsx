import { Row, Typography, Col, Card } from "antd";

const { Meta } = Card;

const { Title, Paragraph } = Typography;

const App = () => (
  <Row justify={"center"} gutter={[24, 36]}>
    <Col span={20}>
      <Title style={{ textAlign: "center" }} level={1}>
        Proje Yönetimi
      </Title>

      
    </Col>
  </Row>
);

export default App;
