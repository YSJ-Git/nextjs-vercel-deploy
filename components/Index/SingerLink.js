import Image from "next/image";
import Link from "next/link";

const SingerLink = ({ singerLink }) => {
  //console.log("singerLink: ", singerData);
  const singerData = singerLink.data.attributes;
  const artistImg = singerData.AltistImg.data.attributes.formats.medium;
  const albumImg = singerData.AlbumImg.data.attributes.formats.medium;

  return (
    <div className="singer">
      <div className="singerBox">
        <Link href="#">
          <a>
            <div className="imgBox">
              <Image
                src={artistImg.url}
                alt={artistImg.alternativeText}
                width={artistImg.width}
                height={artistImg.height}
                quality="100"
              />
            </div>
            <div className="txtBox">
              <p>{singerData.ArtistTitle}</p>
              <p>{singerData.ArtistDesc}</p>
            </div>
          </a>
        </Link>
      </div>
      <div className="singerBox">
        <Link href="#">
          <a>
            <div className="txtBox">
              <p>{singerData.AlbumTitle}</p>
              <p>{singerData.AlbumDesc}</p>
            </div>
            <div className="imgBox">
              <Image
                src={albumImg.url}
                alt={albumImg.alternativeText}
                width={albumImg.width}
                height={albumImg.height}
                quality="100"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SingerLink;
