import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, message }) => {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <Container>
          <Heading>Hello Rikhil, I&apos;m {name}</Heading>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
