import Image from "next/image";
import React, { useState } from "react";
import LoadingImage from "./layouts/LoadingImage";

const CustomFile = (props) => {
  const { name, placeholder, id, onChange, icon, className } = props;
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAddBanner = ({ target: { files } }) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
    // setImg(files[0].name);
    if (files?.length > 0) {
      setImg(URL.createObjectURL(files[0]));
    }
  };

  return (
    <label
      onChange={handleAddBanner}
      htmlFor={id}
      className="custom-file-upload"
    >
      {/* {!img ? placeholder : img} */}

      {loading ? <LoadingImage /> : !img ? placeholder : null}

      <input
        type="file"
        className={className}
        name={name}
        id={id}
        accept="image/*"
        onChange={onChange}
        defaultValue={""}
        capture
      />
      {!loading ? (
        <div className="img-div">
          <Image width={200} height={200} src={img == "" ? icon : img} alt="" />
        </div>
      ) : null}
    </label>
  );
};

export default CustomFile;
