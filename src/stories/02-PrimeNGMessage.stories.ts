/*
import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  text as knobText,
  number,
  boolean,
  array,
  select,
  radios,
  color,
  date,
  button,
} from '@storybook/addon-knobs';

// import {UIMessage} from 'primeng/message/message';
import {UIMessage} from 'node_modules/primeng/primeng';

export default {
  title: 'PrimeNGMessage',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
  },
};

export const UIMessage1 = () => {
  const severity = number('severity', 3);
  // tslint:disable-next-line:no-shadowed-variable
  const text = knobText('text', 'PrimeNG Rocks');

  return {
    moduleMetadata: {
      entryComponents: [UIMessage],
      declarations: [UIMessage],
    },
    template: `
        <p-message [severity]="severity" [text]="text"></p-message>
      `,
    props: {
      severity,
      text
    },
  };
};

UIMessage1.story = {
  name: 'ProgressIndicator',
};
*/
