import { createContext } from "react";

import appLogo from "../../images/amplichat.png";

import appleStoreBadge from "../../images/apple_store_badge.svg";
import googlePlayBadge from "../../images/google_play_badge.png";

import coverImage from "../../images/amplichat_iphones_two.png";

// endorsement images
import dreamhub_filled from "../../images/dreamhub_filled.png";
import voiceqna_filled from "../../images/voiceqna_fill_v2_gradient.png";
import voicemirror_filled from "../../images/voice_mirror_v_1024.png";
import bazipaipai_unfilled from "../../images/bazipaipai_64.png";
import spindrifthome_filled from "../../images/sh_unfill_1024.png";

// section images
import guitar from "../../images/guitar.jpg";
import event_phones from "../../images/event_phones.jpeg";
import foggy_blue from "../../images/foggy_blue.jpg";
import purple_phones from "../../images/purple_phones.png";
import purple_light from "../../images/purple_light.jpg";
import concert_classic from "../../images/concert_classic.jpg";

import discordImage from "../../images/discord.png";

const initialState = {
  // when in dev, change appURL to local url
  appURL: "http://localhost:3000",
  // when in production, change appURL to real url
  // appURL: 'https://amplichat.com',
  googleLink: "https://accounts.google.com",
  linkedinLink: "https://linkedin.com",
  appLogo: appLogo,
  appName: "Developing",

  coverTitle: "Welcome to our Paradise of sponsorships",
  coverText:
    "Here you can meet creators or just create your own business and meet our brands.",
  appleStoreBadge: appleStoreBadge,
  appleStoreLink: "https://apps.apple.com/us/app/amplichat/id1499570373",
  googlePlayBadge: googlePlayBadge,
  googlePlayLink: "https://apps.apple.com/us/app/amplichat/id1499570373",

  coverImage: coverImage,

  endorsementTitle: `Hangout with your favorite people on your favorite apps`,
  endorsementText: `AmpliChat powers conversations within DreamHub, VoiceQnA, VoiceMirror, BaZiPaiPai, and SpindriftHome.`,
  endorsementList: [
    {
      title: `DreamHub: Visualized Stories`,
      titleColor: `orangeRed`,
      image: dreamhub_filled,
      URL: `https://dreamhub.app`,
    },
    {
      title: `VoiceQnA: Speak a New Language`,
      titleColor: `forestGreen`,
      image: voiceqna_filled,
      URL: `https://voiceqna.com`,
    },
    {
      title: `VoiceMirror: Travel Translator`,
      titleColor: `blue`,
      image: voicemirror_filled,
      URL: `https://voiceqna.com/mirror`,
    },
    {
      title: `BaZiPaiPai: Know Your Destiny`,
      titleColor: `black`,
      image: bazipaipai_unfilled,
      URL: `https://bazipaipai.com`,
    },
    {
      title: `SpindriftHome: HOA Management`,
      titleColor: `orangeRed`,
      image: spindrifthome_filled,
      URL: `https://spindrifthome.com`,
    },
  ],

  sectionList: [
    {
      title: `Event Networking Made Easy`,
      text: `Tired of shouting over the music to talk to your friends at concerts and events? Our app makes it easy to chat with others in real-time, so you can enjoy the experience without missing out on socializing.`,
      image: guitar,
    },
    {
      title: `Expand Your Event Community`,
      text: `Meet like-minded people and share your excitement for the latest events and concerts.`,
      image: event_phones,
    },
    {
      title: `Enhance Event Experience`,
      text: `Get instant access to a community of passionate event and concert-goers with our app! Chat with others before, during, and after the event to enhance your experience and create memories that last a lifetime.`,
      image: foggy_blue,
    },
    {
      title: `Chat with Attendees`,
      text: `Don't let social anxiety get in the way of enjoying your favorite events and concerts! With our app, you can chat with others and make new friends in a safe, welcoming environment.`,
      image: purple_phones,
    },
    {
      title: `Discover New Events and Friends`,
      text: `Our app is the perfect way to enhance your experience at events and concerts! Connect with others, share your thoughts and opinions, and discover new artists and events to love.`,
      image: purple_light,
    },
    {
      title: `Connect with Concert Fans`,
      text: `Whether you're a seasoned concert-goer or a first-time attendee, our app is the perfect way to connect with others and make the most of your experience. Download now and start chatting!`,
      image: concert_classic,
    },
  ],

  discordImage: discordImage,
  discordLink: "https://discord.com/invite/aFQPYyAVDq",
};

const initialContext = {
  state: initialState,
  dispatch: () => null,
};

export default createContext(initialContext);
