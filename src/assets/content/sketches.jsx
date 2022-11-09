import img from "../images/s1_crop.png";
import img2 from "../images/s2_crop.png";
import placeholder from "../images/placeholder_phone.png";

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
          src: placeholder,
          id: "placeholder",
          caption: "this is a really really long caption that goes into too much detail like just wayy too much detail",
        },
        {
          src: placeholder,
          id: "placeholder",
          caption: "caption",
        },
        {
          src: placeholder,
          id: "placeholder",
          caption: "caption",
        },
      ],
    },
    sketch2: {
      imgs: [
        {
          src: img,
          id: "img1",
          caption: "caption",
        },
        {
          src: img2,
          id: "img2",
          caption: "caption",
        },
        {
          src: placeholder,
          id: "placeholder",
          caption: "placeholder",
        },
      ],
      buttonText: "Design 2",
    },
    sketch3: {
      imgs: [
        {
          src: placeholder,
          id: "placeholder",
          caption: "caption",
        },
        {
          src: placeholder,
          id: "placeholder",
          caption: "caption",
        },
        {
          src: placeholder,
          id: "placeholder",
          caption: "caption",
        },
      ],
      buttonText: "Design 3",
    },
    sketch4: {
      imgs: [
        {
          src: placeholder,
          id: "placeholder",
          caption: "caption",
        },
        {
          src: placeholder,
          id: "placeholder",
          caption: "caption",
        },
        {
          src: placeholder,
          id: "placeholder",
          caption: "caption",
        },
      ],
      buttonText: "Design 4",
    },
  },
};
