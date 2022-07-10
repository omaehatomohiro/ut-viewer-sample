import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import { TopPage } from "./TopPage";


export default {
  title: 'pages/TopPage',
  component: TopPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof TopPage>

export const Primary: ComponentStory<typeof TopPage> = () => <TopPage/>;