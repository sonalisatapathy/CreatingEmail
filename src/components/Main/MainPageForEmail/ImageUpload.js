import React, { useState, useEffect } from "react";
import { MdImageSearch, MdCloudUpload } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
function ImageUpload(props) {
  const [selectFile, setSelectFile] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  // const [imgSelect, setImgSelect] = useState([]);
  // const [deleteImg, setDeleteImg] = useState([]);
  useEffect(() => {
    if (selectFile < 1) return;
    const newImageURLs = [];
    selectFile.forEach((image) =>
      newImageURLs.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageURLs);
  }, [selectFile]);
  const uploadFiles = () => {
    document.getElementById("selectFile").click();
  };
  const onChangeHandler = (event) => {
    // console.log(event.target.files[0]);
    // setSelectFile(URL.createObjectURL(event.target.files[0]));
    setSelectFile([...event.target.files]);
  };
  //Select img
  // const selectImg = () => {
  //   // setImgSelect(e.target.remove());
  //   setImgSelect(imageURLs.pop());
  // };

  //Delte Img

  // const DeleteImg = (id) => {
  //   // setDeleteImg(imageURLs.pop());
  //   setDeleteImg((oldState) => oldState.filter((item) => item.id !== id));
  //   console.log(id);
  // };
  const DeleteImg = (index) => {
    const temp = imageURLs;
    console.log(temp);

    temp.splice(index, 1);
    console.log(temp);
    setImageURLs([...temp]);
  };
  return (
    <div className="mainContainent">
      <p className="textContent">Here you can add your content</p>
      <div className="edibleArea">
        <div style={{ border: "2px dashed black", margin: "4px" }}>
          {!selectFile.length && (
            <div className="shownImg">
              <BiImageAdd />
            </div>
          )}
          <div className="AddingPic">
            <>
              <div className="addImg">
                <input
                  id="selectFile"
                  type="file"
                  style={{ display: "none" }}
                  onChange={onChangeHandler}
                  multiple
                  accept="image/*"
                />
                {imageURLs.map((imageSrc, i) => (
                  <>
                    <img
                      src={imageSrc}
                      key={imageSrc}
                      id={i}
                      style={{
                        width: "600px",
                        height: "150px",
                      }}
                    />

                    <button onClick={() => DeleteImg(i)}>X</button>
                  </>
                ))}

                {!selectFile.length && (
                  <button style={{ background: "white" }} onClick={uploadFiles}>
                    <MdImageSearch />
                  </button>
                )}
                {!selectFile.length && (
                  <button style={{ background: "white" }}>
                    <MdCloudUpload />
                  </button>
                )}
                {/* {selectFile.length >= 1 && (
                  <button style={{ background: "white" }} onClick={selectImg}>
                    Select
                  </button>
                )} */}
                {/* {selectFile.length >= 1 && (
                  <img
                    src="https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png"
                    style={{
                      width: "40px",
                      height: "40px",
                      position: "absolute",
                      top: "74px",
                      right: "328px",
                    }}
                    onClick={() => DeleteImg(imageURLs.id)}
                  />
                )} */}
              </div>
            </>
          </div>
        </div>
        <div>
          <textarea style={{ width: "631px", height: "55vh" }}>
            u can add content here
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
