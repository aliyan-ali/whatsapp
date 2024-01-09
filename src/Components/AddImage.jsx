import {
  Box,
  Typography,
  Container,
  Button,
  TextField,
  Stack,
  IconButton,
  Avatar,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import {
  auth,
  storage,
  onAuthStateChanged,
  ref,
  uploadBytes,
  getDownloadURL,
  setDoc,
  doc,
  db,
} from "../Firebase/FirebaseConfig";
import React, { useState, useEffect } from "react";

function AddImage() {

  const router = useRouter();
  const [imageFile, setImageFile] = useState(null);
  const [bio, setBio] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, get the user ID
          setUser(user)
          setUserId(user.uid);
        } else {
          console.log("no user signed in");
          // No user is signed in
          // Handle this case based on your app's logic
        }
      });

      return () => unsubscribe(); // Unsubscribe from the listener when the component unmounts
    }, []);

    const handleIconClick = () => {
      const fileInput = document.getElementById("imageInput");
      fileInput.click();
    };

    const onImageChange = async (e) => {
      const file = e.target.files[0];
      setImageFile(file);

      try {
              const imageUrl = URL.createObjectURL(imageFile);
              setProfileImg(imageUrl);

        const avatarElement = document.querySelector(".avatar");
        avatarElement.src = imageUrl;
      } catch (error) {
        console.error("Error displaying image:", error);
      }
    };

  const onBioChange = (e) => {
    setBio(e.target.value);
  };
  console.log(user.uid)


  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload image to Firebase Storage
      setLoading(true);
      const storageRef = ref(
        storage,
        `profile_images/${user.uid}_${imageFile.name}`
      );

      await uploadBytes(storageRef, imageFile);


      // Get the URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);
      console.log(imageUrl);
      console.log(user.uid);

      // Store image URL and bio in Firestore against the user
      
      const userDocRef = doc(db, "users", userId); // Replace 'YOUR_COLLECTION' with your actual collection name
      await setDoc(userDocRef, { proImgLink: imageUrl,bio: bio }, { merge: true });

      // Redirect to a new page or perform any action after storing data
      setLoading(false);
      router.push("/Home");
    } catch (error) {
      setLoading(false);
      console.error("Error storing data:", error);
    }
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
              Profile info
            </Typography>
          </Box>
          <form onSubmit={onSubmit}>
            <Stack direction="column" gap={3} width={400} margin="0px auto">
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                style={{ display: "none" }}
                onChange={onImageChange}
              />
              <Stack justifyContent="center" direction="row" padding={2}>
                <IconButton
                  onClick={handleIconClick}
                  position="relative"
                  sx={{
                    "&:hover .avatar": { opacity: "0.3" },
                    "&:hover .avatar-overlay": { opacity: "1" },
                  }}
                >
                  <Avatar
                    src={imageFile ? URL.createObjectURL(imageFile) : ""}
                    sx={{ width: "200px", height: "200px", cursor: "pointer" }}
                    className="avatar"
                  />
                  {loading ? ( // Display loader conditionally based on loading state
                    <div
                      className="loader"
                    >
                      {/* Add your loader component or spinner here */}
                      <CircularProgress color="inherit" />
                    </div>
                  ) : (
                    <IconButton
                      sx={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        opacity: "0",
                      }}
                      className="avatar-overlay"
                    >
                      <CameraAlt sx={{ width: "30px", height: "40px" }} />
                      <Typography>Add Profile Photo</Typography>
                    </IconButton>
                  )}
                </IconButton>
              </Stack>
              {/* <input type="file" onChange={onImageChange} /> */}
              <TextField
                label="Bio"
                variant="standard"
                name="bio"
                value={bio}
                onChange={onBioChange}
              />
              <Button variant="outlined" type="submit">
                Next
              </Button>
            </Stack>
          </form>
        </Container>
      </Box>
    </Box>
  );
}

export default AddImage;
