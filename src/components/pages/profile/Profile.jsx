import React, { useState, useEffect } from "react";
import { storage } from "../../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Avatar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

export const Profile = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    surname: "",
    number: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {
          name: "John",
          email: "john@example.com",
          surname: "Doe",
          number: "1234567890",
        };

        setUserData(data);
      } catch (error) {
        setError("Error fetching user data: " + error.message);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      uploadImage(e.target.files[0]);
    }
  };

  const uploadImage = (file) => {
    setError(null);
    const imageRef = ref(storage, "path/to/your/image.jpg");
    uploadBytes(imageRef, file)
      .then(() => {
        getDownloadURL(imageRef)
          .then((downloadUrl) => {
            setUrl(downloadUrl);
          })
          .catch((error) => {
            setError("Error getting the image URL: " + error.message);
          });
      })
      .catch((error) => {
        setError("Error uploading the image: " + error.message);
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "1rem",
        width: "50%",
      }}
    >
      <h1 style={{ marginBottom: "50px" }}>Профиль</h1>
      {error && <p>{error}</p>}
      <div
        style={{
          marginLeft: "8rem",
        }}
      >
        <label htmlFor="file-input">
          <Avatar
            src={url}
            sx={{ width: 100, height: 100, cursor: "pointer" }}
          />
        </label>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
      <StyledFormContainer>
        <div className="inputs">
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <label htmlFor="input-name">Name</label>
              {isEditing ? (
                <Input
                  id="input-name"
                  type="text"
                  placeholder="Name"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      name: e.target.value,
                    })
                  }
                />
              ) : (
                <div>{userData.name}</div>
              )}

              <label htmlFor="input-email">E-mail</label>
              {isEditing ? (
                <Input
                  type="email"
                  id="input-email"
                  placeholder="E-mail"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      email: e.target.value,
                    })
                  }
                />
              ) : (
                <div>{userData.email}</div>
              )}
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <label htmlFor="input-last">Surname</label>
              {isEditing ? (
                <Input
                  id="input-last"
                  type="text"
                  placeholder="Surname"
                  value={userData.surname}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      surname: e.target.value,
                    })
                  }
                />
              ) : (
                <div>{userData.surname}</div>
              )}

              <label htmlFor="input-number">Number</label>
              {isEditing ? (
                <Input
                  id="input-number"
                  type="number"
                  placeholder="Number"
                  value={userData.number}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      number: e.target.value,
                    })
                  }
                />
              ) : (
                <div>{userData.number}</div>
              )}
            </div>

            <div style={{ display: "flex", gap: "30px" }}>
              {!isEditing ? (
                <>
                  <NavButton>
                    <Button onClick={handleEditClick}>Редактировать</Button>
                  </NavButton>
                  <NavButton>
                    <Button>Назад</Button>
                  </NavButton>
                </>
              ) : (
                <>
                  <Button onClick={handleSaveClick}>Сохранить</Button>
                  <Button onClick={handleCancelClick}>Отменить</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </StyledFormContainer>
    </div>
  );
};

const StyledFormContainer = styled("form")({
  marginTop: "30px",
  display: "flex",
  alignItems: "center",
  gap: "60px",
  marginLeft: "3rem",
  ".inputs": {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    label: {
      fontWeight: "500",
    },
  },
});

const Input = styled("input")(() => ({
  padding: "6px 0 6px 16px",
  border: "1px solid #AFAFAF",
  borderRadius: "8px",
  width: "15rem",
  "&::placeholder": {
    color: "#919191",
  },
  "&:hover": {
    border: "1px solid #4366b0",
  },
}));

const Button = styled("button")(() => ({
  display: "flex",
  width: "14.725rem",
  height: "1rem",
  padding: "0.6rem 0 1.6rem 2.3rem ",
  cursor: "pointer",
  marginTop: "3rem",
  border: "none",
  backgroundColor: "#FFCC29",
  borderRadius: "0.6rem",
  textAlign: "center",
  fontWeight: "600",
  fontSize: "1rem",
  color: "#343434",
  "&:hover": {
    backgroundColor: "#ffda61",
    color: "#000000",
  },
}));
const NavButton = styled(NavLink)(() => ({
  textDecoration: "none",
}));
