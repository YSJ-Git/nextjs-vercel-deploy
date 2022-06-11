import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const Popup = ({ popup }) => {
  const now = moment().format("MMMM Do YYYY, h:mm:ss a");
  //console.log("NOW: ", now);
  //console.log("POPUP: ", popup);
  const popupData = popup.data.length !== 0 ? popup.data : null;
  //console.log("##", popupData);
  return (
    popupData !== null &&
    popupData.map((popupList) => (
      <div className="popup" key={popupList.id}>
        <div className="title">
          <p>{popupList.attributes.title}</p>
          <p>{moment(popupList.attributes.startDate).diff(moment(), "days")}</p>
        </div>
        <div>
          차이:
          {moment(popupList.attributes.finishDate).diff(
            moment(popupList.attributes.startDate),
            "days"
          )}
        </div>
        <div className="image">
          <Image
            src={popupList.attributes.media.data[0].attributes.url}
            alt={popupList.attributes.media.data[0].attributes.alternativeText}
            width={popupList.attributes.media.data[0].attributes.width}
            height={popupList.attributes.media.data[0].attributes.height}
          />
        </div>
      </div>
    ))
  );
};

export default Popup;
