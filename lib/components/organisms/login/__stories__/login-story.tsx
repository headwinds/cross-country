import React, { useState, useEffect } from "react";
import { Paragraph, Link, Hilight, SubHeadline, Column } from "../../../";
import Login from "../login";
import type { UserModelType } from "../../../../models/UserModel";

const LoginStory = ({ isAnimated, hasBackground }) => {
  const [user, setUser] = useState(null);

  const onChange = (user: UserModelType) => {
    // handle the authenitcated user event here and
    // present a profile or switch routes; whatever you want to do
    if (user) {
      setUser(user);
    }
  };

  return user ? (
    <Column>
      <Paragraph>hello {user.username}</Paragraph>
    </Column>
  ) : (
    <Login
      isAnimated={isAnimated}
      hasBackground={hasBackground}
      onChange={onChange}
    />
  );
};

export default LoginStory;
