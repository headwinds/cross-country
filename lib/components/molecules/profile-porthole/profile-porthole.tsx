import { SubHeadline, Column, Bolt, Row, Image } from '../../';
import { ProfilePortholeProps } from './profile-porthole.types';
import brandon from './brandon_square.png'; // should host or possible stuff in DB!

import styles from './profile-porthole.module.css';

import * as React from 'react';

const ProfilePorthole = ({ foo }: ProfilePortholeProps) => {
  return (
    <Column dataTestId="profile-porthole" customClass={styles.ProfilePorthole}>
      <Row>
        <Column customStyle={{ padding: 0 }}>
          <Row>
            <Image
              a11y="brandon flowers"
              url={brandon}
              width={80}
              height={80}
              customStyle={{ borderRadius: '50%', margin: 8 }}
            />
            <SubHeadline size="medium">Brandon Flowers</SubHeadline>
            <Bolt />
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default ProfilePorthole;
