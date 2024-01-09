import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Stack,
  Button,
  Link,
} from "@mui/material";
import { useRouter } from "next/router";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  collection,
  addDoc,
  onAuthStateChanged,
  doc,
  setDoc,
  onSnapshot,
} from "@/Firebase/FirebaseConfig";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [myAlert, setMyAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [loginData, setLoginData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    const { name, email, phoneNumber, password, confirmPassword } = loginData;
    if (!name || !email || !password || !confirmPassword) {
      // alert("Please fill in all fields");
      setMyAlert(true);
      setTimeout(() => {
        setMyAlert(false);
      }, 1200);
      return;
    }

    // Check if password and confirmPassword match
    else if (password === confirmPassword) {
      console.log("Form Values:", loginData);
      try {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        // User signed up successfully
        // //create a user doc in firestore
        const userDocRef = doc(db, "users", user.uid);
        // define a user data to store in firebase store
        const userId = user.uid;
        const userData = {
          name,
          phoneNumber,
          email,
          userId,
        };

        await setDoc(userDocRef, userData); //creates user document
        console.log(userDocRef);
        console.log("user document created in firestore");
        console.log(name, email, phoneNumber);

        setLoginData({
          name: "",
          phoneNumber: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        router.push("/ProfileInfo");
        return setLoading(false);
      } catch (error) {
        setLoading(false);
        setPasswordAlert(true);
        setLoginData({
          name: "",
          phoneNumber: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setTimeout(() => {
          setPasswordAlert(false);
        }, 2500);
      }
    } else {
      setPasswordAlert(true);
    }
    setTimeout(() => {
      setPasswordAlert(false);
    }, 2500);
  };

  const routeToLogin = () => {
    router.push("/");
  };

  return (
    <Box className="signin-bg" sx={{ padding: "35px 0px", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "10px",
          padding: "0px 0px 35px 25vw",
          cursor: "default",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="39"
          viewBox="0 0 39 39"
        >
          <path
            fill="#00E676"
            d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
          ></path>
          <path
            fill="#FFF"
            d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
          ></path>
        </svg>
        <Typography
          sx={{
            fontSize: "14px",
            color: "white",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          WHATSAPP WEB
        </Typography>
      </Box>
      <Box sx={{ height: "90%" }}>
        <Container sx={{ height: "100%", backgroundColor: "white" }}>
          <Box sx={{ padding: "60px" }}>
            <Typography variant="h2" color="#111B21">
              Sign up
            </Typography>
          </Box>
          <form onSubmit={onSubmit}>
            <Stack direction="column" gap={3} width={400} margin="0px auto">
              <TextField
                label="Name"
                variant="standard"
                name="name"
                value={loginData.name}
                onChange={onChange}
              />
              <TextField
                label="Phone Number"
                variant="standard"
                name="phoneNumber"
                value={loginData.phoneNumber}
                onChange={onChange}
              />
              <TextField
                label="email"
                type="email"
                variant="standard"
                name="email"
                value={loginData.email}
                onChange={onChange}
              />
              <TextField
                label="Password"
                type="password"
                variant="standard"
                name="password"
                value={loginData.password}
                onChange={onChange}
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="standard"
                name="confirmPassword"
                value={loginData.confirmPassword}
                onChange={onChange}
              />
              {passwordAlert ? (
                <Alert severity="warning">Email already in use</Alert>
              ) : myAlert ? (
                <Alert severity="warning">Fill out the required fields</Alert>
              ) : (
                <Button variant="outlined" type="submit" className="btnLoaded">
                  {loading ? (
                    <div style={{ paddingTop: "6px" }}>
                      <CircularProgress color="inherit" />
                    </div>
                  ) : (
                    <>sign in</>
                  )}
                </Button>
              )}
            </Stack>
          </form>
          <Box paddingTop="50px" width="100%">
            <Typography textAlign="center" color="#667781">
              Already have an account?{" "}
              <Button onClick={routeToLogin}>Login</Button>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default SignupForm;
