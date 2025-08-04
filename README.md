# 🔢 JavaScript Challenge — Day 6: Odd, Even, or Special?

Part of my personal **Code Sprint 30 – 30 Days of Consistent JavaScript** challenge.  
On day 6, I built a simple yet interactive logic program that tests user-input numbers to determine if they're **odd**, **even**, **multiples of 10**, or even **negative**.

---

## 🎯 Challenge Goals

- Strengthen understanding of nested conditions (`if`, `else if`, `else`)
- Use modulus operator (`%`) to check number properties
- Create a looping input system
- Validate input and provide human-friendly CLI output
- Practice condition ordering for most relevant results

---

## 💻 Program Description

This program runs interactively:

1. User enters a **number**
2. Program responds with:
   - 🔸 **Even**
   - 🔹 **Odd**
   - 🎉 **Multiple of 10**
   - 📉 **Negative number**
3. If user types `"exit"` → program quits
4. If input isn't a number → shows error message

---

## 🧠 Implemented Features

- `prompt()` for repeated input
- `parseFloat()` for input conversion
- `isNaN()` validation + fun responses 😅
- Checks for **negatives first** before other categories
- `while (true)` + `break` control structure
- Condition ordering by priority
- Unique emojis per category → enhanced UX

---

## 🧪 Sample Output

<pre><code>
Enter a number! (type 'exit' to quit)
➡️ 27 ➤ Hey, this is an odd number! 🔹
➡️ 20 ➤ Wow, this is even and a multiple of 10! 🎉
➡️ -8 ➤ 📉 That's a negative number...
➡️ haha ➤ LOL, that's not a number 😅
➡️ exit ➤ Okay, exiting program. Bye 👋
</code></pre>

---

## 🔧 Bonus Challenges Implemented

| Additional Feature                   | Status |
|----------------------------------|--------|
| Looping until "exit"     | ✅     |
| Negative number check             | ✅     |
| Multiple of 10 + Even with special emoji | ✅ |
| Number input validation (NaN)       | ✅     |
| Emoji output with casual style| ✅     |

---

## 🔍 Personal Insights

This seemingly simple challenge taught me valuable lessons:
- The importance of `if-else` ordering to prevent logic conflicts
- How to make programs more flexible with loops and exit control
- Why UX matters even in CLI applications
- Ways to present technical information in friendly, meaningful ways

I also realized that overlapping conditions (e.g., a number could be even, multiple of 10, and negative) need layered handling, and not all conditions can be handled with a single `if`.

---

## 📌 Author

Made with logic, loops, and a touch of humor by 
**Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-main-portfolio/)

---

> “Logic might be binary, but the way we treat users shouldn't be.”  
> Let’s go to [Day 7 → To-Do CLI or Array Games](#) 📝