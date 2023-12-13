import * as React from 'react';
import { useEffect, useState } from 'react';
import { postLoginUser } from '../../../../services/login-service';


// https://dolby.io/blog/getting-started-with-oauth2-for-media-processing-with-javascript/
// Helper function to store OAuth 2 Cookie
function setCookie(name, value) {
  let maxAge = `;max-age=${12 * 60 * 60}`; // Expire cookie at 12 hours
  document.cookie = name + '=' + value + maxAge + ';path=/' + ';SameSite=Lax' + ';Secure';
}

// Helper function to get cookie value from key
function getCookie(name) {
  let value = '; ' + document.cookie;
  let parts = value.split(`; ${name}=`);
  if (parts.length == 2) return parts.pop().split(';').shift();
}

const useHeadwindsHome = () => {
  const [isAuthencated, setIsAuthencated] = React.useState(false);
  const [error, setError] = React.useState(null);

  const url = 'http://localhost:5000';

  useEffect(() => {
    const fetchData = async () => {
      // if there is, call scout and see if the user is authenticated
      // is there a token in a secure cookie?
      // get token token from secure cookie
      const scoutAuthToken = getCookie('scoutAuthToken');
      if (scoutAuthToken) {
        try {
          // call scout and see if the user is authenticated
          const user = {};
          const response = await postLoginUser(user);
        } catch (error) {
          // if not, redirect to login page
          setIsAuthencated(false);
        }
      }
    };

    fetchData();

    // call scout and see if the user is authenticated
  }, []);

  return { isAuthencated, error };
};
