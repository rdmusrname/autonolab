import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>I know it's really hard</OverTitle>
          <SectionTitle>Making good-quality videos is hard, expensive, and time-consuming.</SectionTitle>
          <Description>
       Over the past few months, I've been working on developing a video generation app that uses AI to automate the entire process of creating videos. My goal is to create a real automated video production app where you can enter a topic and the app will search for trending ideas, suggest video titles, and then generate everything automatically using AI – including the actual video, suggested thumbnails, and suggested titles, in addition to providing media publishing companies with a solution to automatically convert any idea into powerful videos via a simple API.
          </Description>
          <ButtonGroup>
            <NextLink href="#early-access" passHref>
              <Button>
                Join Us <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="#Examples" passHref>
              <OutlinedButton transparent>
                Examples <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
