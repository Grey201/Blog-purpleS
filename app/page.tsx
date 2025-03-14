import { Card } from '@/components';
import CardIm from '../components/Card/card.png';
import Button from '@/components/Button/Button';
import LikeIcon from '../components/CardCategory/like.svg';
import { get } from 'http';
import { getPost } from '@/api/posts';
import { TopPageComponent } from '@/components/TopPageComponent/TopPageComponent';

export default async function Home() {
  const posts = await getPost();

  return (
    //   <Button appearance='ghost'>
    //     <LikeIcon />
    //   </Button>
    //  </>
    <TopPageComponent posts={posts.props} />
  );
}
