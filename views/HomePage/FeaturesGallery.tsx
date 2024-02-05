import NextImage from 'next/image';
import YouTube from 'react-youtube';
import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { media } from 'utils/media';
import RichText from 'components/MDXRichText';
import Quote from 'components/Quote';

const TABS = [
  {
    title: 'Real Time Data',
    description:
      '<p>Here are videos based on real time accurate Real Time Data (This case sports).</p>',
    videoIds: ['Y0Xkjn1YYfM'],
    baseColor: '188,153,132',
    secondColor: '124,27,18',
  },
  {
  title: 'News Videos',
  description:
    '<p>Here are videos based on real time accurate News.</p>',
  videoIds: ['d9SBWpi34lE'],
  baseColor: '108,193,32',
  secondColor: '124,207,158',
},
  {
    title: 'Quotes Videos',
    description:
      '<p>With a single command, it can generate hundreds of high-quality videos.</p>',
    videoIds: ['iyULDE4hYcs'],
    baseColor: '249,182,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Story Videos',
    description:
      '<p>With a single command, it can generate hundreds of fictional video content using AI generated images.</p>',
    videoIds: ['Y1Q2eQ-CfDc'],
    baseColor: '29,82,20',
    secondColor: '221,9,57',
  },

  {
    title: 'Short Videos',
    description:
      '<p>Same! with a single command, It can generate hundreds of short videos using stock assets.</p>',
    videoIds: ['Eim7iTDYmKc'],
    baseColor: '157,48,224',
    secondColor: '99,172,232',
  },
  {
    title: 'Video Essays',
    description:
      '<p>With a single command, it can generate hundreds of high-quality videos essays on different topics using AI generated images or stock assets.</p>',
    videoIds: ['Nb7_zdBRuig'],
    baseColor: '129,118,20',
    secondColor: '21,69,157',
  },
  {
    title: 'Stylized Quotes Videos',
    description:
      '<p>With a single command, it can generate hundreds of high-quality videos with different styles.</p>',
    videoIds: ['DVf3hwSowkg'],
    baseColor: '29,18,220',
    secondColor: '201,9,157',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <ImageContainer key={singleTab.title} isActive={isActive}>
        {/* <NextImage src={singleTab.videoIds} alt={singleTab.title} layout="fill" objectFit="contain" priority={isFirst} /> */}
        {singleTab.videoIds.map((videoId) => <YouTube key={videoId} videoId={videoId}/>)}

        </ImageContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <FeaturesGalleryWrapper>
      <Content>
        <OverTitle>Examples</OverTitle>
        <SectionTitle id='examples'>Generations</SectionTitle>
        <Quote author='Founder' content='These are some of the results from December 2022, as well as some from before ChatGPT was even released. They were generated without prompt engineering using older technologies (GPT-3, Mimic3, etc.).' cite='Founder' ></Quote>
        <SectionTitle></SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>

        {imagesMarkup}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  width: 100%;
  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const ImageContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isActive ? '2' : '0')};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
  height: ${(p) => (p.isActive ? 'fit-content' : '0')};
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
