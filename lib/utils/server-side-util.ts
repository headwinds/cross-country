export const getWindow = () => {
  if (typeof window === "undefined") {
    /* we're on the server */
    return null;
  }
  return window ? window : null;
};

export const getNavigator = () => {
  if (typeof navigator === "undefined") {
    /* we're on the server */
    return null;
  }
  return navigator ? navigator : null;
};

export const getDocument = () => {
  if (typeof document === "undefined") {
    /* we're on the server */
    return null;
  }
  return document ? document : null;
};

export const domain = document.domain.includes("localhost")
  ? "http://localhost:5000"
  : "https://scout.vercel.app";

type ListicleItemInputType = {
  user_account_id: string;
  anon_user_account_id: string;
  title: string;
};

export const getUserOrAnonUserRoute = ({
  user_account_id,
  anon_user_account_id,
  title,
}: ListicleItemInputType) => {
  const url = user_account_id
    ? `${domain}/api/listicle/user/${user_account_id}/${title}`
    : `${domain}/api/listicle/anon/${anon_user_account_id}/${title}`;

  console.log("getUserOrAnonUserRoute", url);

  return url;
};
