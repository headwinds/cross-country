import { useState } from 'react';
import TextArea from '../text-area';
import Paragraph from '../../paragraph';
import Column from '../../../column';
import Span from '../../span';
import Form from '../../../form';

function TextInputStory() {
  const [username, setUsernameText] = useState('');

  return (
    <Column customStyle={{ width: 400 }}>
      <Form>
        <TextArea onTextChange={setUsernameText} value={username} placeholder="Enter a story" />
      </Form>
      {username !== '' ? (
        <Paragraph>
          <Span customStyle={{ color: 'rebeccapurple', marginLeft: 16 }}>The username & password entered are</Span>{' '}
          <Span customStyle={{ fontWeight: 500, color: 'black' }}>{username}</Span>
        </Paragraph>
      ) : null}
    </Column>
  );
}

export default TextInputStory;
