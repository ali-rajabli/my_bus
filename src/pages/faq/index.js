import { Breadcrumb } from "react-bootstrap";
const Faq = () => {
  return (
    <div className="faq">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">MY BUS</Breadcrumb.Item>
          <Breadcrumb.Item active>F.A.Q.</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Faq;
