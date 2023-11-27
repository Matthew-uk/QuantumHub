import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import Cookies from "js-cookies";
import { useRouter } from "next/navigation";

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  a {
    color: rgb(237, 42, 42);
  }
  @media screen and (max-width: 917px) {
    flex-direction: column;
  }
`;

const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media screen and (max-width: 917px) {
    min-height: 90vh;
    border-radius: 50px;
    margin-top: -3em;
    background: white;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #078ea6;
  @media screen and (max-width: 917px) {
    min-height: 20vh !important;
    z-index: -1;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  border-radius: 6px;
  flex-wrap: wrap;
  padding: 0.5em;
`;

const FormTitle = styled.div`
  padding: 0.5em;
  text-align: center;
  /* font-family: "Courier New", Courier, monospace; */
  margin-bottom: 0.2em;
  h2 {
    color: rgb(237, 42, 42);
  }
  h2::after {
    content: "";
    display: block;
    width: 45px;
    height: 4px;
    margin: 0.2em auto;
    background: rgb(237, 42, 42);
    border-radius: 3px;
    /* border: 1px solid red; */
  }
  p {
    font-size: 1em;
    font-weight: bolder;
  }
`;

const InputCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 90%;
  padding: 0.3em;
  text-align: left;
  input {
    width: 97%;
    height: 2.5em;
    border-radius: 1.7px;
    border: 1px solid grey;
    padding: 0.1em 0.4em;
  }
  label {
    padding-bottom: 0.5em;
  }
`;

const Register = styled.div`
  width: 90%;
  padding: 0.5em 0;
`;

const SubmitBtn = styled.button`
  width: 90%;
  font-family: monospace;
  background: transparent;
  border: 1.5px solid rgb(237, 42, 42);
  padding: 0.7em 0;
  font-size: 1.2em;
  cursor: pointer;
  color: rgb(237, 42, 42);
  border-radius: 2px;
  transition: all 0.4s ease-out;
  :hover {
    color: aliceblue;
    /* border: 1px solid aliceblue; */
    background: rgb(237, 42, 42);
  }
`;

const ForgotPassword = styled.div`
  width: 90%;
  text-align: center;
  padding-block: 0.7em;
`;

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
        referralCode,
        fullName,
      };
      console.log(data);
      const res = await axios.post(
        "https://node-backend-v1.onrender.com/api/users/register",
        data
      );
      console.log(res.data);
      Cookies.setItem("token", res.data.user.token);
      router.push("/account");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Hero>
      <HeroLeft>
        <h2>ReMoooo!!!</h2>
      </HeroLeft>
      <HeroRight className="right">
        <Form id="form" className="form" onSubmit={handleRegister}>
          <FormTitle className="title">
            <h2>Sign up</h2>
            <p>login to access your dashboard</p>
          </FormTitle>
          <InputCard className="input-card">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Email/Phone Number"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputCard>
          <InputCard className="input-card">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </InputCard>
          <InputCard className="input-card">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputCard>
          <InputCard className="input-card">
            <label>Referal Code</label>
            <input
              type="text"
              placeholder="Referal Code"
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </InputCard>
          <Register className="register">
            <p>
              Already have an account?{" "}
              <Link
                href="/login"
                style={{
                  letterSpacing: "1.5px",
                }}
              >
                Sign in
              </Link>
            </p>
          </Register>
          <SubmitBtn type="submit">login</SubmitBtn>
          <ForgotPassword className="forgot-password">
            <p>
              Forgot Password? <Link href="/forgot-password">Click here</Link>
            </p>
          </ForgotPassword>
        </Form>
      </HeroRight>
    </Hero>
  );
};

export default SignupPage;
