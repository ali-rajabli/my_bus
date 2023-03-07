import Image from "next/image";
import { Breadcrumb } from "react-bootstrap";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">MY BUS</Breadcrumb.Item>
          <Breadcrumb.Item active>Haqqımızda</Breadcrumb.Item>
        </Breadcrumb>
        <div className="about-div">
          <div className="left-div">
            <h1>
              Biz dünyanın daha yaxşıya doğru necə hərəkət etdiyini yenidən
              təsəvvür edirik
            </h1>
            
            <div className="text-div">
              <p className="text-1">
                We are Uber. The go-getters. The kind of people who are
                relentless about our mission to help people go anywhere and get
                anything and earn their way. Movement is what we power. It’s our
                lifeblood. It runs through our veins. It’s what gets us out of
                bed each morning. It pushes us to constantly reimagine how we
                can move better. For you. For all the places you want to go. For
                all the things you want to get. For all the ways you want to
                earn. Across the entire world. In real time. At the incredible
                speed of now. We are a tech company that connects the physical
                and digital worlds to help make movement happen at the tap of a
                button. Because we believe in a world where movement should be
                accessible. So you can move and earn safely. In a way that’s
                sustainable for our planet. And regardless of your gender, race,
                religion, abilities, or sexual orientation, we champion your
                right to move and earn freely and without fear. Of course, we
                haven’t always gotten it right. But we’re not afraid of failure,
                because it makes us better, wiser, and stronger. And it makes us
                even more committed to do the right thing by our customers,
                local communities and cities, and our incredibly diverse set of
                international partners.
              </p>
              <p className="text-2">
                We are Uber. The go-getters. The kind of people who are
                relentless about our mission to help people go anywhere and get
                anything and earn their way. Movement is what we power. It’s our
                lifeblood. It runs through our veins. It’s what gets us out of
                bed each morning. It pushes us to constantly reimagine how we
                can move better. For you. For all the places you want to go. For
                all the things you want to get. For all the ways you want to
                earn. Across the entire world. In real time. At the incredible
                speed of now. We are a tech company that connects the physical
                and digital worlds to help make movement happen at the tap of a
                button. Because we believe in a world where movement should be
                accessible. So you can move and earn safely. In a way that’s
                sustainable for our planet. And regardless of your gender, race,
                religion, abilities, or sexual orientation, we champion your
                right to move and earn freely and without fear. Of course, we
                haven’t always gotten it right. But we’re not afraid of failure,
                because it makes us better, wiser, and stronger. And it makes us
                even more committed to do the right thing by our customers,
                local communities and cities, and our incredibly diverse set of
                international partners.
              </p>
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
