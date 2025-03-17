import { API } from '@/app/api';
import { PostModel } from '@/interfaces/post.interface';
import axios from 'axios';

export async function patchLike(likeStatus: boolean) {
  const { data } = await axios.patch(API.post.byAlias, { likeStatus });
  return data;
}

export async function getPost() {
  const { data } = await axios.get(API.post.byAlias + '/posts');

  return { props: data.slice(0, 10) };
}
