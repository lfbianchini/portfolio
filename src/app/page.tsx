import { ArticlesCardsGrid } from './components/card-grid';
import { ExperienceCardGrid } from './components/experience-grid';
import { HeroText } from './components/hero-text';
import { HeroTitle } from './components/hero-title';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <HeroTitle />
      <HeroText />
      <ArticlesCardsGrid />
      <ExperienceCardGrid />
    </div>
  );
}