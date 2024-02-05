/* eslint-disable react/no-unescaped-entities */

import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>AutonoLab</title>
        <meta
          name="description"
          content="Your ultimate AI-powered video content companion.Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        
      <Background />
  <Foreground />
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/transparent-robot.png" title="Experience the future of video creation with the cutting-edge AI video app." overTitle="">
            
            <p>
            Artificial intelligence is revolutionizing society and the way we do everything, including the way we create and consume video content. Our cutting-edge AI video app makes it faster and easier to produce high-quality videos, offering a convenient and powerful solution for video creation. If you want to be a part of the AI revolution and experience the future of video creation, consider joining our waiting list. Don't miss out on this opportunity to see how AI is transforming the world – join the waiting list now and be a part of the future of video creation.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/3d-robot2.png" title="The World Is Changing - be a part of the future." overTitle="" reversed>
            <p>   
Create unique, engaging video content quickly and easily using the power of AI.
            </p>
            <ul>
              <li><strong>Save Time</strong> - Generate hundreds of high quality videos in a fraction of the time it would take to create them manually.</li>
              <li><strong>Save Money</strong> - Save money by using AI to generate videos, cutting out the need for expensive production costs.</li>
              <li><strong>Stress Free</strong> - Enjoy the convenience and ease of automated video creation with no stress or hassle of managing teams.</li>
              <li><strong>Easy To Use</strong> - Enjoy the convenience and ease of automated video creation with no stress or hassle.</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <BasicSection imageUrl="/transparent-robot-with camera.png" title="Be a part of the future." overTitle="" reversed>
            <p>   
            <strong>Feedback Gathering:</strong> Since then, I've spoken to potential users to get feedback and gauge interest. I set up a waiting list and started collecting emails from early adopters while brainstorming marketing strategies and use cases.
            <br/>
            <br/>

<strong>Deep into what makes great videos:</strong> I've always been interested in content creation. I started a tech tips and tricks centered YouTube channel and Facebook page with thousands of followers when I was just 15, without much knowledge but with a strong desire to create. I stopped for a while and moved on to other things, but I never lost that passion. This time, I went down a rabbit hole to discover what makes a great video, especially on YouTube, from the best in the field, such as Mr. Beast, Colin and Samir, Yon Youshaei, and even smaller, faceless channels. I didn't stop with just learning; I got my hands dirty by practicing and creating prompts, processes, Notion templates, advanced animation, and editing. I created multiple channels and trained a team, and you can find a sample video here. I gathered hands-on insights that will directly translate into our product.
<br/>
<br/>
<strong>All in on AI:</strong> I've played with every open-source LLMS on the Hugging Face leaderboard, trending AI GitHub tools, AI news content from Lex Fridman guests to hobbyists trying to set up a cozy UI on free Colab, proprietary and rag systems, AI agents, AI images, videos, 3D models, advanced prompt engineering, and so on. I integrated AI workflows into my daily life, creating all sorts of personal assistants and side projects (AI autonomous website builders deployed +200 websites with one command, AI domain generators, etc.). This is revolutionary technology, and I'm all in.

I'm ready, and I'm giving my soul fully to this. I can't wait to integrate the latest models and insights I've gathered from all this time. Be ready; this will be a unique journey.
            </p>
 
          </BasicSection>
          {/* <Features /> */}
          <ScrollableBlogPosts posts={posts} />
          {/* <Testimonials /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: 100%;
  background-repeat: none;
  background-image: url(https://source.unsplash.com/a-digital-camera-with-a-green-light-on-it-UGzSBH4BPtA);
`;

const Foreground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-size: 100%;
  background-repeat: none;
  background-image: url(https://source.unsplash.com/blue-and-white-floral-textile-11KDtiUWRq4);
  mask-image: linear-gradient(var(--direction, -45deg), rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%);
  mask-position: 50% 50%;
  
`;
const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
  padding: 0;
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`

  padding: 0;
  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
