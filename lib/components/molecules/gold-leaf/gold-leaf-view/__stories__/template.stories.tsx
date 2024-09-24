import type { Meta, StoryObj } from "@storybook/react";
import GoldLeafView from "../gold-leaf-view";
import type { GoldLeafViewProps } from "../gold-leaf-view.types";

const meta: Meta<typeof GoldLeafView> = {
  component: GoldLeafView,
  title: "components/molecules/gold leaf/gold leaf view",
} satisfies Meta<typeof GoldLeafView>;

export default meta;
type Story = StoryObj<GoldLeafViewProps>;

export const ArticleLeaf: Story = {
  args: {
    variant: "article",
    goldLeafModel: {
      id: "gold-leaf-0-6",
      tags: [],
      photoUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg",
      photoLargeUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg",
      images: [
        {
          imageUrl:
            "https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg",
          defaultImageUrl: "img/loaders/defaultbackground.png",
          useText: false,
          text: "<img src='https://mir-s3-cdn-cf.behance.net/projects/404/825cab157958935.Y3JvcCwzMDAwLDIzNDYsMCwyNTk.jpg' style='float:left; margin-right:15px;' /><br />",
          large: true,
        },
      ],
      link: "https://www.behance.net/gallery/157958935/ATLA-Styles-Series",
      publishedDate: "",
      title: "ATLA Styles Series",
      feedLink: "",
      feedTitle: "",
      about: "",
      index: 0,
      text: "",
      useText: false,
      x: 0,
      y: 0,
      bViewed: false,
      bTrashed: false,
      origin: "porthole",
    },
  },
};

export const EmailLeaf: Story = {
  args: {
    variant: "email",
    goldLeafModel: {
      body: '<html><head><meta http-equiv=3D"content-type" content=3D"text/html; charset=3D=\r\nutf-8"></head><body dir=3D"auto"><div dir=3D"ltr"><a href=3D"https://x.com/g=\r\namesparable/status/1813190344672223439?s=3D43&amp;t=3DJosrImXLm25J_T3QQadmMw=\r\n"><table cellpadding=3D"0" cellspacing=3D"0" border=3D"0" style=3D"border:1p=\r\nx solid #ccd6dd; border-radius: 12px;" width=3D"500" bgcolor=3D"#ffffff"><tb=\r\nody><tr><td colspan=3D"3" style=3D"font-size: 0px; line-height: 0px;" height=\r\n=3D"12">&nbsp;</td></tr><tr><td width=3D"18" style=3D"font-size: 0px; line-h=\r\neight: 0px; min-width: 18px;">&nbsp;</td><td><table cellpadding=3D"0" cellsp=\r\nacing=3D"0" border=3D"0" width=3D"464" align=3D"left"><tbody><tr valign=3D"t=\r\nop"><td width=3D"48" valign=3D"top"><a href=3D"https://x.com/gamesparable?s=3D=\r\n43"><img src=3D"https://pbs.twimg.com/profile_images/1685895549755813888/6Qf=\r\nfQpgw_normal.jpg" style=3D"border-radius: 50%; padding: 0px;" height=3D"48" w=\r\nidth=3D"48" data-unique-identifier=3D""></a></td><td width=3D"8" style=3D"fo=\r\nnt-size: 0px; line-height: 0px; min-width:8px;"><img src=3D"https://ea.twimg=\r\n.com/email/self_serve/media/spacer.png" width=3D"8" data-unique-identifier=3D=\r\n""></td><td valign=3D"middle" width=3D"388" style=3D"min-width: 388px;"><tab=\r\nle cellpadding=3D"0" cellspacing=3D"0" border=3D"0" align=3D"left" width=3D"=\r\n388"><tbody><tr><td align=3D"left" width=3D"388"><b><a href=3D"https://x.com=\r\n/gamesparable?s=3D43" style=3D"font-family: Helvetica, Arial, san-serif; fon=\r\nt-size: 14px; line-height: 18px; color: #292c2f; text-decoration: none;">Par=\r\nable Games - ION Heart Live Now on @Backerkit</a></b></td></tr><tr><td align=\r\n=3D"left"><a href=3D"https://x.com/gamesparable?s=3D43" style=3D"font-family=\r\n: Helvetica, Arial, san-serif; font-size: 14px; line-height: 18px; text-deco=\r\nration: none; color: #7e8c98;">=E2=81=A6=E2=80=AA@GamesParable=E2=80=AC=E2=81=\r\n=A9</a></td></tr></tbody></table></td><td valign=3D"top" width=3D"20"><img s=\r\nrc=3D"https://ea.twimg.com/email/self_serve/media/logo_twitter-1497383721365=\r\n.png" height=3D"20" width=3D"24" data-unique-identifier=3D""></td></tr><tr><=\r\ntd height=3D"9" colspan=3D"4" style=3D"font-size: 0px; line-height:0px;"><im=\r\ng src=3D"https://ea.twimg.com/self_serve/media/spacer_464x1-1582829598167.pn=\r\ng" width=3D"464" height=3D"1" data-unique-identifier=3D""></td></tr><tr><td c=\r\nolspan=3D"4" style=3D"font-family: Helvetica, Arial, san-serif;color: #292c2=\r\nf; font-size: 18px; line-height: 24px; text-decoration: none;">ION Heart. Ex=\r\nplore a post-war galaxy with your mech best friend. =F0=9F=9A=80 Discover ne=\r\nw planets, communities and cultures in this lo-fi solo mech <a href=3D"https=\r\n://x.com/search?q=3D%23TTRPG&amp;src=3Dhash">#TTRPG</a>. =F0=9F=A4=96</td></=\r\ntr><tr><td height=3D"3" colspan=3D"4" style=3D"font-size: 0px; line-height:0=\r\npx;">&nbsp;</td></tr><tr><td colspan=3D"4"><a href=3D"https://x.com/gamespar=\r\nable/status/1813190344672223439?s=3D43&amp;t=3DJosrImXLm25J_T3QQadmMw" style=\r\n=3D"font-family: Helvetica, Arial, san-serif;color: #667785; font-size: 14px=\r\n; line-height: 18px; text-decoration:none;">2024-07-16, 8:34=E2=80=AFAM</a><=\r\n/td></tr></tbody></table></td><td width=3D"18" style=3D"font-size: 0px; line=\r\n-height: 0px; min-width: 18px;">&nbsp;</td></tr><tr><td colspan=3D"3" style=3D=\r\n"font-size: 0px; line-height: 0px;" height=3D"12">&nbsp;</td></tr></tbody></=\r\ntable></a><br></div><div dir=3D"ltr"></div></body></html>=\r\n',
      date: "Sun, 11 Aug 2024 11:34:01 -0400",
      email_id: "19142134569fe5ed",
      from: "Brandon Flowers <brandonflowers@gmail.com>",
      subject: "Post by Parable Games - ION Heart Live Now on @Backerkit on X",
      to: "brandonflowers@gmail.com",
    },
  },
};
