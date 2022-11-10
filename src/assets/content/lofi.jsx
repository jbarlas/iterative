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
    account: {
        buttonText: "Account Creation",
        imgs: [
          {
            src: account1,
            id: "lofi",
            caption: "Signup page.",
          },
          {
            src: account2,
            id: "lofi",
            caption: "Plus signs to add more content.",
          },
        ],
      },
      matching: {
        buttonText: "Swiping",
        imgs: [
          {
            src: swipe1,
            id: "lofi12",
            caption: "Viewing other users' profiles.",
          },
          {
            src: swipe2,
            id: "lofi",
            caption: "Reacting to other users' profiles to try and match with them.",
          },
        ],
      },
      prompt: {
        buttonText: "Matched",
        imgs: [
          {
            src: match2,
            id: "lofi4",
            caption: "Pop up screen to notify users of a match.",
          },
          {
            src: match1,
            id: "lofi4",
            caption: "Messaging interface that is enabled only when there is a match.",
          },
        ],
      },
  },
};
