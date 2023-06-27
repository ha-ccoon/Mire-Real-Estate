import { Meta, Story } from '@storybook/react'
import Thumbnail, { PropertyProps } from './Thumbnail'

export default {
  title: 'Components/Thumbnail',
  component: Thumbnail,
} as Meta

const Template: Story<{ properties: PropertyProps[] }> = (args) => {
  ;<Thumbnail {...args} />
}

export const Default = Template.bind({})
Default.args = {
  properties: [
    {
      id: 1,
      image: 'https://example.com/image1.jpg',
      name: 'Property 1',
      price: 100000,
      slug: 'property-1',
    },
    {
      id: 2,
      image: 'https://example.com/image2.jpg',
      name: 'Property 2',
      price: 200000,
      slug: 'property-2',
    },
  ],
}
