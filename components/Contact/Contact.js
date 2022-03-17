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
    // if (name === null) {
    //   alert("이름을 입력해주세요.");
    //   return false;
    // }
    // if (email === null) {
    //   alert("이메일을 입력해주세요.");
    //   return false;
    // }
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
    })
      .then((res) => {
        if (res.status === 200) {
          alert("접수되었습니다.");
          return router.push("/");
        } else {
          alert("접수를 실패하였습니다.");
        }
      })
      .then((res) => {
        console.log("!!!", res);
      });
  };

  //   const confirm = () => {
  //     const confirmOk = confirm("접수가 완료되었습니다.");
  //     if (confirmOk) {
  //       router.push("/");
  //     } else {
  //       return false;
  //     }
  //   };
  return (
    <div className="contact">
      <form name="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          name="name"
          required
          type="text"
          className="border border-1 border-gray-400"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">이메일</label>
        <input
          id="email"
          name="email"
          required
          type="email"
          className="border border-1 border-gray-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          className="border border-1 border-gray-400"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit">문의하기</button>
      </form>
    </div>
  );
};

export default Contact;
