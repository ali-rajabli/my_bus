import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <div className="notfound-div">
        <div className="img-div">
          <Image src={"/img/svg/notfound.svg"} fill alt={"Logo"} />
        </div>
        <div className="text-div">
          <h2 className="title">Page 404</h2>
          <h2 className="title-desc">Not found</h2>
          <p className="title-desc-p">Sorry, this page isn’t available </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
