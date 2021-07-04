import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python or Javascript",
    answerA: "Python",
    answerB: "Javascript",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: "Julia or Rust",
    answerA: "Julia",
    answerB: "Rust",
    votesA: 2,
    votesB: 4,
  },
  {
    id: 3,
    question: "Svelte or React",
    answerA: "Svelte",
    answerB: "React",
    votesA: 100,
    votesB: 4,
  },
]);

export default PollStore;
