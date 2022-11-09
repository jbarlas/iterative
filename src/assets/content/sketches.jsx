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
          caption: "",
        },
        {
          src: design12,
          id: "sketch12",
          caption: "",
        },
        {
          src: design13,
          id: "sketch13",
          caption: "",
        },
        {
          src: design14,
          id: "sketch14",
          caption: "",
        },
      ],
    },
    sketch2: {
      imgs: [
        {
          src: design21,
          id: "sketch",
          caption: "",
        },
        {
          src: design22,
          id: "sketch22",
          caption: "",
        },
        {
          src: design23,
          id: "sketch23",
          caption: "",
        },
      ],
      buttonText: "Design 2",
    },
    sketch3: {
      imgs: [
        {
          src: design31,
          id: "sketch",
          caption: "",
        },
        {
          src: design32,
          id: "sketch",
          caption: "",
        },
        {
          src: design33,
          id: "sketch",
          caption: "",
        },
      ],
      buttonText: "Design 3",
    },
    sketch4: {
      imgs: [
        {
          src: design41,
          id: "sketch4",
          caption: "",
        },
        {
          src: design42,
          id: "sketch4",
          caption: "",
        },
        {
          src: design43,
          id: "sketch4",
          caption: "",
        },
      ],
      buttonText: "Design 4",
    },
  },
};
