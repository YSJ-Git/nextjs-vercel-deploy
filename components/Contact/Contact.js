import { useState } from "react";
import { useRouter } from "next/router";
import baseApiUrl from "../../utils/baseApiUrl";

const Contact = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      content,
    };
    //console.log(data);

    fetch(`${baseApiUrl}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: `${data.name}`,
          email: `${data.email}`,
          content: `${data.content}`,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
      });

    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        alert("접수되었습니다.");
        return router.push("/");
      } else {
        alert("접수를 실패하였습니다.");
      }
    });
  };
  return (
    <div className="sub justify-self-center w-full">
      <div className="subVisual relative h-60 bg-sky-500">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-center">
          <span className="text-5xl font-bold block pb-4">Contact</span>
          <span className="block text-lg font-semibold">
            궁금하신 점이 있으시다면 문의주세요.
          </span>
        </p>
      </div>
      <div className="container xl my-0 mx-auto p-7 max-w-3xl	">
        <div className="contact bg-white">
          <form name="contact-form" onSubmit={handleSubmit}>
            <ul>
              <li className="py-6">
                <label
                  htmlFor="name"
                  className="w-24 inline-block align-middle font-semibold text-lg"
                >
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  className="border-b border-1 border-gray-400 align-middle w-10/12 p-3"
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li className="py-6">
                <label
                  htmlFor="email"
                  className="w-24 inline-block align-middle font-semibold text-lg"
                >
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="border-b border-1 border-gray-400 align-middle w-10/12 p-3"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li className="py-6">
                <label
                  htmlFor="content"
                  className="w-24 inline-block align-middle font-semibold text-lg"
                >
                  내용
                </label>
                <textarea
                  id="content"
                  name="content"
                  className="border border-1 border-gray-400 align-middle w-10/12 rounded-lg p-3"
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </li>
            </ul>
            <div className="text-center">
              <button
                type="submit"
                className="p-3 text-white font-semibold bg-sky-500 inline-block rounded-xl hover:bg-sky-600"
              >
                문의하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
