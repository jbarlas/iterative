import accountCreation from "../hifis/account_creation.mp4";
import matching from "../hifis/matching.mp4";
import profileCreation from "../hifis/profile_creation.mp4";
import profileSettings from "../hifis/profile_settings.mp4";
import unmatch from "../hifis/unmatch.mp4";

export const hifi = {
  title: "Hi-Fi Prototypes",
  subtitle: "We created a final version of the product where we made screens for 5 different workflows and go through the interactions as a new user.",
  options: {
    accountCreation: {
      buttonText: "Account Creation",
      video: {
        src: accountCreation,
        id: "account-creation-vid",
        caption: "Account creation walk-through",
      },
    },
    profileCreation: {
      buttonText: "Profile Creation",
      video: {
        src: profileCreation,
        id: "profile-creation-vid",
        caption: "Profile creation walk-through",
      },
    },
    matching: {
      buttonText: "Matching",
      video: {
        src: matching,
        id: "matching-vid",
        caption: "Matching with other users",
      },
    },
    profile: {
      buttonText: "Profile/Settings",
      video: {
        src: profileSettings,
        id: "profile-settings-vid",
        caption: "View profile and setings",
      },
    },
    unmatch: {
      buttonText: "Unmatching",
      video: {
        src: unmatch,
        id: "unmatch-vid",
        caption: "Unmatching with users",
      },
    },
  },
};
