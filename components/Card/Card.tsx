import { JSX } from 'react';
import { CardProps } from './Card.props';
import Image from 'next/image';
import CardCategory from '../CardCategory/CardCategory';
import styles from './Card.module.css';
import P from '../P/P';
import Htag from '../Htag/Htag';
import ReadingTime from '../ReadingTime/ReadingTime';
import { capitalizeFirstLetter } from '@/helpers/helpers';

export const Card = (props: CardProps): JSX.Element => {
  const { image, post } = props;
  return (
    <section className={styles.card}>
      <Image className={styles.image} src={image} alt='' />
      <CardCategory tag='Front-end' date='1 месяц назад' rating={4} />
      <Htag tag='h3'>{capitalizeFirstLetter(post.title)}</Htag>
      <P>{capitalizeFirstLetter(post.body)}</P>
      <ReadingTime time='5 минут' />
    </section>
  );
};
