module.exports = (componentUpperCaseName, atomicTypeName) => ({
  content: `import { Meta, Canvas, Story, Subtitle } from '@storybook/addon-docs';
import { Paragraph, SubHeadline } from '../../../';
import ${componentUpperCaseName}Story from './${componentUpperCaseName.toLowerCase()}-story';

<Meta title="menu/${atomicTypeName}/${componentUpperCaseName.toLowerCase()}" />

<Subtitle>subtitle here</Subtitle>

<Canvas>
  <Story name="${componentUpperCaseName.toLowerCase()}">
    <${componentUpperCaseName}Story />
  </Story>
</Canvas>
`,
  extension: `.stories.mdx`,
});
