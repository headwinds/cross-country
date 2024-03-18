import React, { useEffect } from "react";
import { Card, Column } from "../../";

const defaultAdSlot = "1723898137";
const defaultClientId = "ca-pub-1998967772089459";

const AdCard = ({ dataAdSlot, clientId }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Column>
      hello
      <amp-ad
        width="100vw"
        height="320"
        type="adsense"
        data-ad-client="ca-pub-1998967772089459"
        data-ad-slot="1723898137"
        data-auto-format="rspv"
        data-full-width=""
      >
        <div overflow=""></div>
      </amp-ad>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId || defaultClientId}
        data-ad-slot={dataAdSlot || defaultAdSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </Column>
  );
};

export default AdCard;
