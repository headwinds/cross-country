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
