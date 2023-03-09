import { getPrivacyPage } from "@/reducers/pageSlice";
import { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Privacy = () => {
  const dispatch = useDispatch();
  const { privacyData } = useSelector((state) => state.pagesData);

  useEffect(() => {
    dispatch(getPrivacyPage());
  }, [dispatch]);

  return (
    <div className="privacy">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">MY BUS</Breadcrumb.Item>
          <Breadcrumb.Item active>Gizlilik siyasəti</Breadcrumb.Item>
        </Breadcrumb>
        <div className="privacy-div">
          <h1>{privacyData?.title}</h1>
          {/* <span className="date">Effective Date: 19.05.2022</span> */}
          <p>{privacyData?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
