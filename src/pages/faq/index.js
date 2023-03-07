import Image from "next/image";
import { Accordion, Breadcrumb } from "react-bootstrap";
const Faq = () => {
  return (
    <div className="faq">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">MY BUS</Breadcrumb.Item>
          <Breadcrumb.Item active>F.A.Q.</Breadcrumb.Item>
        </Breadcrumb>
        <div className="faq-div">
          <h1>Sərnişin təhlükəsizliyi haqqında tez-tez verilən suallar</h1>
          <div className="flex-div">
            <div className="left-div">
              <div className="img-div">
                <Image fill alt={"Frame"} src={"/img/faq_frame.svg"} />
              </div>
            </div>
            <div className="right-div">
              <div className="faq-accordions">
                <Accordion className="faq-accordion" alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Lorem ipsum dolor sit amet, adipiscing consectetur?
                    </Accordion.Header>
                    <Accordion.Body className="faq-accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enimLorem ipsum dolor sit amet, consectetur adipiscing
                        elit ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Lorem ipsum dolor sit amet, adipiscing consectetur?
                    </Accordion.Header>
                    <Accordion.Body className="faq-accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enimLorem ipsum dolor sit amet, consectetur adipiscing
                        elit ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Lorem ipsum dolor sit amet, adipiscing consectetur?
                    </Accordion.Header>
                    <Accordion.Body className="faq-accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enimLorem ipsum dolor sit amet, consectetur adipiscing
                        elit ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Lorem ipsum dolor sit amet, adipiscing consectetur?
                    </Accordion.Header>
                    <Accordion.Body className="faq-accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enimLorem ipsum dolor sit amet, consectetur adipiscing
                        elit ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Lorem ipsum dolor sit amet, adipiscing consectetur?
                    </Accordion.Header>
                    <Accordion.Body className="faq-accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enimLorem ipsum dolor sit amet, consectetur adipiscing
                        elit ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
