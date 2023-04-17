import React from 'react';
import { SubHeadline, Paragraph, List, ListItem, Column } from '../../../';
const PrivacyPolicy = ({ companyName, contactEmail, hasTitle = true }) => {
  return (
    <Column>
      {hasTitle ? <SubHeadline>Privacy Policy</SubHeadline> : null}
      <Paragraph>
        This Privacy Policy explains how {companyName} collects, uses, and discloses personal information in connection
        with our app. By accessing or using our app, you consent to the collection, use, and disclosure of your personal
        information as described in this Privacy Policy.
      </Paragraph>
      <List isOrdered>
        <ListItem>
          Personal Information "Personal Information" means any information about an identifiable individual. We may
          collect and use the following Personal Information in connection with our app:
        </ListItem>
      </List>
      <List>
        <ListItem>
          Contact Information, such as your name and email address, when you contact us or sign up for our newsletter.
        </ListItem>
        <ListItem>
          Device Information, such as your IP address and other information about your device, when you use our app.
        </ListItem>
        <ListItem>Usage Information, such as information about how you use our app, when you use our app.</ListItem>
        <ListItem>
          Other Information, such as any other information you provide to us through our app or otherwise.
        </ListItem>
      </List>
      <List start="2" isOrdered>
        <ListItem>
          Collection and Use of Personal Information We collect and use Personal Information for the following purposes:
        </ListItem>
      </List>
      <List>
        <ListItem>To provide and maintain our app.</ListItem>
        <ListItem>To communicate with you about our app, including responding to your inquiries.</ListItem>
        <ListItem>To improve our app and develop new features.</ListItem>
        <ListItem>To monitor usage of our app and analyze trends.</ListItem>
        <ListItem>To comply with applicable laws and regulations.</ListItem>
      </List>
      <List start="3" isOrdered>
        <ListItem>Disclosure of Personal Information We may disclose Personal Information as follows:</ListItem>
      </List>
      <List>
        <ListItem>To our service providers, who provide services such as website hosting and email services.</ListItem>
        <ListItem>
          To comply with applicable laws and regulations, or to respond to a subpoena, court order, or other lawful
          request for information.
        </ListItem>
        <ListItem>
          In connection with a sale, merger, or other transfer of all or substantially all of the assets of [Your
          Company Name], provided that the acquiring party agrees to protect the Personal Information in accordance with
          this Privacy Policy.
        </ListItem>
        <ListItem>With your consent.</ListItem>
      </List>
      <List start="4" isOrdered>
        <ListItem>
          <Paragraph>
            Security We take reasonable measures to protect Personal Information from loss, theft, unauthorized access,
            and unauthorized disclosure. However, no data transmission over the Internet or storage of data can be
            guaranteed to be 100% secure. Therefore, we cannot guarantee the security of any information you transmit to
            us or store on our app.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Retention of Personal Information We retain Personal Information for as long as necessary to fulfill the
            purposes for which it was collected, or as required or permitted by law.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Access and Correction You may request access to or correction of your Personal Information that we hold by
            contacting us using the information provided below.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Children Our app is not intended for children under the age of 13. We do not knowingly collect Personal
            Information from children under the age of 13. If you are under the age of 13, please do not use our app or
            provide any Personal Information to us.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Changes to this Privacy Policy We may update this Privacy Policy from time to time. Any changes will be
            effective immediately upon posting of the updated Privacy Policy on our app. Your continued use of our app
            following the posting of the updated Privacy Policy constitutes your acceptance of the changes.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            Contact Us If you have any questions about this Privacy Policy or our practices, please contact us at{' '}
            {contactEmail}.
          </Paragraph>
        </ListItem>
      </List>
      <hr />
      <Paragraph>
        Please note that this is just a general template, and you should consult with a lawyer to ensure that your
        Privacy Policy is compliant with all applicable laws and regulations.
      </Paragraph>
    </Column>
  );
};

export default PrivacyPolicy;
