import React from "react";

function InfoReg() {
  return (
    <div>
      <div className="infoContainer">
        <div className="infoWithPicture">
          <div className="text-3xl ml-28  bg-orange-400 w-72 p-2 text-white rounded-md">
            Current Razor Blades
          </div>
          <div className="text-2xl ml-36">Papa Maras & Glo</div>
          <div className="merchCard ml-10">
            <br></br>
            <img src="https://i.imgur.com/TQoYHPC.jpg" />
          </div>
        </div>
        <div className="techUsedInfo">
          <div className="text-3xl bg-orange-400 w-72 p-2 pl-4 text-white rounded-md">
            Technologies Used
          </div>
          <div className="text-xl">
            <ul>
              <li>
                Javascript, Node, React, React Redux, SendGrid, SQL, Photopea,
                Tailwind CSS (The Superior CSS)
              </li>
            </ul>
          </div>
          <br></br>
          <div className="text-3xl bg-orange-400 w-40 p-2 text-white rounded-md">
            Thanks To!
          </div>
          <br></br>
          <div className="text-xl">
            Prime Academy, Family, Edan, Cohort, and SendGrid
          </div>
          <br></br>
          <div className="merchCard">
            <div className=" h-72 flex items-center overflow-hidden">
              <img
                className="object-contain"
                src="https://i.imgur.com/osEYlUy.jpg"
              />
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default InfoReg;
