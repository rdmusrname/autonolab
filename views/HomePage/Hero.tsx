import NextLink from 'next/link';
import styled, { keyframes } from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media'
import { useEffect } from 'react';
import NextImage from 'next/image';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();
  useEffect(() => {
    let c = 45;

    function draw() {
      document.documentElement.style.setProperty('--direction', c++ + 'deg');
      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }, []);
  return (
    <HeroWrapper>

      <Contents>
        <CustomOverTitle> Join the waiting list now!</CustomOverTitle>
        <Heading>Become a part of the AI video revolution</Heading>
        <Description>The world is changing rapidly, We are on mission to revolutionize video content creation and consumption using AI. Join us and be among the first to witness the power of AI video generation!</Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Join Us<span>&rarr;</span>
          </Button>
          <NextLink href="#examples" passHref>
            <Button transparent>
              Examples <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        {/* <HeroIllustration /> */}
{/* add an image with this image: transparent-robot.png */}
      <CustomNextImageInRight src="/transparent-clouds.png" alt="hero illustration" layout="fill" width="100%" height="100%" objectFit="contain" />
      </ImageContainer>
    </HeroWrapper>
  );
}
  
const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }

`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center; // Adjusted this for center alignment
  align-items: center; // Adjusted this for center alignment
  position: relative; // Added this to contain the absolute positioned image

  ${media('<=desktop')} {
    margin-top: 2rem;
    svg {
      max-width: 80%;
    }
  }
`;
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
const CustomNextImageInRight = styled(NextImage)`

  animation: ${pulse} 6s infinite;
  // flip the image horizontally
  transform: scaleX(-1);
`
const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
