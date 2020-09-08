import React from "react";
import styled from "styled-components";

import DaveSrc from "./images/self_portfolio.jpg"; // Tell webpack this JS file uses this image
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

function goToNetlifyProject() {
  window.location.href =
    "https://david-elliott-shopify-personal-project.netlify.app/";
}

function goToGitHubProject() {
  window.location.href =
    "https://github.com/davidelliott007/shopify-podcast-translator/tree/Redux-Branch/";
}

function goToGitHub() {
  window.location.href = "https://github.com/davidelliott007";
}

function goToLi() {
  window.location.href = "https://www.linkedin.com/in/david-elliott-montreal/";
}

function goToTwitter() {
  window.location.href = "https://twitter.com/DStuartElliott";
}

function Home() {
  console.log("About");

  return (
    <HomeWrapper>
      <IntroStatement>
        <displayXlarge>
          Hello there! I'm <NameText> Dave Elliott,</NameText> and I'm
          determined to start an internship at Shopify in January.
        </displayXlarge>
      </IntroStatement>
      <ItemDetailsImage image_source={DaveSrc}>
        <ProfileButtons>
          <ProfileButton onClick={goToGitHub}>
            <AiFillGithub size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButton>
          <ProfileButton onClick={goToLi}>
            <AiFillLinkedin size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButton>

          <ProfileButton onClick={goToTwitter}>
            <AiFillTwitterCircle
              size={50}
              style={{ verticalAlign: "middle" }}
            />
          </ProfileButton>
        </ProfileButtons>
      </ItemDetailsImage>
      <Pitch>
        <TLDR>
          <displayMedium>
            Here's my
            <TLDRBtn onClick={goToNetlifyProject}>Personal Project</TLDRBtn>
            here's the
            <ProfileButtonInSentence onClick={goToGitHubProject}>
              <AiFillGithub size={40} style={{ verticalAlign: "middle" }} />
            </ProfileButtonInSentence>
            <InvisibleButton onClick={goToGitHubProject}>
              <displayMedium>repo,</displayMedium>
            </InvisibleButton>
            and here's how I went about the attempt...
          </displayMedium>
        </TLDR>
        <Details>
          <body>
            Ok, so that's stuff up there is literally a bold statement, and a
            bit on the nose, as it were. Let me explain....
          </body>
          <body>
            On September 25th, I attended a great webinar that Paul and his
            colleagues delivered. I got to meet some of the Shopify team, and
            hear about the day-to-day at Shopify, and it convinced me that I
            should apply for the January internship program. Shopify seems to be
            the kind place where I can make an important contribution while my
            skills are growing, and as someone who is in the middle of his
            career, I'm super interested in joining a culture that invests in
            people.
          </body>
          <body>
            I've been taking a coding bootcamp class at Concordia since March,
            and we are 80% of the way through. When Paul invited us to apply, I
            didn't have any completed personal projects, so I decided - what the
            heck. See what you can make, David.
          </body>
          <body>
            Supporting the Podcast industry is a passion of mine, so I thought I
            would take the great Shopify Masters podcast and see if I could add
            some value to it.
          </body>
          <body>
            <StandOutBox>
              <StandOut>
                I decided to try something a little ambitious - could I produce
                an interactive french version of the podcast using NodeJS, React
                and Redux?
              </StandOut>
            </StandOutBox>
          </body>
          <body>
            I wanted an interactive transcript that would offer french
            translations, line per line, that I could skip if I wanted to, but
            hear repeated back to me as well.
          </body>

          <body>I sat down and figured out what I would need to do -</body>
          <ol>
            <li>
              Align the text transcript to the timeline of the mp3 with a cool
              tool called{" "}
              <a href={"https://github.com/lowerquality/gentle"}>
                Gentle Aligner
              </a>{" "}
              to figure out where each sentence occurs in the waveform. This
              would give me a JSON Object with each word of the transcript
              aligned to a timecode.
            </li>
            <li>
              Translate the english transcript using the Google Language API to
              produce a french transcript with Node JS.
            </li>
            <li>
              Combine the aligned english text from (1) with the french text
              from (2) to produce a bilingual JSON array.
            </li>
            <li>Use that array as a navigation instrument for the mp3.</li>
            <li>Wire it all up in React and Redux.</li>
          </ol>
          <body>
            <FinalStandOut>
              It took a lot of hacking away, but{" "}
              <TLDRBtnSmaller onClick={goToNetlifyProject}>
                here it is{" "}
              </TLDRBtnSmaller>
              - A clickable React App that allows you to hear each speaker in
              English, and then in French. All automatically generated!
            </FinalStandOut>
          </body>
        </Details>
      </Pitch>

      <Tidbits>
        Some other interesting tidbits behind the making of this app -
        <ol>
          <li>
            I'm running my own Node Express server to serve out the data. I have
            a bunch of juicy JSON files from all the transcribing code I've
            written.{" "}
          </li>
          <li>
            The app uses the{" "}
            <a
              href={
                "https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis"
              }
            >
              SpeechSynthesis
            </a>{" "}
            feature of modern desktop browsers - so a mobile version of the app
            would require a different strategy (I'm thinking of just recording a
            web speech synth version right from the browser output and serving
            out a seperate MP3 for mobile apps).
          </li>

          <li>
            It's a little incomplete. There can be some weird behaviour because
            of state jumps. However, considering that the assigned challenges
            were limited in scope, I figure a bit of incompleteness for the
            application project is acceptable.
          </li>
          <li>
            This will be my graduation project for my Bootcamp, so I intend to
            expand it quite a bit! There's no reason I can't add more languages,
            or explore searching the text, or add meta-data from others APIs,
            etc.
          </li>
        </ol>
      </Tidbits>
      <FinalPart>
        <body>
          Thanks for your time - I know there are a lot of candidates, and I'm
          looking forward to the opportunity to dive into the code and explain a
          little bit of my thinking. It was super fun to put this together!
        </body>
        <body>
          Oh, and I made a bit of a subtle design choice with the links to my
          stuff kind of enmeshed in my profile picture, so here it is again!
        </body>
        <FinalButtons>
          <ProfileButtonInSentence onClick={goToGitHub}>
            <AiFillGithub size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButtonInSentence>
          <ProfileButtonInSentence onClick={goToLi}>
            <AiFillLinkedin size={50} style={{ verticalAlign: "middle" }} />
          </ProfileButtonInSentence>
          <ProfileButtonInSentence onClick={goToTwitter}>
            <AiFillTwitterCircle
              size={50}
              style={{ verticalAlign: "middle" }}
            />
          </ProfileButtonInSentence>
        </FinalButtons>
        <body>Best, Dave Elliott </body>
      </FinalPart>
    </HomeWrapper>
  );
}

const FinalButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const FinalPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 800px;
`;

const Pitch = styled.div`
  padding-top: 20px;
  max-width: 800px;
`;

const Tidbits = styled.div`
  max-width: 750px;
`;

const FinalStandOut = styled.div`
  font-weight: bold;
  color: black;
`;

const StandOut = styled.div`
  font-weight: bold;
  color: black;
  background-color: #e0f5f5;
  padding: 5px;
`;

const StandOutBox = styled.div`
  padding: 10px;
`;

const Details = styled.div`
  padding-top: 20px;
  margin-left: -8px;
`;

const TLDR = styled.div`
  /* background-color: #f4f6f8;
  border-radius: 15px; */
`;

const HomeWrapper = styled.div`
  padding: 20px;
`;

const ProfileButton = styled.button`
  background-color: transparent;
  color: #e0f5f5;
  :hover {
    cursor: pointer;
    color: #47c1bf;
  }
  :focus {
    outline: none;
  }
  vertical-align: middle;
  padding: 2px;
  align-self: left;
  width: 50px;
  margin-bottom: 10px;
  border: 0px;
`;

const InvisibleButton = styled.button`
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }

  border: 0px;
`;

const ProfileButtonInSentence = styled.button`
  background-color: transparent;
  color: #00848e;
  :hover {
    cursor: pointer;
    color: #b4e1fa;
  }
  :focus {
    outline: none;
  }

  vertical-align: middle;
  padding: 2px;
  align-self: left;
  width: 50px;
  margin-bottom: 10px;
  border: 0px;
`;

const TLDRBtn = styled.button`
  color: #00848e;
  background-color: transparent;
  font-size: 42px;
  line-height: 44px;
  font-weight: 500;

  padding-left: 5px;
  padding-right: 5px;
  border: 1px dashed #003135;
  padding-bottom: 5px;
  padding-top: 0px;
  margin-right: 5px;
  margin-left: 5px;

  @media (max-width: 800px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
  }

  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;

const TLDRBtnSmaller = styled.button`
  color: #00848e;
  background-color: transparent;
  font-size: 22px;
  line-height: 34px;
  font-weight: 500;

  padding-left: 2px;
  padding-right: 2px;
  border: 1px dashed #003135;
  padding-bottom: 2px;
  padding-top: 0px;
  margin-right: 5px;
  margin-left: 5px;

  @media (max-width: 800px) {
    font-size: 27px;
    line-height: 36px;
    font-weight: 500;
  }

  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;

const ProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`;

const ItemDetailsImage = styled.div`
  background-image: url("${(props) => props.image_source}");
  height: 300px;
  max-width: 800px;

  background-position: middle;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 15px;
  border: none;
  transition: all 0.4s ease-in-out;
  z-index: 1;
`;

const IntroStatement = styled.div`
  margin-bottom: 20px;
  max-width: 800px;
`;

const NameText = styled.text`
  color: #00848e;
`;
export default Home;
