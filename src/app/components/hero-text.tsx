import { Button, Container, Text, Title } from '@mantine/core';
import { Dots } from './dots';
import classes from './hero-text.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
            <Text className={classes.title} variant="gradient" gradient={{ from: '#A594F9', to: '#6247AA' }}>
            Who am i?
          </Text>
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            I'm a second year Computer Science student at the {' ' }
            <Text component="span" variant="gradient" gradient={{ from: '#A594F9', to: '#6247AA' }} inherit>
            University of San Francisco
            </Text>
            , who loves all things tech. 
            Currently, I'm focused on {' '}
            <Text component="span" variant="gradient" gradient={{ from: '#A594F9', to: '#6247AA' }} inherit>
                full stack web development
            </Text>
            , with a keen interest in backend technologies and cloud computing.
            My most recent project involved creating a full stack web application called "algowar", which is a platform for users to
            engage in in solo or multiplayer coding challenges, with a focus on gamification and user engagement (learn more below!!).
            In addition to my studies and projects, I {' '}
            <Text component="span" variant="gradient" gradient={{ from: '#A594F9', to: '#6247AA' }} inherit>
                interned at Lasaria
            </Text>
            , from September 2024 to January 2025,
            where I contributed to the development of a new and upcoming music streaming platform. I {' '} 
            <Text component="span" variant="gradient" gradient={{ from: '#A594F9', to: '#6247AA' }} inherit>
                plan to intern at Curriculum Associates
            </Text>
            {' '} as a Software Engineer Intern from June 2025 to August 2025.

          </Text>
        </Container>

        {/* <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Book a demo
          </Button>
          <Button className={classes.control} size="lg">
            Purchase a license
          </Button>
        </div> */}
      </div>
    </Container>
  );
}