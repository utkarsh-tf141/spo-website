import NextImage from 'next/image';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const TeamMembers = [
  {
    name: 'Abhinav D Singh',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Abhishek Kumar',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Akhila Mudupu',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Gyanendra Kumar',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Vishwaraj Singh',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Pragati Singh',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Sunay Chhajed',
    image: '/testimonials/iitk-logo.svg',
  },
];
const APC = [
  {
    name: 'Aditi Phogat',
  },
  {
    name: 'Afraz Jamal',
  },
  {
    name: 'Agrim Pandey',
  },
  {
    name: 'Ananya Agrawal',
  },
  {
    name: 'Ashutosh Sharma',
  },
  {
    name: 'Kashishpreet Kaur',
  },
  {
    name: 'Kavya Jalan',
  },
  {
    name: 'Khushbu Kumawat',
  },
  {
    name: 'Khushi Gautam',
  },
  {
    name: 'Nitya Aggarwal',
  },
  {
    name: 'Payal Singh',
  },
  {
    name: 'Pulkit Dhamija',
  },
  {
    name: 'Ravi Patel',
  },
  {
    name: 'Riktesh Singh',
  },
  {
    name: 'Rishabh Yadav',
  },
  {
    name: 'Rishi Malhotra',
  },
  {
    name: 'Sathwika',
  },
  {
    name: 'Shivangi Singh',
  },
  {
    name: 'Suraj Kumawat',
  },
  {
    name: 'Upen Mishra',
  },
  {
    name: 'Vandana Basrani',
  },
];
const WEB = [
  {
    name: 'Harshitt Raj',
    position: 'Web Head',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Abhishek Shree',
    position: 'Web Head',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Amandeep',
    position: 'Web Executive',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Krishnansh Agarwal',
    position: 'Web Executive',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Tejas Ahuja',
    position: 'Web Executive',
    image: '/testimonials/iitk-logo.svg',
  },
  {
    name: 'Utkarsh Mishra',
    position: 'Web Executive',
    image: '/testimonials/iitk-logo.svg',
  },
];
export default function StudentTeam() {
  return (
    <DarkerBackgroundContainer>
      <br />
      <SectionTitle>Student Team Members</SectionTitle>
      <br />
      <SectionTitle>Overall Placement Coordinators</SectionTitle>
      <Container>
        <CustomAutofitGrid>
          {TeamMembers.map((member) => (
            <div key={member.name}>
              <Card>
                {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                <Title>{member.name}</Title>
                <Description>{member.position}</Description>
              </Card>
            </div>
          ))}
        </CustomAutofitGrid>
      </Container>
      <SectionTitle>Assistant Placement Coordinators</SectionTitle>
      <Container>
        <CustomAutofitGrid>
          {APC.map((member) => (
            <div key={member.name}>
              <Card>
                {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                <Title>{member.name}</Title>
                <Description>{member.position}</Description>
              </Card>
            </div>
          ))}
        </CustomAutofitGrid>
      </Container>
      <SectionTitle>Web Team</SectionTitle>
      <Container>
        <CustomAutofitGrid>
          {WEB.map((member) => (
            <div key={member.name}>
              <Card>
                {member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
                <Title>{member.name}</Title>
                <Description>{member.position}</Description>
              </Card>
            </div>
          ))}
        </CustomAutofitGrid>
      </Container>
      <br />
    </DarkerBackgroundContainer>
  );
}
const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  opacity: 0.6;
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;
