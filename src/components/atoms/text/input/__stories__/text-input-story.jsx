import { useState } from 'react';
import TextInput from '../text-input';
import Paragraph from '../../paragraph';
import Span from '../../span';
import Form from '../../../form';

function TextInputStory() {
  const [text, setText] = useState('');

  return (
    <Form>
      <TextInput onTextChange={setText} value={text} />
      {text !== '' ? (
        <Paragraph>
          <Span customStyle={{ color: 'rebeccapurple', marginLeft: 16 }}>You entered</Span>{' '}
          <Span customStyle={{ fontWeight: 500, color: 'black' }}>{text}</Span>
        </Paragraph>
      ) : null}
    </Form>
  );
}

export default TextInputStory;
