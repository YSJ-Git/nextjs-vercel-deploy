import Image from "next/image";
import Link from "next/link";

const SingerLink = ({ singerLink }) => {
  //console.log("singerLink: ", singerData);
  const singerData = singerLink.data.attributes;
  const artistImg = singerData.AltistImg.data.attributes.formats.medium;
  const albumImg = singerData.AlbumImg.data.attributes.formats.medium;

  return (
    <div className="singer grid mb-16">
      <div className="singerBox mb-16">
        <Link href="/gallery">
          <a className="grid grid-cols-2 gap-4">
            <div className="imgBox">
              <Image
                src={artistImg.url}
                alt={artistImg.alternativeText}
                width={artistImg.width}
                height={artistImg.height}
                quality="100"
                className="transition-all duration-300"
              />
            </div>
            <div className="txtBox grid content-center text-center border-y border-gray-300">
              <p className="font-bold text-6xl pb-6">
                {singerData.ArtistTitle}
              </p>
              <p className="text-slate-500">{singerData.ArtistDesc}</p>
            </div>
          </a>
        </Link>
      </div>
      <div className="singerBox">
        <Link href="/cube">
          <a className="grid grid-cols-2 gap-4">
            <div className="imgBox col-start-2">
              <Image
                src={albumImg.url}
                alt={albumImg.alternativeText}
                width={albumImg.width}
                height={albumImg.height}
                quality="100"
                className="transition-all duration-300"
              />
            </div>
            <div className="txtBox grid content-center text-center col-start-1 row-start-1 border-y border-gray-300">
              <p className="font-bold text-6xl pb-6">{singerData.AlbumTitle}</p>
              <p className="text-slate-500">{singerData.AlbumDesc}</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SingerLink;
