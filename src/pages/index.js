import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <div className="home-frame-div-1">
        <div className="container">
          <div className="slogan-div">
            <h1>Bu gün MY BUS hara getməyinizə kömək edə bilər?</h1>
            <div className="app-div">
              <p>
                Lorem ipsum dolor sit amet consectetur. Elit pharetra pharetra
                condimentum tortor ullamcorper.
              </p>
              <div className="flex-div">
                <div className="img-div">
                  <Image fill alt={"App Store"} src={"/img/appstore.png"} />
                </div>
                <div className="img-div">
                  <Image fill alt={"Google Play"} src={"/img/googleplay.svg"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-div">
          <Image src={"/img/home_frame1.svg"} alt={"Frame"} fill />
        </div>
        <div className="frame-mobile-div">
          <Image src={"/img/home_mobile_frame1.svg"} alt={"Frame"} fill />
        </div>
      </div>
      <div className="home-frame-div-2">
        <div className="frame-mobile-div">
          <Image src={"/img/home_mobile_frame2.svg"} alt={"Frame"} fill />
        </div>
        <div className="frame-div">
          <Image src={"/img/home_frame2.svg"} alt={"Frame"} fill />
        </div>
        <div className="slogan-div">
          <h2>Bu gün MY BUS hara getməyinizə kömək edə bilər?</h2>
          <div className="app-div">
            <p>
              Lorem ipsum dolor sit amet consectetur. Elit pharetra pharetra
              condimentum tortor ullamcorper.
            </p>
          </div>
        </div>
      </div>
      <div className="home-frame-div-3">
        <div className="slogan-div">
          <h2>Bu gün MY BUS hara getməyinizə kömək edə bilər?</h2>
          <div className="app-div">
            <p>
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo in dolor
              amet lectus amet volutpat amet. Ac elit in arcu porttitor ac. Diam
              imperdiet nunc ut congue. Lorem faucibus vestibulum nisl quam
              pulvinar cras sagittis volutpat amet. Eget vel libero vitae.
            </p>
          </div>
        </div>
        <div className="frame-div">
          <Image src={"/img/home_frame3.svg"} alt={"Frame"} fill />
        </div>
        <div className="frame-mobile-div">
          <Image src={"/img/home_mobile_frame3.svg"} alt={"Frame"} fill />
        </div>
      </div>
      <div className="home-frame-div-4">
        <div className="slogan-div">
          <h1>Bu gün MY BUS hara getməyinizə kömək edə bilər?</h1>
          <div className="app-div">
            <p>
              Lorem ipsum dolor sit amet consectetur. Elit pharetra pharetra
              condimentum tortor ullamcorper.
            </p>
            <div className="flex-div">
              <div className="img-div">
                <Image fill alt={"App Store"} src={"/img/appstore.png"} />
              </div>
              <div className="img-div">
                <Image fill alt={"Google Play"} src={"/img/googleplay.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-div">
          <Image src={"/img/home_frame4.svg"} alt={"Frame"} fill />
        </div>
        <div className="frame-mobile-div">
          <Image src={"/img/home_mobile_frame4.svg"} alt={"Frame"} fill />
        </div>
      </div>
    </div>
  );
}
