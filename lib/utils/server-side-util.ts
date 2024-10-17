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

const setDomain = (
  localhost = "http://localhost:5000",
  hosted = "https://scout.vercel.app",
  isHosted
) => {
  const document = getDocument();

  const isRunningOnWeb =
    typeof window !== "undefined" && typeof document !== "undefined";

  if (isRunningOnWeb) {
    if (document) {
      return document?.domain.includes("localhost") ? localhost : hosted;
    }
    console.log("React native - see getDocument on server-side-util.ts");
  }

  return isHosted ? hosted : localhost;
};

// needs to more more dynamic
export const domain = setDomain(
  "http://localhost:5000",
  "https://scout.vercel.app",
  false
);

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
