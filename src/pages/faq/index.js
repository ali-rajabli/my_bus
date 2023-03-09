import Image from "next/image";
import { useEffect } from "react";
import { Accordion, Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFaqPage } from "@/reducers/pageSlice";
const Faq = () => {
  const dispatch = useDispatch();
  const { faqData } = useSelector((state) => state.pagesData);

  useEffect(() => {
    dispatch(getFaqPage());
  }, [dispatch]);

  return (
    <div className="faq">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">MY BUS</Breadcrumb.Item>
          <Breadcrumb.Item active>F.A.Q.</Breadcrumb.Item>
        </Breadcrumb>
        <div className="faq-div">
          <h1>{faqData?.title}</h1>
          <div className="flex-div">
            <div className="left-div">
              <div className="img-div">
                <Image fill alt={"Frame"} src={"/img/faq_frame.svg"} />
              </div>
            </div>
            <div className="right-div">
              <div className="faq-accordions">
                <Accordion className="faq-accordion" defaultActiveKey={0}>
                  {faqData?.data?.map((innerData, index) => {
                    return (
                      <Accordion.Item key={index} eventKey={index}>
                        <Accordion.Header>
                          {innerData?.question}
                        </Accordion.Header>
                        <Accordion.Body className="faq-accordion-body">
                          <p>{innerData?.answer}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
                {/* <Accordion className="faq-accordion" defaultActiveKey="0">
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
                </Accordion> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
