import user1 from "../testing/user1.mp4";
import user2 from "../testing/user2.mp4";
import user3 from "../testing/user3.mp4";

const questions = <ol>
  <li>What frustrated you most about the matching/unmatching process?</li>
  <li>If you had a magic wand, how would you improve this site?</li>
  <li>What did you like about the site?</li>
  <li>How likely are you to recommend this site to a friend or colleague (0=Not at all likely, and 10=Very likely)?</li>
</ol>

const task = <div>
Successfully match with someone. <br></br><br></br>
Subtasks: 
<ol>
  <li>Create a profile (selecting desired buttons, dropdowns, etc)</li>
  <li>React to other users’ profiles</li>
  <li>Explore the matched profile page and unmatch with your match [5-point rating scale: Very difficult to Very easy]</li>
</ol>
</div>

const performance = <div>
  <div className="subsection-title">Create A Profile:</div><br></br>
  Overall, they really enjoyed the account creation workflow because it felt like someone was talking to them and gave clear indication of its length. They wish that the length was likewise indicated for the profile creation.
  <br></br><br></br>
  <div className="subsection-title">React to Other People’s Profiles:</div><br></br>
  Some users were confused how to react to profiles and thought that in order to match, they had to press the heart button. They also at first thought that the X button to go to the next profile would take you back to your own profile page.
  <br></br><br></br>
  <div className="subsection-title">Explore the Matched Page and Unmatching a Match:</div><br></br>
  For the matching process, users thought that more information should be given on each profile before matching. They thought that the unmatching process was extremely intuitive.
</div>

const changes = <ul>
  <li>Moving the X button from the top right to the bottom right to make it look less like x-ing out of a screen</li>
  <li>Displaying how users are compatible during matching as well as after to give more information</li>
  <li>Creating indicators for the number of minimum photos and prompt answers to indicate length</li>
  <li>Moving the heart button down so it is in line with the rest of the bottom navigation bar to make it look less like a matching button</li>
</ul>


export const taskQuestions = {
  content: {
    rightSubtitle: "Task",
    rightText: task,
    leftSubtitle: "Post-Test Questions",
    leftText: questions,
  },
}

export const testingVideos = {
  title: "User Testing Videos",
  subtitle: "Most of the results were in line with our expectations. All subtasks were successfully done, but there were some confusions. Click the buttons to view each user’s videos.",
  user1: {
    matching: {
      buttonText: "User 1",
      video: {
        src: user1,
        id: "testing1",
        caption: "",
      },
    },
    user2: {
      buttonText: "User 2",
      video: {
        src: user2,
        id: "testing2",
        caption: "",
      },
    },
    user3: {
      buttonText: "User 3",
      video: {
        src: user3,
        id: "testing3",
        caption: "",
      },
    },
  },
}

export const analysis = {
  content: {
    rightSubtitle: "How Users Did",
    rightText: performance,
    leftSubtitle: "Potential Interface Changes",
    leftText: changes,
  },
};