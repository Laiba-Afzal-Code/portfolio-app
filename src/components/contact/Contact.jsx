import { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  const hendleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_y47y6u4", "template_z4gdzed", formRef.current, {
        publicKey: "sLh1gxYtcn4tBGNoV",
      })
      .then(
        (result) => {
          console.log("success...", result.text);
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-warrper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="c-img"
              />
              +92 111 223 445
            </div>
            <div className="c-info-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeSS4_MXdq-t8vHvOPEieYSIQ3YmgwUb1OA&usqp=CAU"
                alt=""
                className="c-img"
              />
              laibadev@gmail.com
            </div>
            <div className="c-info-item">
              <img
                src="https://www.shutterstock.com/image-vector/pin-point-logo-can-be-600nw-1679653036.jpg"
                alt=""
                className="c-img"
              />
              258-RB village Faisalabad
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch Always available freelunacing
            if the right project comes along. me.
          </p>
          <form action="submit" ref={formRef} onSubmit={hendleSubmit}>
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Subject" name="user_subjact" />
            <input style={{backgroundColor: darkMode && '#333'}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && '#333'}}
              name="message"
              rows={5}
              placeholder="Enter your message"
            ></textarea>
            <button className="submit-btn" value="Send">
              Submit
            </button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
