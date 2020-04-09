import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  radios,
  color,
  date,
  button,
} from '@storybook/addon-knobs';

// It's very annoying that I have to use the related path on the component file.
// import { ProgressIndicatorModule, ProgressIndicatorComponent } from '@ea/ea-ui';
import { MessageComponent } from '../../projects/ea-ui/src/lib/message/message.component';

import { SimpleKnobsComponent } from './knobs.component';
import { AllKnobsComponent } from './all-knobs.component';


export default {
  title: 'ProgressIndicator',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      disableDebounce: true,
    },
  },
};

export const ProgressIndicator = () => {
  const currentStep = number('currentStep', 3);
  const numberOfSteps = number('numberOfSteps', 5);

  return {
    moduleMetadata: {
      // imports: [ProgressIndicatorModule],
      entryComponents: [MessageComponent],
      declarations: [MessageComponent],
    },
    template: `
      <eui-progress-indicator
        [currentStep]="currentStep"
        [numberOfSteps]="numberOfSteps">
      </eui-progress-indicator>
      `,
    props: {
      currentStep,
      numberOfSteps
    },
  };
};

ProgressIndicator.story = {
  name: 'ProgressIndicator',
};
