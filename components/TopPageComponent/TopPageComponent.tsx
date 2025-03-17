import { PostModel } from '@/interfaces/post.interface';
import { Card } from '../Card/Card';
import CardIm from '../Card/card.png';
import { JSX } from 'react';

export function TopPageComponent({
  posts,
}: {
  posts: PostModel[];
}): JSX.Element {
  return (
    <>
      {posts.map((post) => (
        <Card image={CardIm} key={post.id} post={post}></Card>
      ))}
    </>
  );
}
