<script>
  import PollStore from "../stores/PollStore.js";
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let dispatch = createEventDispatcher();
  let field = {
      question: "",
      answerA: "",
      answerB: "",
    },
    error = {
      question: "",
      answerA: "",
      answerB: "",
    },
    valid = false;

  const submitHandler = () => {
    valid = true;
    if (field.question.trim().length < 5) {
      valid = false;
      error.question = "Question must be atleast 5 characters long";
    } else {
      error.question = "";
    }
    if (field.answerA.trim().length < 1) {
      valid = false;
      error.answerA = "Answer cannot be empty";
    } else {
      error.answerA = "";
    }
    if (field.answerB.trim().length < 1) {
      valid = false;
      error.answerB = "Answer cannot be empty";
    } else {
      error.answerB = "";
    }

    // Add a new poll here
    if (valid) {
      let poll = { ...field, votesA: 0, votesB: 0, id: Math.random };

      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add", poll);
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input type="text" id="question" bind:value={field.question} />
    <div class="error">{error.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A)</label>
    <input type="text" id="answer-a" bind:value={field.answerA} />
    <div class="error">{error.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B)</label>
    <input type="text" id="answer-b" bind:value={field.answerB} />
    <div class="error">{error.answerB}</div>
  </div>
  <Button type={"secondary"} flat={true}><div>Add Poll</div></Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    font: serif;
    font-weight: bold;
    text-align: left;
    font-size: 10;
    color: #d91b42;
  }
</style>
