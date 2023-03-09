import { getAboutPage } from "@/reducers/pageSlice";
import Image from "next/image";
import { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
const About = () => {
  const dispatch = useDispatch();
  const { aboutData } = useSelector((state) => state.pagesData);

  useEffect(() => {
    dispatch(getAboutPage());
  }, [dispatch]);

  return (
    <div className="about">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">MY BUS</Breadcrumb.Item>
          <Breadcrumb.Item active>Haqqımızda</Breadcrumb.Item>
        </Breadcrumb>
        <div className="about-div">
          <div className="left-div">
            <h1>{aboutData?.title}</h1>

            <div className="text-div">
              <div className="banner-div">
                <Image fill src={"/img/mobile_banner.svg"} alt={"Banner"} />
              </div>
              <p className="text-1">{aboutData?.content}</p>
              {/* <p className="text-2">{aboutData?.content}</p> */}
            </div>
          </div>
          <div className="right-div">
            <div className="phone-div">
              <Image src={"/img/phone.svg"} alt={"Phone"} fill />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-div">
        <img src={"/img/dots_frame.svg"} alt="" />
      </div>
    </div>
  );
};

export default About;
