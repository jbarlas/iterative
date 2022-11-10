import design11 from "../sketches/design1_1_profile.png";
import design12 from "../sketches/design12.png";
import design13 from "../sketches/design1_3_calendar.png";
import design14 from "../sketches/design1_4_schedule.png";
import design21 from "../sketches/design2_1_profile.png";
import design22 from "../sketches/design2_2_matches.png";
import design23 from "../sketches/design2_3_matching.png";
import design31 from "../sketches/design3_1_matches.png";
import design32 from "../sketches/design3_2_messaging.png";
import design33 from "../sketches/design3_3_profile.png";
import design41 from "../sketches/sketch41.png";
import design42 from "../sketches/sketch42.png";
import design43 from "../sketches/sketch43.png";

export const sketches = {
  title: "Sketches",
  subtitle:
    "We began by brainstorming different interface ideas. Click the buttons to explore some of the different designs!",
  options: {
    // TODO: come up with better button names
    sketch1: {
      buttonText: "Design 1",
      imgs: [
        {
          src: design11,
          id: "sketch11",
          caption: "Mixed input formats.",
        },
        {
          src: design12,
          id: "sketch12",
          caption: "Can see multiple users at once and swipe to expand a profile.",
        },
        {
          src: design13,
          id: "sketch13",
          caption: "Only calling is allowed to emphasize serious connection.",
        },
        {
          src: design14,
          id: "sketch14",
          caption: "Since we aren't allowing messaging, we had to allow scheduling calls through an interface.",
        },
      ],
    },
    sketch2: {
      imgs: [
        {
          src: design21,
          id: "sketch",
          caption: "Focus on photos and short biography.",
        },
        {
          src: design22,
          id: "sketch22",
          caption: "Lock imagery to emphasize the notion that you can only speak to one person at a time",
        },
        {
          src: design23,
          id: "sketch23",
          caption: "Swiping interface to be consistent with general mental model of dating apps.",
        },
      ],
      buttonText: "Design 2",
    },
    sketch3: {
      imgs: [
        {
          src: design31,
          id: "sketch",
          caption: "Features compatibility heavily as opposed to images.",
        },
        {
          src: design32,
          id: "sketch",
          caption: "Fun, engaging messaging interface to keep users on the app over texting.",
        },
        {
          src: design33,
          id: "sketch",
          caption: "Only one type of input for users.",
        },
      ],
      buttonText: "Design 3",
    },
    sketch4: {
      imgs: [
        {
          src: design41,
          id: "sketch4",
          caption: "Toggle to your one match. Emphasizes the nature of this app.",
        },
        {
          src: design42,
          id: "sketch4",
          caption: "All text and you have to go click down to view images and match so users don't go off just superficial images.",
        },
        {
          src: design43,
          id: "sketch4",
          caption: "Extreme customizability to showcase personality.",
        },
      ],
      buttonText: "Design 4",
    },
  },
};
