export type User = {
  id: string;
  image: string;
  name: string;
};

export type Story = {
  id: string;
  image: string;
  updatedAt: string;
  user: User;
};

export type PreviewStory = {
  stories: Story[];
};
