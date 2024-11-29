import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Email = () => {

  const form = useRef();

  const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_cv7zp2n",
                "template_wicnvsb",
                form.current,
                "Ci01wbqXM71FjzEKE"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
  function handleInput(event){

  }
    return (
      <div style={{ backgroundColor: `#4169E1`,margin:`40px auto 0 auto`,}}>
        <div className="box contact-div" style={{ justifyContent: `space-evenly`,padding:`20px`,alignItems:`center`}}>
          <div className="Email-des" style={{width: `22rem`, margin: '0px auto' }}>
            <h1  style={{fontSize:`4.5rem`,font:`Montserrat`,color:`#FFC100`}}>Get Quote</h1>
          <p style={{fontSize:`1.0rem`,color:`white`}}>Thank you for considering Sign Infosoft. Whether you have questions about our services, want to discuss potential collaborations, or simply need more information, we are here to help. Please feel free to reach out to us using the contact details provided below.</p>
        </div>
          <div className="card " style={{ width: `25rem`, margin:'auto',paddingBottom:`0px` }}>
            <StyledContactForm style={{ width:`100%`}}>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" onChange={handleInput} />
                    <label>Phone</label>
                    <input type="tel" name="user_phone" onChange={handleInput} />
                    <label>Email</label>
                    <input type="email" name="user_email" onChange={handleInput} />
                    <label>Message</label>
                    <textarea name="message" onChange={handleInput} />
                <input type="submit" value="Send" style={{ backgroundColor:`#FFC100`}}/>
                </form>
            </StyledContactForm>
            </div>
        </div>
      </div>
    );
};

export default Email;

// Styles
const StyledContactForm = styled.div`
  width: 18rem;
  padding:5px;
  @media only screen and (max-width: 990px) {
  .contact-div{
    padding:80px auto !important;
  }
  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      overflow-clip-margin: content-box;
      overflow: clip;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background:#4169E1;
      color: white;
      border: none;
    }
  }
`;