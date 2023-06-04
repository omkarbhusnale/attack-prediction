import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import "../css/AuthDetails.css";

const AuthDetails = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Menu secondary className="auth-menu">
      {authUser ? (
        <Menu.Item as={Link} to="/severity" className="nav-link">
          Severity
        </Menu.Item>
      ) : (
        <Menu.Item as={Link} to="/signup" className="nav-link">
          Sign Up
        </Menu.Item>
      )}
      {authUser && (
        <Menu.Item position="right">
          <Button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default AuthDetails;
