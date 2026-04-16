"use client";

import { useMemo, useState } from "react";
import {
  coffeeProfiles,
  personalities,
  personalityOrder,
  questions,
  type PersonalityKey,
} from "./quiz-data";

type Screen = "intro" | "quiz" | "result";

const scoreQuestionWeight = (questionIndex: number) =>
  questionIndex >= questions.length - 2 ? 2 : 1;

const sortResults = (scores: Record<PersonalityKey, number>) =>
  [...personalityOrder].sort((a, b) => {
    if (scores[b] === scores[a]) {
      return personalityOrder.indexOf(a) - personalityOrder.indexOf(b);
    }

    return scores[b] - scores[a];
  });

export default function Home() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<PersonalityKey, number>>({
    boldExplorer: 0,
    smoothOperator: 0,
    cozyClassic: 0,
    wildCard: 0,
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const question = questions[currentQuestion];
  const orderedResults = useMemo(() => sortResults(scores), [scores]);
  const primaryResult = personalities[orderedResults[0]];
  const secondaryResult = personalities[orderedResults[1]];

  const handleStart = () => {
    setScreen("quiz");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScores({
      boldExplorer: 0,
      smoothOperator: 0,
      cozyClassic: 0,
      wildCard: 0,
    });
  };

  const handleAnswer = (personality: PersonalityKey, answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const weight = scoreQuestionWeight(currentQuestion);

    window.setTimeout(() => {
      setScores((prev) => ({
        ...prev,
        [personality]: prev[personality] + weight,
      }));

      const isLastQuestion = currentQuestion === questions.length - 1;

      if (isLastQuestion) {
        setScreen("result");
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }

      setSelectedAnswer(null);
    }, 260);
  };

  const handleRetake = () => {
    setScreen("intro");
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScores({
      boldExplorer: 0,
      smoothOperator: 0,
      cozyClassic: 0,
      wildCard: 0,
    });
  };

  const progress = screen === "quiz"
    ? ((currentQuestion + 1) / questions.length) * 100
    : 0;

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(214,166,81,0.18),transparent_28%),linear-gradient(180deg,#1b120e,#140f0c)] text-[#f6ead9]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d6a651]">
              NovaBrew Coffee Co.
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Coffee Taste Profile Quiz
            </h1>
          </div>
          <div className="rounded-full border border-[#d6a651]/30 bg-white/5 px-4 py-2 text-right text-sm text-[#cdbba5]">
            <div>Premium subscriber experience</div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#d6a651]">
              Bold MVP
            </div>
          </div>
        </header>

        {screen === "intro" && (
          <section className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-[#d6a651]/25 bg-[#f7e8c9]/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#d6a651]">
                Find your coffee personality
              </div>
              <div className="space-y-5">
                <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
                  Your perfect cup should feel like it was chosen for you.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-[#cebda8] sm:text-xl">
                  Answer seven fast questions and discover your primary coffee
                  personality, your secondary tendency, and the NovaBrew lineup
                  that best matches your taste.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <FeatureCard
                  label="7 questions"
                  value="Fast but thoughtful"
                />
                <FeatureCard
                  label="Primary + secondary"
                  value="More personal than a one-word label"
                />
                <FeatureCard
                  label="Coffee matching"
                  value="Built to guide real shipments"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  onClick={handleStart}
                  className="rounded-full bg-[#d6a651] px-7 py-4 text-base font-semibold text-[#22160f] transition hover:translate-y-[-1px] hover:bg-[#e0b262]"
                >
                  Start Quiz
                </button>
                <p className="text-sm leading-6 text-[#a89379]">
                  Designed for a premium, shareable first impression that turns
                  subscriber taste into something identity-driven.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[#d6a651]/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-[#d6a651]/20 bg-[linear-gradient(180deg,rgba(39,27,20,0.96),rgba(20,15,12,0.98))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d6a651]">
                  Preview outcome
                </p>
                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c4af96]">
                    Example result
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold">
                    Bold Explorer
                  </h3>
                  <p className="mt-3 leading-7 text-[#cdbba5]">
                    High-intensity taste, dramatic flavors, and a subscription
                    experience that feels memorable from the first box.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {["Midnight Summit", "Campfire Stories", "Double Down"].map(
                      (coffee) => (
                        <div
                          key={coffee}
                          className="rounded-2xl border border-[#d6a651]/15 bg-[#f9ead4]/5 px-4 py-3 text-sm text-[#f4e8d7]"
                        >
                          {coffee}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {screen === "quiz" && (
          <section className="flex flex-1 items-center justify-center py-6">
            <div className="w-full max-w-4xl rounded-[2rem] border border-[#d6a651]/20 bg-[linear-gradient(180deg,rgba(39,27,20,0.98),rgba(20,15,12,0.98))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d6a651]">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                  <p className="mt-2 text-sm text-[#bca992]">
                    {question.prompt}
                  </p>
                </div>
                <div className="min-w-[160px]">
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#d6a651] via-[#f0c57d] to-[#f8e6c6] transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                <div>
                  <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                    {question.question}
                  </h2>
                </div>

                <div className="grid gap-4">
                  {question.answers.map((answer, index) => (
                    <button
                      key={answer.text}
                      onClick={() => handleAnswer(answer.personality, index)}
                      className={`group rounded-[1.4rem] border px-5 py-5 text-left transition duration-200 sm:px-6 ${
                        selectedAnswer === index
                          ? "border-[#d6a651] bg-[#d6a651]/15"
                          : "border-white/10 bg-white/[0.03] hover:border-[#d6a651]/40 hover:bg-[#d6a651]/10"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d6a651]/25 bg-[#f9ead4]/5 text-sm uppercase tracking-[0.2em] text-[#d6a651]">
                          {String.fromCharCode(65 + index)}
                        </div>
                        <div>
                          <div className="text-lg font-medium text-[#f7ead8]">
                            {answer.text}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {screen === "result" && (
          <section className="flex flex-1 items-center justify-center py-6">
            <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2rem] border border-[#d6a651]/20 bg-[linear-gradient(180deg,rgba(39,27,20,0.98),rgba(20,15,12,0.98))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8">
                <p className="text-xs uppercase tracking-[0.32em] text-[#d6a651]">
                  Your primary result
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-none sm:text-6xl">
                  {primaryResult.name}
                </h2>
                <p className="mt-3 text-lg text-[#e8cfaa]">
                  {primaryResult.subtitle}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#cebda8] sm:text-lg">
                  {primaryResult.description}
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d6a651]">
                    Secondary tendency
                  </p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {secondaryResult.name}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-[#c6b29c]">
                        {secondaryResult.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={handleRetake}
                    className="rounded-full bg-[#d6a651] px-6 py-3 text-sm font-semibold text-[#20150f] transition hover:translate-y-[-1px] hover:bg-[#e1b466]"
                  >
                    Retake Quiz
                  </button>
                  <button
                    onClick={() => {
                      const shareText = `I got ${primaryResult.name} with ${secondaryResult.name} tendencies in the NovaBrew Coffee Taste Profile Quiz.`;
                      navigator.clipboard.writeText(shareText);
                    }}
                    className="rounded-full border border-[#d6a651]/35 px-6 py-3 text-sm font-semibold text-[#f6ead9] transition hover:bg-[#d6a651]/10"
                  >
                    Copy Result Summary
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[2rem] border border-[#d6a651]/20 bg-white/[0.04] p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#d6a651]">
                    NovaBrew match
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Coffees selected for your profile
                  </h3>
                  <p className="mt-3 leading-7 text-[#cebda8]">
                    This lineup matches your strongest coffee instincts while
                    still leaving room for your secondary side to show up.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {primaryResult.recommendation.map((coffee) => (
                      <div
                        key={coffee}
                        className="rounded-[1.25rem] border border-white/10 bg-[#f8ead1]/5 p-4"
                      >
                        <div className="text-lg font-medium">{coffee}</div>
                        <div className="mt-1 text-sm text-[#c4b19a]">
                          {coffeeProfiles[coffee]?.description}
                        </div>
                        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#9e8a73]">
                          Built for {primaryResult.name.toLowerCase()} energy.
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#d6a651]/20 bg-white/[0.04] p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#d6a651]">
                    Why it fits
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-[#cebda8] sm:text-base">
                    <div>
                      <span className="font-semibold text-[#f6ead9]">
                        Flavor profile:
                      </span>{" "}
                      {primaryResult.flavorNotes}
                    </div>
                    <div>
                      <span className="font-semibold text-[#f6ead9]">
                        Ideal ritual:
                      </span>{" "}
                      {primaryResult.ritual}
                    </div>
                    <div>
                      <span className="font-semibold text-[#f6ead9]">
                        Secondary nuance:
                      </span>{" "}
                      {secondaryResult.name} brings in a little extra dimension
                      to your profile, which is why your future recommendations
                      can flex between consistency and discovery.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function FeatureCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
      <div className="text-xs uppercase tracking-[0.22em] text-[#d6a651]">
        {label}
      </div>
      <div className="mt-3 text-sm leading-6 text-[#cdbba5]">{value}</div>
    </div>
  );
}
