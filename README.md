# 🧠 React Quiz App

This is a simple, responsive **Quiz App built with React**. It presents multiple-choice questions to the user, tracks their selected answers, and displays the final score after completion.

---

## ✨ Features

- Three multiple-choice questions
- Highlights selected answers
- Prevents moving forward without selecting an option
- Displays score at the end
- Option to restart the quiz
- Mobile-responsive with Tailwind CSS

---

## 🚀 Tech Stack

- React
- Tailwind CSS

---

## 📜 How It Works

1. The user navigates through questions using **Next** and **Previous** buttons.
2. Selection is saved in `userAnswers` (state).
3. Navigation is disabled unless an option is selected.
4. Final score is calculated by comparing user responses to `questionBank`'s correct answers.
5. On finish, a **Result** component displays the score with an option to **Restart**.
