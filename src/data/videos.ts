export type Video = {
  id: string;
  title: string;
  channel: string;
  thumb: string;
  href: string;
  duration?: string;
  badge?: string;
};

export const videos: Video[] = [
  {
    id: 'v1',
    title: "Mike Tyson — Greatest Knockouts Compilation",
    channel: 'Boxing Legends',
    thumb: 'https://i.ytimg.com/vi/3UqQ6QbQFzM/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=3UqQ6QbQFzM',
    duration: '12:34'
  },
  {
    id: 'v2',
    title: 'Canelo Alvarez — Best Moments',
    channel: 'DAZN Boxing',
    thumb: 'https://i.ytimg.com/vi/1QnQK6FzQF8/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=1QnQK6FzQF8',
    duration: '9:48'
  }
];
