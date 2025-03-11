import { Card } from '@/components';
import CardIm from '../components/Card/card.png';
import Button from '@/components/Button/Button';
import LikeIcon from '../components/CardCategory/like.svg';

export default function Home() {
  const amountCards = [1, 2, 3];
  return (
    <>
      {amountCards.map((card) => (
        <Card image={CardIm} key={card}></Card>
      ))}
      {/* <Card image={CardIm}>Card text</Card> */}
      <Button appearance='ghost'>
        <LikeIcon />
      </Button>
    </>
  );
}
