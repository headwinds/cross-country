import React from 'react';
import { SubHeadline, Paragraph, List, ListItem, Column } from '../../..';
const TermsOfUse = ({ appName, companyName, hasTitle = true}) => {
  return (
    <Column>
       {hasTitle ? <SubHeadline>Terms of Use</SubHeadline> : null}
      <Paragraph>
        Welcome to {appName}! By accessing or using our app, you agree to be bound by these Terms of Use. Please read
        them carefully before using our app.
      </Paragraph>
      <List isOrdered>
        <ListItem>
          <Paragraph>
            Acceptance of Terms These Terms of Use constitute a legally binding agreement between you and {companyName}.
            By accessing or using our app, you agree to be bound by these Terms of Use, whether or not you have
            registered with us. If you do not agree to these Terms of Use, you may not access or use our app.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Changes to Terms We may modify these Terms of Use from time to time. Any changes will be effective
            immediately upon posting of the updated Terms of Use on our app. Your continued use of our app following the
            posting of the updated Terms of Use constitutes your acceptance of the changes.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Use of App You may use our app only for lawful purposes and in accordance with these Terms of Use. You agree
            not to use our app:
          </Paragraph>
        </ListItem>
      </List>
      <List>
        <ListItem>
          In any way that violates any applicable federal, provincial, local, or international law or regulation.
        </ListItem>
        <ListItem>
          To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail,"
          "chain letter," "spam," or any other similar solicitation.
        </ListItem>
        <ListItem>
          To impersonate or attempt to impersonate {companyName}, a {companyName} employee, another user, or any other
          person or entity.
        </ListItem>
        <ListItem>
          To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our app, or which, as
          determined by us, may harm {companyName} or users of our app or expose them to liability.
        </ListItem>
      </List>
      <List start="4" isOrdered>
        <ListItem>
          User Content Our app may allow you to submit, upload, publish or otherwise make available content, including
          but not limited to text, photographs, videos, and audio (collectively, "User Content"). You retain all rights
          in, and are solely responsible for, the User Content you make available on our app. You represent and warrant
          that:
        </ListItem>
      </List>
      <List>
        <ListItem>
          You own or control all rights in and to the User Content and have the right to grant the license granted
          herein.
        </ListItem>
        <ListItem>The User Content is accurate and not misleading.</ListItem>
        <ListItem>The User Content does not violate these Terms of Use or any applicable law.</ListItem>
      </List>
      <Paragraph>
        By making any User Content available on our app, you hereby grant to {companyName} a non-exclusive,
        transferable, sublicensable, worldwide, royalty-free license to use, copy, modify, create derivative works based
        on, distribute, publicly display, publicly perform, and otherwise exploit in any manner such User Content in all
        formats and distribution channels now known or hereafter devised (including in connection with the app and [Your
        Company Name]'s business and on third-party sites and services), without further notice to or consent from you,
        and without the requirement of payment to you or any other person or entity.
      </Paragraph>
      <List start="5" isOrdered>
        <ListItem>
          <Paragraph>
            Intellectual Property The content on our app, including without limitation, the text, graphics, photos,
            music, videos, software, scripts, and other material contained in the app, and the trademarks, service
            marks, and logos contained therein, are owned by or licensed to {companyName} and are subject to copyright
            and other intellectual property rights under Canadian and foreign laws and international conventions. You
            agree not to engage in the use, copying, or distribution of any of the content on our app other than
            expressly permitted herein.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Disclaimer of Warranties YOUR USE OF OUR APP IS AT YOUR SOLE RISK. OUR APP IS PROVIDED ON AN "AS IS" AND "AS
            AVAILABLE" BASIS. {companyName} MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLE
          </Paragraph>
        </ListItem>
      </List>
    </Column>
  );
};

export default TermsOfUse;
