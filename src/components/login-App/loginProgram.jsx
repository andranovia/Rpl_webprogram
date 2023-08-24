import { useState } from 'react';
import { TextField, Button, Link, Typography, Container } from '@mui/material';

import "./loginProgram.css";

const LoginApp = () => {
  const [activeInputs, setActiveInputs] = useState([]);
  const [activeSlider, setActiveSlider] = useState(1);
  const [activeForm, setActiveForm] = useState(1);
  const buttonStyle = {
    color: 'white',
    backgroundColor: 'black',
  };
  const linkColor = {
    color: 'black',


  };

  const handleInputFocus = (event) => {
    const name = event.target.name;
    setActiveInputs((prev) => [...prev, name]);
  };

  const handleInputBlur = (event) => {
    const name = event.target.name;
    setActiveInputs((prev) => prev.filter((input) => input !== name));
  };

  const handleToggleClick = () => {
    setActiveForm((prevActiveForm) => (prevActiveForm === 1 ? 2 : 1));
  };

  const handleSliderClick = (index) => {
    setActiveSlider(index);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setActiveForm(2);
  };

  return (
    <Container
      maxWidth="custom: 1280"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="container-box"
    >
      <div className="inner-box">
        <div
          className={`forms-wrap ${activeForm === 1 ? "sign-up-mode" : ""}`}
        >
          {activeForm === 1 ? (
            <form
            autoComplete="off"
            className="sign-in-form"
            onSubmit={handleFormSubmit}
          >
              <div className="logo">
                <img src="./img/logos1.png" alt="rplgram" />
                <Typography variant="h4">rplgram</Typography>
              </div>

              <div className="heading">
                <Typography variant="h2">Get Started</Typography>
                <Typography variant="h6">Already have an account?</Typography>
                <Link href="#" className="toggle" onClick={handleToggleClick} style={linkColor} >
                  Sign in
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <TextField
                    autoComplete="off"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className={`input-field ${
                      activeInputs.includes("name") ? "active" : ""
                    }`}
                  />
                </div>

                <div className="input-wrap">
                  <TextField
                    autoComplete="off"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className={`input-field ${
                      activeInputs.includes("email") ? "active" : ""
                    }`}
                  />
                </div>

                <div className="input-wrap">
                  <TextField
                    autoComplete="off"
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className={`input-field ${
                      activeInputs.includes("password") ? "active" : ""
                    }`}
                  />
                </div>

                <Button type="submit" fullWidth className="signUp-btn" style={buttonStyle}>
                  Sign Up
                </Button>

                <Typography variant="body2" className="requirmentText">
                  By signing up, I agree to the{" "}
                  <Link href="#" style={linkColor}>Terms of Services</Link> and{" "}
                  <Link href="#" style={linkColor}>Privacy Policy</Link>
                </Typography>
              </div>
            </form>
          ) : (
         
            <form
              autoComplete="off"
              className="sign-in-form"
              onSubmit={handleFormSubmit}
            >
              <div className="logo">
                <img src="./img/logos1.png" alt="rplgram" />
                <Typography variant="h4">rplgram</Typography>
              </div>

              <div className="heading">
                <Typography variant="h2">Welcome Back</Typography>
                <Typography variant="h6">Not registered yet? </Typography>
                <Link href="#" className="toggle" onClick={handleToggleClick} style={linkColor}>
                  Sign up
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <TextField
                    autoComplete="off"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className={`input-field ${
                      activeInputs.includes("name") ? "active" : ""
                    }`}
                  />
                </div>

                <div className="input-wrap">
                  <TextField
                    autoComplete="off"
                    name="password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className={`input-field ${
                      activeInputs.includes("password") ? "active" : ""
                    }`}
                  />
                </div>

                 <Button
                type="submit"
                fullWidth
                variant="contained"
                style={buttonStyle}
              >
                Sign In
              </Button>
              <div className="text">
                <Typography variant="body2">
                  Forgotten your password or your login details?{" "}
                  <Link href="#" style={linkColor}>Get help</Link> signing in
                </Typography>
                </div>
              </div>
            </form>
          )}
        </div>

        <div className="carousel">
          <div className="images-wrapper">
            <img
              src="./img/image1.png"
              className={`image img-1 ${activeSlider === 1 ? "show" : ""}`}
              alt=""
            />
            <img
              src="./img/image2.png"
              className={`image img-2 ${activeSlider === 2 ? "show" : ""}`}
              alt=""
            />
            <img
              src="./img/image3.png"
              className={`image img-3 ${activeSlider === 3 ? "show" : ""}`}
              alt=""
            />
          </div>

          <div className="text-slider">
            <div
              className="text-wrap"
              style={{ maxHeight: "2.2rem", overflow: "hidden" }}
            >
              <div
                className="text-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  transform: `translateY(${-(activeSlider - 1) * 2.2}rem)`,
                  transition: "0.5s",
                }}
              >
                <Typography variant="h2">Create your own courses</Typography>
                <Typography variant="h2">Customize as you like</Typography>
                <Typography variant="h2">
                  Invite students to your class
                </Typography>
              </div>
            </div>

            <div className="bullets">
              <span
                className={activeSlider === 1 ? "active" : ""}
                data-value="1"
                onClick={() => handleSliderClick(1)}
              ></span>
              <span
                className={activeSlider === 2 ? "active" : ""}
                data-value="2"
                onClick={() => handleSliderClick(2)}
              ></span>
              <span
                className={activeSlider === 3 ? "active" : ""}
                data-value="3"
                onClick={() => handleSliderClick(3)}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginApp;
