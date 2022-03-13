import Link from "next/link";
import Image from "next/image";
import "moment/locale/ko";
import moment from "moment";

const GalleryList = ({ gallery }) => {
  //console.log("갤러리: ", gallery);
  return (
    <div className="sub justify-self-center w-full gallery">
      <div className="subVisual relative h-60 bg-sky-500">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-center">
          <span className="text-5xl font-bold block pb-4">Artists</span>
          <span className="block text-lg font-semibold">
            큐브엔터테인먼트의 아티스트를 소개합니다.
          </span>
        </p>
      </div>
      <div className="container xl my-0 mx-auto p-7">
        <div className="notice bg-white">
          <ul className="text-center">
            {gallery.data.length !== 0 ? (
              gallery.data.map((dataList, key) => (
                <li
                  key={dataList.id}
                  className="galList hover:bg-blue-100 mb-5 rounded-lg inline-block odd:mr-12 shadow-xl"
                >
                  {
                    <Link href={`/gallery/view/${dataList.id}`}>
                      <a className="block">
                        <div>
                          <Image
                            className="rounded-t-lg galThumb transition-all duration-300"
                            src={
                              dataList.attributes.galThumb.data[0].attributes
                                .url
                            }
                            alt={
                              dataList.attributes.galThumb.data[0].attributes
                                .alternativeText
                            }
                            width={
                              dataList.attributes.galThumb.data[0].attributes
                                .width
                            }
                            height={
                              dataList.attributes.galThumb.data[0].attributes
                                .height
                            }
                          />
                        </div>
                        <div className="tit text-xl font-bold py-4">
                          {dataList.attributes.galTitle}
                        </div>
                      </a>
                    </Link>
                  }
                </li>
              ))
            ) : (
              <div>데이터가 없습니다.</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GalleryList;
