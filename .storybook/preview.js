import React from 'react';
import { MemoryRouter } from 'react-router';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/style/GlobalStyle';

// addDecorator(styleFn=>{
//   <MemoryRouter
//     initialEntries={['/','posts']} >
//     {styleFn()}
//   </MemoryRouter>
// });

addDecorator(storyFn => <React.StrictMode><GlobalStyle/>{storyFn()}</React.StrictMode>);

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }