import { AspectRatio, Card, Container, Image, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './card-grid.module.css';

const mockdata = [
  {
    title: 'I designed and implemented scalable backend architecture using Express.js and AWS services like S3, DynamoDB, Cognito, Lambda, and Elasticache, to allow for metadata-rich music uploads, streaming, stream count processing, and playlist management. I built frontend components and integrated them with the backend using React Native and Zustand.',
    image:
      'images/lasaria.jpg',
    date: 'September 2024 - January 2025',
  },
];

export function ExperienceCardGrid() {
    const cards = mockdata.map((article) => (
      <Card key={article.title} p="sm" radius="sm" component="a" href="#" className={classes.card}>
        <AspectRatio ratio={16 / 9}>
          <Image src={article.image} />
        </AspectRatio>
        <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="xs">
          {article.date}
        </Text>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Card>
    ));
  
    return (
      <Container className={classes.wrapper} mt={"xl"} size={1700}>
            <Text className={classes.heading} variant="gradient" mb={'xl'} gradient={{ from: '#A594F9', to: '#6247AA' }}>
            Experience
          </Text>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>{cards}</SimpleGrid>
      </Container>
    );
  }
  