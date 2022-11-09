import account_creation from "../hifis/account_creation.mp4";
import matching from "../hifis/matching.mp4";
import profile_creation from "../hifis/profile_creation.mp4";
import profile_settings from "../hifis/profile_settings.mp4";
import unmatch from "../hifis/unmatch.mp4";

export const hifi = {
  title: "Hi-Fi Prototypes",
  subtitle: "Information about hi-fis!",
  options: {
    matching: {
      buttonText: "Account Creation",
      video: {
        src: account_creation,
        id: "placeholder",
        caption: "is this working for matching page",
      },
    },
    account: {
      buttonText: "Unmatch",
      video: {
        src: unmatch,
        id: "placeholder",
        caption: "placeholder for accounts creation",
      },
    },
    prompt: {
      buttonText: "Prompts",
      video: {
        src: profile_creation,
        id: "placeholder",
        caption: "something about prompts",
      },
    },
  },
};
