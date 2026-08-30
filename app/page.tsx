import HomeClient from '@/components/HomeClient';
import { CURRICULUM } from '@/data/curriculum';

export default function HomePage() {
  return <HomeClient curriculum={CURRICULUM} grade={10} />;
}
