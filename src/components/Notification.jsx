import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      {/* <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      /> */}

      <img
        src="https://yt3.googleusercontent.com/BGSHDd1iOS6OZKEzP5f6JZ7qVTmGAphx4mzluNDYPB69kBJ52sErg6eGu-CduoLFhLpNnzLK=s160-c-k-c0x00ffffff-no-rj"
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />


      <div className="flex-1">
        <h6 className="mb-0 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                // className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                {/* 
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                /> 
                */}
              </li>
            ))}
          </ul>
          {/*  <div className="body-2 text-n-13">1m ago</div> */}
        </div>
      </div>
    </div>
  );
};

export default Notification;