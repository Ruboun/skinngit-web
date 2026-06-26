# instrait — Brand Story & Philosophy

## The Architecture of Voluntary Constraint

### 1. The Universal Escape Hatch

Modern productivity design is built on a fundamental lie: the myth of sustainable motivation. We are told that with the right dashboard, a gamified habit tracker, or enough positive reinforcement, we will naturally evolve into hyper-optimized versions of ourselves.

This ignores the biological reality of human nature.

The human brain is an ancient piece of bio-software, ruthlessly optimized for a single objective: **energy conservation**. When faced with friction, the subcortical brain immediately searches for an escape hatch. It does not matter what the friction is — the biological response is identical:

- The alarm going off at 5:30 AM for a grueling workout.
- A complex, unstructured block of work that requires deep focus.
- A meticulous daily ritual that demands absolute consistency before facing the world.

When a system gives you the freedom to negotiate, you will negotiate. If it allows you to move the deadline, you will move it. Infinite freedom does not breed progress — it breeds high entropy, decision paralysis, and eventual stagnation.

True execution is not born from a sudden spark of inspiration. **True execution is the byproduct of structural limitations.**

---

### 2. The Mechanics of the Strait

In geography, a **strait** is a narrow, compressed passage of water connecting two massive bodies. It is a place of extreme pressure and violent currents. A strait does not create new water — it simply forces existing volume through an unyielding, restricted space. By narrowing the path, it exponentially increases the velocity.

This is the foundational thesis of **instrait**.

It is a deliberate transition from an open, low-pressure ocean of *"I might do this today"* into a high-velocity, single-track corridor of *"This must be done."*

When you enter the strait, you are intentionally shrinking your universe down to a binary outcome. You are removing choice from the equation. You are acknowledging that your future self — the one who will wake up tired, distracted, or unmotivated — cannot be trusted with autonomy.

> **instrait is the tool you use in a moment of absolute clarity to dominate your inevitable moments of weakness.**

**Shrink the freedom. Scale the output.**

---

### 3. The Financial Anchor

An abstract commitment has zero weight. The brain easily dismisses psychological debt because there is no immediate biological feedback loop. To force the bio-software to comply, you must introduce asymmetrical risk. You must translate a digital commitment into tangible, material reality.

By anchoring your objective to a **financial pledge**, instrait aligns your evolutionary survival mechanisms with your goals.

Losing capital hurts. It registers in the brain as a direct threat to resources. When your money is locked behind a pledge, the psychological game changes entirely. Procrastination is no longer free. It suddenly has a clear, non-negotiable price tag.

You are no longer fighting for a vague, distant vision of future success. You are fighting right now to protect your assets. The system uses your own risk aversion as the primary engine of momentum.

---

### 4. The Strait Score

Every time you enter the strait and execute, the system registers it. Every time you break the agreement, the system registers that too.

**Strait Score** is your reputation — not a vanity metric, but a precise reflection of how reliably you follow through on your own word. It is the single number that separates those who plan from those who execute.

The scoring system is honest and unforgiving:
- Completing a pledged commitment raises your score.
- Failing one lowers it.
- Sustained execution unlocks titles: from *Beginner* to *Unbreakable*.
- Consistent collapse triggers **Redemption Mode** — a 7-day streak required to recover your standing.

There are no shortcuts. The score is a mirror.

---

## The instrait Manifest

```
instrait is not a habit tracker.
It is executive infrastructure for voluntary constraint.

We do not build features to make you feel good.
We build systems to keep you honest.

The architecture is universal:
1. Define the node — the goal, the project, the habit, the task.
2. Set the perimeter — the strict deadline.
3. Lock the asset — the financial pledge.

Once the agreement is applied, the system initiates.
The exit routes are sealed. The narrative is locked.

There are no extensions. There is no appeal process.
There is only the line, the pressure, and the execution.

instrait.
Execution through constraint.
```

---

## Core Brand Language

| Element | Text |
|---|---|
| **Name** | instrait (lowercase; capital I at sentence start is fine) |
| **Tagline** | Shrink the freedom. Scale the output. |
| **Onboarding slide 1** | Define the Node — Set a goal, project, habit, or task with a strict deadline. No ambiguity. No room to negotiate. |
| **Onboarding slide 2** | Lock the Asset — Anchor your commitment to real capital. Procrastination stops being free — it has a price. |
| **Onboarding slide 3** | Execute the Strait — Once the agreement is applied, the exit routes are sealed. There is only the line, the pressure, and the execution. |
| **Auth subtitle** | Lock your commitment. Pledge your capital. Execute without an escape route. |
| **About tagline** | Enter the strait. |
| **Footer** | instrait — execution infrastructure for those who keep their word. |
| **Premium** | instrait Premium — Remove all limits. No ceiling on your execution. |
| **Gamification metric** | Strait Score (internal DB column remains `skin_score`) |
| **Financial mechanic** | Pledge / Pledges — never "stake" / "stakes" in any user-facing text |

---

## What instrait Is Not

- **Not a motivational app.** instrait does not inspire — it enforces.
- **Not a gamified to-do list.** The pledge mechanic is not a game; it is a binding agreement with your future self.
- **Not a wellness platform.** There are no streaks for streaks' sake, no dopamine rewards for mediocre effort.
- **Not forgiving by design.** Extensions, renegotiations, and soft deadlines are the enemy of execution.

---

## Technical Naming Reference

| Identifier | Value | Notes |
|---|---|---|
| User-facing name | instrait | All copy, UI, marketing |
| Expo slug | selfimp-app | Do not change — build infrastructure |
| iOS bundle ID | com.selfimp.app | Do not change — App Store |
| Android package | com.selfimp.app | Do not change — Google Play |
| App scheme | selfimp | Do not change — deep links + OAuth |
| npm scope | @skinngit/* | Do not change — monorepo workspace |
| DB gamification column | skin_score | Do not change — existing migrations |
