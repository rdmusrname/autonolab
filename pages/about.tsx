import styled from "styled-components";
import Page from "components/Page";
import RichText from "components/RichText";
import { EnvVars } from "env";

export default function ContactPage() {
    return (
        <Page title="About">
            <PrivacyPolicyContainer>
                <RichText>
                <br/>

<br/>
<br/>

                <h2>About AutonoLab</h2>
<br/>
<h3>The Problem</h3>
<p>Creating high-quality videos is a challenging, expensive, and time-consuming process.</p>
<br/>
<h3>The Solution</h3>
<p>At AutonoLab, we're developing an AI-powered video generation app to automate the entire video creation process. Our goal is to provide a truly automated solution that takes a topic as input and generates a video, thumbnail, and title using AI. This app will be particularly useful for media publishing companies, as it offers an API to automatically convert any idea into an engaging video.</p>

<p>Over the past few months, we've made significant progress and created the first MVP, focusing on video quotes. Here are some examples of what we've achieved so far:</p>

<p>Though not perfect, these videos showcase the potential of our AI-powered video generation app.</p>

<p>Currently, the app is in its early stages and available for internal testing and validation. In the coming weeks, we'll be adding more video types and launching a waiting list for those interested in experiencing the power of AI video generation. If you're interested, sign up.</p>
<br/>
<h3>The Path to AutoLab: A Word from Our Founder</h3>
<p>Hi, I'm Youssef, a tech and storytelling enthusiast. I've created multiple projects in the past and worked with an EdTech startup that uses AI and robotics to teach children languages, before quitting and committing to this project more than a year ago.</p>

<p>You can learn more about me through the following links: <a href="http://www.linkedin.com/in/youssef-imlyhen">LinkedIn</a>, <a href="https://github.com/youssef-imlyhen">GitHub</a>, and <a href="https://www.behance.net/youssefimly">Behance</a>. </p>


<br/>
<h3>Our Journey</h3>

<p>At AutonoLab, we're on a mission to revolutionize the video creation process with the power of AI. As the founder, I'm fully committed to making this happen, and my life revolves around it.</p>
<br/>
<h3>Gathering Feedback</h3>
<p>After the initial MVP, I've been dedicated to understanding the needs and preferences of our potential users. I've spent countless hours speaking with them, collecting their feedback, and gauging their interest in our AI-powered video generation app. As a result, we've set up a waiting list for early adopters and have been actively brainstorming marketing strategies and use cases.</p>
<br/>
<h3>Mastering the Art of Video Creation</h3>
<p>As a passionate content creator, I've always been intrigued by what makes a great video. I started a tech tips and tricks YouTube channel and Facebook page at the age of 15, gaining thousands of followers. This time, I went even deeper. I studied the best in the field, such as Mr. Beast, Colin and Samir, and Yon Youshaei, as well as smaller, faceless channels. I didn't stop at just learning; I got hands-on experience creating prompts, processes, Notion templates, advanced animation, and editing. These insights will directly translate into our product.</p>
<br/>
<h3>Going All In on AI</h3>
<p>I've played with every open-source LLMS on the Hugging Face leaderboard, explored trending AI GitHub tools, and learned from AI news content, including Lex Fridman guests and hobbyists. I've integrated AI workflows into my daily life, creating personal assistants and side projects like AI autonomous website builders and AI domain generators. This revolutionary technology is at the core of our mission, and we're all in.</p>
<br/>
<h3>My Personal Devotion</h3>
<p>I'm fully devoted to AutonoLab and its mission. I'm ready to give my all to this project and can't wait to integrate the latest models and insights I've gathered. This journey will be unique, and I'm excited to have you join us as we explore the potential of AI in video creation.</p>
                </RichText>
            </PrivacyPolicyContainer>
        </Page>
    );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
