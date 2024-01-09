import React, { useContext ,useState} from "react";
import { Box, Typography, IconButton, Avatar, Stack } from "@mui/material";
import {
  ArrowBack, CameraAlt,
} from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { useComponent } from "@/Context/context";
import { RegUserInfo } from "@/Context/RegUserInfo";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  setDoc,
  updateDoc,
  doc,
  db,
} from "../Firebase/FirebaseConfig";


function ProfileSetting() {
  const {user}=useContext(RegUserInfo) 
  const { toggleComponent } = useComponent();

  const [imageFile, setImageFile] = useState(null);
  const [profileImg, setProfileImg] = useState(""); 
  
  const [editingName, setEditingName] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || "");
  const [editedAbout, setEditedAbout] = useState(user?.bio || "");




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

              // Upload image to Firebase Storage
              const storageRef = ref(
                storage,
                `profile_images/${user.uid}_${imageFile.name}`
              );

              await uploadBytes(storageRef, imageFile);


              // Get the URL of the uploaded image
              const downloadUrl = await getDownloadURL(storageRef);
              console.log(imageUrl);
              console.log(user.uid);

              // Store image URL and bio in Firestore against the user
              
              const userDocRef = doc(db, "users", user.uid); // Replace 'YOUR_COLLECTION' with your actual collection name
              await setDoc(userDocRef, { proImgLink: downloadUrl }, { merge: true });

            } catch (error) {
              console.error("Error displaying image:", error);
            }
          }

            const handleSave = async () => {
              if (user && user.userId) {
                const docRef = doc(db, "users", user.userId);

                try {
                  await updateDoc(docRef, {
                    name: editedName,
                    bio: editedAbout,
                  });
                  setEditingName(false);
                  setEditingAbout(false);
                } catch (error) {
                  console.error("Error updating document:", error);
                }
              }
            };

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#008069",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "102px 0px 10px 10px",
          height: "100%",
          // overflow:'hidden'
        }}
      >
        <IconButton color="inherit">
          <ArrowBack onClick={() => toggleComponent("sidebar")} />
        </IconButton>
        <Typography fontSize={20}>Profile</Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "#F0F2F5",
          height: "100%",
          width: "100%",
          height: "766px",

          // flex:'1'
        }}
      >
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
              src={profileImg || user?.proImgLink || ""}
              sx={{ width: "200px", height: "200px", cursor: "pointer" }}
              className="avatar"
            />
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
          </IconButton>
        </Stack>
        <Box bgcolor="white" padding="15px 40px">
          <Typography color="#008069" fontSize="14px" mb={1}>
            Your Name
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* {editingName ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  borderBottom: "0.5px solid #333",
                  width: "100%",
                }}
              />
            ) : (
              <>
                <Typography
                  style={{ color: "#606466", fontSize: "16px" }}
                  onClick={updateName}
                >
                  {user?.name}
                </Typography>
                <IconButton>
                  <EditIcon style={{ color: "#8696A0" }} />
                </IconButton>
              </>
            )} */}
            {editingName ? (
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "2.5px solid #667781",
                    width: "100%",
                    color: "#3b4a54",
                    fontSize: "14px",
                  }}
                />
                <IconButton onClick={handleSave}>
                  <DoneIcon color="#667781" />
                </IconButton>
              </>
            ) : (
              <>
                <Typography color="#606466" fontSize="16px">
                  {user?.name}
                </Typography>
                <IconButton>
                  <EditIcon
                    color="#8696A0"
                    onClick={() => setEditingName(true)}
                  />
                </IconButton>
              </>
            )}
          </Stack>
        </Box>
        <Box padding="35px 40px">
          <Typography color="#667781" fontSize="14px">
            This is not your username or pin .This name will be visible to your
            WhatsApp contacts.
          </Typography>
        </Box>
        <Box bgcolor="white" padding="15px 40px">
          <Typography color="#008069" fontSize="14px" mb={1}>
            About
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* <Typography color="#606466" fontSize="16px">
              {user?.bio}
            </Typography>
            <IconButton>
              <EditIcon color="#8696A0" />
            </IconButton> */}
            {editingAbout ? (
              <>
                <input
                  type="text"
                  value={editedAbout}
                  onChange={(e) => setEditedAbout(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "2.5px solid #667781",
                    width: "100%",
                    color: "#3b4a54",
                    fontSize: "14px",
                  }}
                />
                <IconButton onClick={handleSave}>
                  <DoneIcon color="#667781" />
                </IconButton>
              </>
            ) : (
              <>
                <Typography color="#606466" fontSize="16px">
                  {user?.bio}
                </Typography>
                <IconButton>
                  <EditIcon
                    color="#8696A0"
                    onClick={() => setEditingAbout(true)}
                  />
                </IconButton>
              </>
            )}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileSetting;
