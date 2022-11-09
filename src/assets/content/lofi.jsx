import match1 from "../lofis/5-Messaging.png";
import swipe1 from "../lofis/1-Matching.png";
import swipe2 from "../lofis/7-MatchReaction.png";
import account1 from "../lofis/2-CreateProfile.png";
import account2 from "../lofis/3-MyAccount.png";
import match2 from "../lofis/9-Match.png";

export const lofi = {
  title: "Lo-Fi Prototypes",
  subtitle:
    "We wanted to emphasize the one to one matching that is central to Delight’s mission. After reviewing our four different sketched designs, we created one final low fidelity wireframe in Balsamiq and annotated our design decisions within it. ",
  options: {
    // TODO: come up with better button names
    matching: {
      buttonText: "Swiping",
      imgs: [
        {
          src: swipe1,
          id: "lofi12",
          caption: "",
        },
        {
          src: swipe2,
          id: "lofi",
          caption: "",
        },
      ],
    },
    account: {
        buttonText: "Account Creation",
        imgs: [
          {
            src: account1,
            id: "lofi",
            caption: "",
          },
          {
            src: account2,
            id: "lofi",
            caption: "",
          },
        ],
      },
      prompt: {
        buttonText: "Matched",
        imgs: [
          {
            src: match1,
            id: "lofi4",
            caption: "",
          },
          {
            src: match2,
            id: "lofi4",
            caption: "",
          },
        ],
      },
  },
};
