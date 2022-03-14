import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer border-t border-solid border-gray-300 p-8 text-center">
      <div className="container my-0 mx-auto">
        <div className="img-box pb-5">
          <Image
            src="https://res.cloudinary.com/applotnwjd/image/upload/v1647102481/cube_logo_head_eafdbb87d8.png"
            alt="푸터로고"
            width="120"
            height="90"
          />
        </div>
        <div className="footer-info">
          <ul>
            <li className="text-stone-500 font-semibold text-lg">
              큐브엔터테인먼트
            </li>
            <li className="text-stone-500">
              서울특별시 성동구 성수동2가 F2빌딩 7층
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
