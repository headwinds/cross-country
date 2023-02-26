module.exports = (componentUpperCaseName, componentLowerCaseName, atomicTypeName) => ({
  content: `import { Meta, Canvas, Story, Subtitle } from '@storybook/addon-docs';
import { Paragraph, SubHeadline } from '../../../';
import ${componentUpperCaseName}Story from './${componentLowerCaseName}-story';

<Meta title="menu/${atomicTypeName}/${componentLowerCaseName.split('-').join(' ')}" />

<Subtitle>subtitle here</Subtitle>

<Canvas>
  <Story name="${componentLowerCaseName.split('-').join(' ')}">
    <${componentUpperCaseName}Story />
  </Story>
</Canvas>
`,
  extension: `.stories.mdx`,
  type: 'story',
});
