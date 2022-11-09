import img_crit1 from "../crit/account-hifi.png";
import img_crit2 from "../lofis/8-Match-Reaction-RE.png";
import img_crit3 from "../lofis/12-Preferences-RE.png";
import img_crit4 from "../lofis/10-Match-RE.png";
import img_crit5 from "../lofis/13-Compatibility-RE.png";

export const crit1 = {
  title: "Group Critique",
  leftSubtitle: "“Create Account & Profile is too long, cluttered, and boring!”",
  leftText: " We added progress bars, colloquial and engaging language, and separated each question in account creation onto their own screen",
  img: {
    // TODO: resize image
    src: img_crit1,
    alt: "Account Creation Revised Hi-Fi",
    // we can resize images using this id tag in App.css
    id: "crit1"
  }
};

export const crit2 = {
  leftSubtitle: "“I don't understand why I can't keep messaging somebody after I react to their profile…”",
  leftText: "We added a new Reaction sent! screen!",
  img: {
    // TODO: add in + resize image
    src: img_crit2,
    alt: "Match Reaction revised lofi",
    // we can resize images using this id tag in App.css
    id: "crit2"
  }
};

export const crit3 = {
  leftSubtitle: "“Preferences is not important enough for the navbar”",
  leftText: "We made a new Settings page that includes Preferences and other important options and information",
  img: {
    // TODO:  resize image
    src: img_crit3,
    alt: "Settings/Preferences revised Lofi",
    // we can resize images using this id tag in App.css
    id: "crit3"
  }
};

export const crit4 = {
  leftSubtitle: "“I don't understand what the pink colors mean or when I'm actually matched”",
  leftText: "The app always has a strong color theme: blue when unmatched, pink when matched. Matching also permanently changes the heart profile-viewing button to a messaging button for your new match!",
  img: {
    // TODO:  resize image
    src: img_crit4,
    alt: "Match revised Lofi",
    // we can resize images using this id tag in App.css
    id: "crit4"
  }
};

export const crit5 = {
  leftSubtitle: "“I don't understand what the pink colors mean or when I'm actually matched”",
  leftText: "The app always has a strong color theme: blue when unmatched, pink when matched. Matching also permanently changes the heart profile-viewing button to a messaging button for your new match!",
  img: {
    // TODO:  resize image
    src: img_crit5,
    alt: "Compatibility/Profile revised Lofi",
    // we can resize images using this id tag in App.css
    id: "crit5"
  }
};
