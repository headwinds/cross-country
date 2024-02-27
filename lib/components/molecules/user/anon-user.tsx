"use client";
import React, { useState, useEffect } from "react";
import { Paragraph } from "../../";

/*
random user name based on seed
https://www.perplexity.ai/search/Is-there-a-Oos1GtsfT6.dc4ZQDt0JHg?s=c
*/

const AnonUser = () => {
  const [loginStatus, setLoginStatus] = useState(null);
  const [anonScoutUser, setAnonScoutUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (anonScoutUser) {
        return;
      }

      const localUsername = localStorage.getItem("crossCountryUsername");
      if (!localUsername) {
        const response = await fetch("http://localhost:5000/api/signup/anon");
        const json = await response.json();
        const user_account = json?.user_account;

        localStorage.setItem("crossCountryUsername", user_account.username);
        console.log("AnonUser user_account register: ", user_account);

        const newAnonScoutUser = {
          ...user_account,
        };

        setAnonScoutUser(newAnonScoutUser);
      } else {
        const response = await fetch("http://localhost:5000/api/login/anon", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: localUsername, password: "anon" }),
        });
        const json = await response.json();
        console.log("AnonUser user_account login: ", json);

        const user_account = json?.user_account ?? {};

        const newAnonScoutUser = {
          ...user_account,
        };

        setAnonScoutUser(newAnonScoutUser);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {anonScoutUser ? (
        <Paragraph>Anonymous User ID:{anonScoutUser?.id ?? ""}</Paragraph>
      ) : null}
    </>
  );
};

export default AnonUser;
