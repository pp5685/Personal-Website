import { useState, useEffect, useRef } from "react";
import axios from "axios";

//TODO:ADD CAPTCHA
import ReCAPTCHA from "react-google-recaptcha";
import { init } from "emailjs-com";
import recaptcha from "react-google-recaptcha/lib/recaptcha";
init("user_Dpycgnqm5gytCNbdZS65f");
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [created, setCreated] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [verified, setVerified] = useState(false);
  const [token, setToken] = useState("");
  const reCaptcha = useRef();
  const secretKey = "6LcYUkcaAAAAAKN4bOVL2rmYHStzsbquuAzUfS6n";
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && comment !== "" && email !== "" && verified) {
      await axios
        .post("https://api.emailjs.com/api/v1.0/email/send", {
          service_id: "service_pbqbh2j",
          template_id: "template_2e5twro",
          user_id: "user_Dpycgnqm5gytCNbdZS65f",
          template_params: {
            from_name: name,
            reply_to: email,
            message: comment,
          },
        })
        .then((res) => {
          console.log("email sent successfully");
        })
        .catch((err) => {
          console.error("ERROR OCCURED");
        })
        .then(
          setCreated(true),
          setName(""),
          setComment(""),
          setEmail(""),
          reCaptcha.current.reset()
        );
    } else {
      setCreated(false);
    }
  };
  const onCloseClick = () => {
    setCreated(null);
  };
  const renderSuccess = (created, verified) => {
    if (created && verified) {
      return (
        <div className="ui success message">
          <i className="close icon" onClick={onCloseClick}></i>
          <div className="header">Comment Sent</div>
          <p>Comment posted!!!!</p>
        </div>
      );
    }
  };
  const checkValidEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      setEmailError(false);
    } else if (email === "" && created === true) {
      setEmailError(false);
    } else if (email === "" && name === "" && comment === "") {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const onCaptchaClick = async (token) => {
    setToken(token);

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      }
    )
      .then((res) => res.json())
      //need to set verified to proper response message from json
      .then((json) => setVerified(true));
  };
  const onCaptchaExpire = (token) => {
    setToken("");
    setVerified(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (email !== "") {
        return checkValidEmail(email);
      } else return checkValidEmail(email);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [email]);

  return (
    <div
      className="ui raised segment"
      style={{ backgroundImage: "url(/pink-background.jpg)" }}
    >
      <img
        className="ui centered large rounded image"
        src="/smol-doge.png"
        alt="image not available"
      ></img>
      <form className="ui form success" onSubmit={(e) => onSubmit(e)}>
        <div className="field">
          <label>Name</label>
          <input
            className="input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your Name"
          ></input>

          {created === false && name === "" ? (
            <div class="ui pointing red basic label">
              Please enter your name
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="field">
          <label>E-mail</label>
          <input
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your email"
          ></input>
          {created === false && email === "" ? (
            <div class="ui pointing red basic label">
              Please enter your email
            </div>
          ) : (
            ""
          )}
          {emailError === true ? (
            <div class="ui pointing red basic label">
              Please enter an valid email
            </div>
          ) : (
            ""
          )}
        </div>

        {renderSuccess(created, verified)}
        <div className="field">
          <label>Comment</label>
          <textarea
            placeholder="Type your comment here"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          {created === false && comment === "" ? (
            <div class="ui pointing red basic label">
              Please enter some comments
            </div>
          ) : (
            ""
          )}
        </div>
        <ReCAPTCHA
          sitekey="6LcYUkcaAAAAAJMt59j4F8C4Fla9JFjMP78-JYS2"
          ref={reCaptcha}
          onChange={(token) => onCaptchaClick(token)}
          onExpired={(token) => onCaptchaExpire(token)}
        />
        {created === false && verified === false ? (
          <div>
            <div className="ui pointing red basic label">
              Please verify you're a human
            </div>
            <div> </div>
          </div>
        ) : (
          ""
        )}

        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
