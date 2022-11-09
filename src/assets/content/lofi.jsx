import placeholder from "../images/placeholder_phone.png";

export const lofi = {
  title: "Lo-Fi Prototypes",
  subtitle:
    "We wanted to emphasize the one to one matching that is central to Delight’s mission. After reviewing our four different sketched designs, we created one final low fidelity wireframe in Balsamiq and annotated our design decisions within it. ",
  options: {
    // TODO: come up with better button names
    matching: {
      buttonText: "Matching",
      imgs: [
        {
          src: placeholder,
          id: "placeholder",
          caption: "placeholder for matching page",
        },
      ],
    },
    account: {
        buttonText: "Account Creation",
        imgs: [
          {
            src: placeholder,
            id: "placeholder",
            caption: "placeholder for accounts creation",
          },
        ],
      },
      prompt: {
        buttonText: "Prompts",
        imgs: [
          {
            src: placeholder,
            id: "placeholder",
            caption: "something about prompts",
          },
        ],
      },
  },
};
