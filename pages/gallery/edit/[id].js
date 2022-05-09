// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import moment from "moment";
// import ImageUpload from "../../../components/ImageUpload";
// import Layout from "../../../components/_App/Layout";
// import { ToastContainer } from "react-toastify";
const EditTest = () => {
  return <div>EditTest</div>;
};
export default EditTest;
// export default function EditNews({ sportNews }) {
//   const [values, setValues] = useState({
//     galTitle: sportNews.galTitle,
//   });
//   const [previewImage, setPreviewImage] = useState(
//     sportNews.image ? sportNews.image.formats.thumbnail.url : null
//   );
//   const [showModal, setShowModal] = useState(false);
//   const router = useRouter();
//   const { name, detail, date, time } = values;
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const emptyFieldCheck = Object.values(values).some(
//       (element) => element === ""
//     );
//     if (emptyFieldCheck) {
//       toast.error("Please fill all input field");
//     }
//     const response = await fetch(`${API_URL}/sports/${sportNews.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     });
//     if (!response.ok) {
//       toast.error("something went wrong!!!");
//     } else {
//       const sport = await response.json();
//       router.push(`/news/${sport.slug}`);
//     }
//   };

//   const imageUploaded = async (e) => {
//     const res = await fetch(`${API_URL}/sports/${sportNews.id}`);
//     const data = await res.json();
//     console.log("showing =>", data);
//     console.log(setPreviewImage);
//     setPreviewImage(data.image[0].formats.thumbnail.url);
//     setShowModal(false);
//   };

//   const handleInputchange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };
//   return (
//     <Layout title="Add New Sport News">
//       <Link href="/news">Go Back</Link>
//       <h2>Add Sport News</h2>
//       <ToastContainer />
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.grid}>
//           <div>
//             <label htmlFor="name">Name</label>
//             <input
//               name="name"
//               id="name"
//               type="text"
//               value={name}
//               onChange={handleInputchange}
//             />
//           </div>
//           <div>
//             <label htmlFor="date">Date</label>
//             <input
//               name="date"
//               id="date"
//               type="date"
//               value={moment(date).format("yyyy-MM-DD")}
//               onChange={handleInputchange}
//             />
//           </div>
//           <div>
//             <label htmlFor="time">Time</label>
//             <input
//               name="time"
//               id="time"
//               type="text"
//               value={time}
//               onChange={handleInputchange}
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="detail">Detail</label>
//           <textarea
//             name="detail"
//             id="detail"
//             type="text"
//             value={detail}
//             onChange={handleInputchange}
//           />
//         </div>
//         <input className="btn" type="submit" value="Add News" />
//       </form>
//       {/* {console.log(previewImage)} */}
//       {previewImage ? (
//         <Image src={previewImage} height={100} width={180} />
//       ) : (
//         <div>
//           <p>No Image Available</p>
//         </div>
//       )}
//       <div>
//         <button onClick={() => setShowModal(true)} className="btn-edit">
//           Update Image
//         </button>
//       </div>
//       <Modal show={showModal} onClose={() => setShowModal(false)}>
//         <ImageUpload sportNewsId={sportNews.id} imageUploaded={imageUploaded} />
//       </Modal>
//     </Layout>
//   );
// }

// export async function getServerSideProps({ params: { id } }) {
//   const res = await fetch(`${baseApiUrl}/api/galleries/${id}`);
//   const sportNews = await res.json();
//   return {
//     props: { sportNews },
//   };
// }
