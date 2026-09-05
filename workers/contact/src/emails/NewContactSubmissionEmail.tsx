import { Body, Container, Head, Heading, Html, Preview, Section, Text } from '@react-email/components';

export const NewContactSubmissionEmail = ({
  username,
  emailAddress,
  message,
  companyName,
  role,
  isCompanyForm,
}: {
  username: string;
  emailAddress: string;
  message: string;
  companyName?: string;
  role?: string;
  isCompanyForm: boolean;
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>New Contact Form Submission</Heading>

            <Text style={text}>{username} has submitted a new contact form.</Text>

            <Text style={text}>
              <strong>Email:</strong> {emailAddress}
            </Text>

            <Text style={text}>
              <strong>Message:</strong> {message}
            </Text>

            {isCompanyForm && (
              <>
                <Text style={text}>
                  <strong>Form Type:</strong> Company
                </Text>
                {companyName && (
                  <Text style={text}>
                    <strong>Company Name:</strong> {companyName}
                  </Text>
                )}
                {role && (
                  <Text style={text}>
                    <strong>Role:</strong> {role}
                  </Text>
                )}
              </>
            )}
            {!isCompanyForm && (
              <Text style={text}>
                <strong>Form Type:</strong> Individual
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  padding: '2rem',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '2rem',
  borderRadius: '0.5rem',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
};

const section = {
  padding: '0',
};

const h1 = {
  color: '#1a202c',
  fontSize: '1.25rem',
  fontWeight: '600',
  textAlign: 'center' as const,
  marginBottom: '1.5rem',
};

const text = {
  color: '#4a5568',
  fontSize: '0.875rem',
  lineHeight: '1.5',
  margin: '0 0 1rem',
};

export default NewContactSubmissionEmail;
