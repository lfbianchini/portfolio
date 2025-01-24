import { AspectRatio, Card, Container, Image, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './card-grid.module.css';

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summeTop 10 places to visit in Norway this summerTop 10 places to visit in Norway this summerTop 10 places to visit in Norway this summerr',
    image:
      'gifs/project-1.gif',
    date: 'August 18, 2022',
  },
  {
    title: 'This Java application analyzes professor ratings using web scraping and natural language processing techniques. It provides comprehensive insights through sentiment analysis, grade averaging, and data visualization.',
    image:
      'gifs/project-3.gif',
    date: 'Java, Selenium, JavaFX',
  },
  {
    title: 'A full-stack web app allowing users to upload notes, transcribe them with Azure OCR, and generate study guides, flashcards, and summaries using GPT-4. It includes secure file storage with AWS S3 and a responsive React interface.',
    image:
      'gifs/project-5.gif',
    date: 'PostgreSQL, React, Node.js, AWS SDK, Azure OCR, GPT-4',
  },
  {
    title: 'This project management software, developed for investment company interns, streamlines workflow with automated LinkedIn verification and email notifications. It features data handling with Pydantic, parallel processing for enhanced performance, and an export feature for formatted Excel reports.',
    image:
      'gifs/project-2.gif',
    date: 'Python, Selenium, Tkinter',
  },
{
    title: 'This Java-based archival research tool for UC Berkeley\'s \'The Daily Californian\' automates web scraping and PDF creation from historical newspaper archives. It integrates Azure Form Recognizer for OCR and keyword search functionality.',
    image:
    'gifs/project-4.gif',
    date: 'Java, Maven, Selenium, Azure OCR',
},
{
    title: "This full-stack application provides secure file storage and sharing capabilities using React, Node.js, and AWS S3. It features real-time upload progress, temporary URL file sharing, and user authentication with PostgreSQL.",
    image:
      'gifs/project-1.gif',
    date: 'JavaScript, React, Express.js, AWS SDK, PostgreSQL',
}
];

export function ArticlesCardsGrid() {
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
      <Container className={classes.wrapper} size={1400}>
            <Text className={classes.heading} variant="gradient" mb={'xl'} gradient={{ from: '#A594F9', to: '#6247AA' }}>
            Projects
          </Text>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>{cards}</SimpleGrid>
      </Container>
    );
  }
  