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
import { ProgressIndicatorComponent } from '../../projects/ea-ui/src/lib/progress-indicator/progress-indicator.component';

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
      entryComponents: [ProgressIndicatorComponent],
      declarations: [ProgressIndicatorComponent],
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

export const Simple = () => {
  const name = text('name', 'John Doe');
  const age = number('age', 0);
  const phoneNumber = text('phoneNumber', '555-55-55');

  return {
    moduleMetadata: {
      entryComponents: [SimpleKnobsComponent],
      declarations: [SimpleKnobsComponent],
    },
    template: `
        <h1> This is a template </h1>
        <storybook-simple-knobs-component
          [age]="age"
          [phoneNumber]="phoneNumber"
          [name]="name"
        >
        </storybook-simple-knobs-component>
      `,
    props: {
      name,
      age,
      phoneNumber,
    },
  };
};

Simple.story = {
  name: 'Simple',
};

export const AllKnobs = () => {
  const name = text('name', 'Jane');
  const stock = number('stock', 20, {
    range: true,
    min: 0,
    max: 30,
    step: 5,
  });
  const fruits = {
    Apple: 'apples',
    Banana: 'bananas',
    Cherry: 'cherries',
  };
  const fruit = select('fruit', fruits, 'apples');
  const otherFruits = {
    Kiwi: 'kiwi',
    Guava: 'guava',
    Watermelon: 'watermelon',
  };
  const otherFruit = radios('Other Fruit', otherFruits, 'watermelon');
  const price = number('price', 2.25);

  const border = color('border', 'deeppink');
  const today = date('today', new Date('Jan 20 2017'));
  const items = array('items', ['Laptop', 'Book', 'Whiskey']);
  const nice = boolean('nice', true);
  button('Arbitrary action', action('You clicked it!'));

  return {
    component: AllKnobsComponent,
    props: {
      name,
      stock,
      fruit,
      otherFruit,
      price,
      border,
      today,
      items,
      nice,
    },
  };
};

AllKnobs.story = {
  name: 'All knobs',
};
