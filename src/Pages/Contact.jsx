// import Footer from "../components/Footer/Footer";

// function Login() {
//   return (
//     <>
//       <section>
//         <div className="login-banner relative justify-center flex">
//           <h1 className="text-white absolute bottom-[25px] text-[30px] font-bold">Contact Us</h1>
//         </div>
//         {/* contact */}
//         <div className="bg-white py-[120px] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
//           {/* first col */}
//           <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
//             <h2 className="text-black text-[36px] font-bold leading-[1.2]">
//               We are here for help you! To Shape Your Body.
//             </h2>
//             <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
//               At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers
//               and nutritionists will work with you to create a personalized fitness and nutrition plan that
//               helps you reach your specific goals.
//             </p>
//             <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
//               <div className="flex flex-col relative">
//                 <h3 className="text-[20px] font-bold mb-10">New York City, USA</h3>
//                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
//                 <p className="text-[15px] font-medium text-[#646464]">
//                   85 Briston Mint Street,
//                   <br /> London, E1 8LG, USA
//                 </p>
//               </div>
//               {/*  */}
//               <div className="flex flex-col relative">
//                 <h3 className="text-[20px] font-bold mb-10">Opening Hours</h3>
//                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
//                 <div className="text-[15px] font-medium text-[#646464]">
//                   <p>Mon to Fri: 7:30 am — 1:00 am</p>
//                   <p>Mon to Fri: 7:30 am — 1:00 am</p>
//                 </div>
//               </div>
//               {/*  */}
//               <div className="flex flex-col relative">
//                 <h3 className="text-[20px] font-bold mb-10">Information</h3>
//                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
//                 <div className="text-[15px] font-medium text-[#646464]">
//                   <p>+800-123-4567</p>
//                   <p>&nbsp; gymat@gymail.com</p>
//                 </div>
//               </div>
//               {/*  */}
//               <div className="flex flex-col relative">
//                 <h3 className="text-[20px] font-bold mb-10">Follow Us On</h3>
//                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
//                 <div className="text-[18px] font-medium text-black flex gap-5">
//                   <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
//                   <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
//                   <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
//                   <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* second col ---*/}
//            <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
//             <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
//             <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
//             <input
//               className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
//               placeholder="Full Name *"
//               type="text"
//             ></input>
//             <input
//               className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
//               placeholder="Email Address *"
//               type="email"
//             ></input>
//             <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
//               <option>Select Class</option>
//               <option>Body Building</option>
//               <option>Fitness</option>
//               <option>Yoga</option>
//               <option>Workout</option>
//               <option>Cycling</option>
//             </select>
//             <textarea
//               placeholder="Comment"
//               className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
//             ></textarea>
//             <button
//               type="submit"
//               className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
//             >
//               submit now
//             </button>
//           </form> 
//         </div>
//         <Footer />
//       </section>
//     </>
//   );
// }

// export default Login;


// import { useState } from "react";
// import Footer from "../components/Footer/Footer";

// function Login() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     classType: "Select Class",
//     comment: "",
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let errors = {};

//     if (!formData.name.trim()) errors.name = "Name is required.";
//     if (!formData.email) {
//       errors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = "Invalid email format.";
//     }
//     if (formData.classType === "Select Class") errors.classType = "Please select a class.";

//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateForm();

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//     } else {
//       setFormErrors({});
//       alert("Form submitted successfully! We'll get back to you soon.");
//       // Reset form fields
//       setFormData({
//         name: "",
//         email: "",
//         classType: "Select Class",
//         comment: "",
//       });
//     }
//   };

//   return (
//     <>
//       <section>
//         <div className="login-banner relative justify-center flex">
//           <h1 className="text-white absolute bottom-[25px] text-[30px] font-bold">Contact Us</h1>
//         </div>
//         {/* contact */}
//         <div className="bg-white py-[120px] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1">
//           {/* first col */}
//           <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
//             <h2 className="text-black text-[36px] font-bold leading-[1.2]">
//               We are here to help you! To Shape Your Body.
//             </h2>
//             <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
//               At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers
//               and nutritionists will work with you to create a personalized fitness and nutrition plan that
//               helps you reach your specific goals.
//             </p>
//             <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
//               <div className="flex flex-col relative">
//                 <h3 className="text-[20px] font-bold mb-10">New York City, USA</h3>
//                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
//                 <p className="text-[15px] font-medium text-[#646464]">
//                   85 Briston Mint Street,
//                   <br /> London, E1 8LG, USA
//                 </p>
//               </div>
//               <div className="flex flex-col relative">
//                 <h3 className="text-[20px] font-bold mb-10">Opening Hours</h3>
//                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
//                 <div className="text-[15px] font-medium text-[#646464]">
//                   <p>Mon to Fri: 7:30 am — 1:00 am</p>
//                   <p>Sat to Sun: 8:00 am — 11:00 pm</p>
//                 </div>
//               </div>
//               <div className="flex flex-col relative">
//                 <h3 className="text-[20px] font-bold mb-10">Information</h3>
//                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
//                 <div className="text-[15px] font-medium text-[#646464]">
//                   <p>+800-123-4567</p>
//                   <p>gymat@gymail.com</p>
//                 </div>
//               </div>
//               <div className="flex flex-col relative">
//                 <h3 className="text-[20px] font-bold mb-10">Follow Us On</h3>
//                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
//                 <div className="text-[18px] font-medium text-black flex gap-5">
//                   <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
//                   <i className="fa-brands fa-twitter p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
//                   <i className="fa-brands fa-instagram p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
//                   <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff0336] ease-in duration-200 hover:text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* second col */}
//           <form onSubmit={handleSubmit} className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
//             <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
//             <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[77px]"></span>
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-2"
//               placeholder="Full Name *"
//               type="text"
//             />
//             {formErrors.name && <p className="text-red-500 text-[14px] mb-4">{formErrors.name}</p>}
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-2"
//               placeholder="Email Address *"
//               type="email"
//             />
//             {formErrors.email && <p className="text-red-500 text-[14px] mb-4">{formErrors.email}</p>}
//             <select
//               name="classType"
//               value={formData.classType}
//               onChange={handleInputChange}
//               className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-2"
//             >
//               <option>Select Class</option>
//               <option>Body Building</option>
//               <option>Fitness</option>
//               <option>Yoga</option>
//               <option>Workout</option>
//               <option>Cycling</option>
//             </select>
//             {formErrors.classType && <p className="text-red-500 text-[14px] mb-4">{formErrors.classType}</p>}
//             <textarea
//               name="comment"
//               value={formData.comment}
//               onChange={handleInputChange}
//               placeholder="Comment"
//               className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-4"
//             ></textarea>
//             <button
//               type="submit"
//               className="text-white bg-[#ff0336] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
//             >
//               Submit Now
//             </button>
//           </form>
//         </div>
//         <Footer />
//       </section>
//     </>
//   );
// }

// export default Login;
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer/Footer";

const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const serviceId = process.env.REACT_APP_SERVICE_ID;


function Login() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    classType: "Select Class",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.user_name.trim()) errors.user_name = "Name is required.";
    if (!formData.user_email) {
      errors.user_email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      errors.user_email = "Invalid email format.";
    }
    if (formData.classType === "Select Class") errors.classType = "Please select a class.";

    return errors;
  };

  const sendEmail =  async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      
       await emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          () => {
            setSuccessMessage("Form submitted successfully! We'll get back to you soon.");
            setFormData({
              user_name: "",
              user_email: "",
              classType: "Select Class",
              message: "",
            });
          },
          (error) => {
            console.error('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[30px] font-bold">Contact Us</h1>
        </div>
        <div className="bg-white py-[120px] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1">
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-black text-[36px] font-bold leading-[1.2]">
              We are here to help you! To Shape Your Body.
            </h2>
            <p className="text-[16px] w-[95%] text-[#646464] font-medium my-[40px]">
            At <span className="text-red-500">BodyLife</span>, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
               <div className="flex flex-col relative">
                 <h3 className="text-[20px] font-bold mb-10">Sithalapakkam, Chennai</h3>
                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                 <p className="text-[15px] font-medium text-[#646464]">                   
                  85 Briston Mint Street,
                   <br /> London, E1 8LG, USA
                </p>
              </div>
               <div className="flex flex-col relative">
                <h3 className="text-[20px] font-bold mb-10">Opening Hours</h3>
                 <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                 <div className="text-[15px] font-medium text-[#646464]">
                <p>Mon to Fri: 4:00 am — 9:00 pm</p>
                <p>Sat to Sun: 4:00 am — 11:00 am</p>
              </div>
             </div>
             <div className="flex flex-col relative">
                <h3 className="text-[20px] font-bold mb-10">Information</h3>
                <span className="bg-[#ff0336] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                   <p>+91-9988776655</p>
           <p>Bodylife@gymail.com</p>
             </div>
</div>
</div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col bg-[#f8f8f8] relative md1000:w-[65%] md1000:mx-auto">
            <h3 className="text-[28px] font-bold mb-14">Leave Us Your Info</h3>
            <input
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="w-full py-[12px] px-[20px] border border-solid mb-2 text-2xl"
              placeholder="Full Name *"
              type="text"
            />
            {formErrors.user_name && <p className="text-red-500 text-[14px] mb-4">{formErrors.user_name}</p>}
            <input
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              className="w-full py-[12px] px-[20px] border border-solid mb-2 text-2xl"
              placeholder="Email Address *"
              type="email"
            />
            {formErrors.user_email && <p className="text-red-500 text-[14px] mb-4">{formErrors.user_email}</p>}
            <select
              name="classType"
              value={formData.classType}
              onChange={handleInputChange}
              className="w-full py-[12px] px-[20px] border border-solid mb-2 text-2xl"
            >
              <option>Select Class</option>
              <option>Body Building</option>
              <option>Fitness</option>
              <option>Yoga</option>
              <option>Workout</option>
              <option>Cycling</option>
            </select>
            {formErrors.classType && <p className="text-red-500 text-lg mb-4">{formErrors.classType}</p>}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] border border-solid mb-4 text-2xl"
            ></textarea>
            <button type="submit" className="text-white bg-[#ff0336] w-fit py-[20px] px-[40px] font-bold uppercase text-lg">
              Submit Now
            </button>
            {successMessage && <p className="text-green-500 text-[14px] mt-4">{successMessage}</p>}
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Login;
