export type PersonalityKey =
  | "boldExplorer"
  | "smoothOperator"
  | "cozyClassic"
  | "wildCard";

export type Personality = {
  key: PersonalityKey;
  name: string;
  subtitle: string;
  description: string;
  recommendation: string[];
  flavorNotes: string;
  ritual: string;
};

export type CoffeeProfile = {
  name: string;
  description: string;
};

export type QuizQuestion = {
  id: number;
  question: string;
  prompt: string;
  answers: Array<{
    text: string;
    personality: PersonalityKey;
  }>;
};

export const personalityOrder: PersonalityKey[] = [
  "boldExplorer",
  "smoothOperator",
  "cozyClassic",
  "wildCard",
];

export const personalities: Record<PersonalityKey, Personality> = {
  boldExplorer: {
    key: "boldExplorer",
    name: "Bold Explorer",
    subtitle: "All-in energy, zero apologies.",
    description:
      "You want a coffee experience with intensity, character, and momentum. You are drawn to dramatic flavor, decisive choices, and products that feel memorable from the first sip.",
    recommendation: ["Midnight Summit", "Campfire Stories", "Double Down"],
    flavorNotes: "Smoky, bold, roasty, high-conviction.",
    ritual:
      "Best for mornings when you want momentum, edge, and a cup that feels like a decision.",
  },
  smoothOperator: {
    key: "smoothOperator",
    name: "Smooth Operator",
    subtitle: "Balanced taste with polished instincts.",
    description:
      "You appreciate coffee that feels refined, dependable, and quietly excellent. Your ideal cup is well-made, easy to return to, and sophisticated without trying too hard.",
    recommendation: ["Sunrise Blend", "Velvet Fog", "Sunday Paper"],
    flavorNotes: "Balanced, smooth, chocolatey, quietly premium.",
    ritual:
      "Best for everyday rituals where consistency, quality, and calm confidence matter most.",
  },
  cozyClassic: {
    key: "cozyClassic",
    name: "Cozy Classic",
    subtitle: "Warmth first. Comfort always.",
    description:
      "You want coffee that feels like a soft landing. Familiar flavors, easy comfort, and a ritual that slips naturally into your life matter more to you than novelty for novelty's sake.",
    recommendation: ["Golden Hour", "The Purist"],
    flavorNotes: "Soft, sweet, mellow, comforting.",
    ritual:
      "Best for slow mornings, recharge moments, and the kind of cup that makes the room feel warmer.",
  },
  wildCard: {
    key: "wildCard",
    name: "Wild Card",
    subtitle: "Curious palate. Discovery mindset.",
    description:
      "You are here for surprise, experimentation, and the thrill of trying something you did not even know you wanted. For you, a good coffee subscription should feel like a passport, not a routine.",
    recommendation: ["Off the Map", "Wildflower"],
    flavorNotes: "Fruity, bright, unexpected, exploratory.",
    ritual:
      "Best for days when you want novelty, conversation, and a cup with a point of view.",
  },
};

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "It is your ideal Saturday morning. What feels right?",
    prompt: "Choose the atmosphere you want to step into.",
    answers: [
      {
        text: "A sharp espresso, a clean kitchen, and a full day ahead.",
        personality: "boldExplorer",
      },
      {
        text: "A cafe table, a good playlist, and an easy morning routine.",
        personality: "smoothOperator",
      },
      {
        text: "A blanket, a book, and something warm before anyone talks to me.",
        personality: "cozyClassic",
      },
      {
        text: "A new coffee shop across town with a bag you have never tried before.",
        personality: "wildCard",
      },
    ],
  },
  {
    id: 2,
    question: "Which flavor profile sounds most like home?",
    prompt: "Go with the option that feels instinctively right.",
    answers: [
      {
        text: "Smoky, intense, and a little bitter in the best way.",
        personality: "boldExplorer",
      },
      {
        text: "Smooth, balanced, chocolatey, dependable.",
        personality: "smoothOperator",
      },
      {
        text: "Soft, sweet, comforting, maybe vanilla or caramel.",
        personality: "cozyClassic",
      },
      {
        text: "Bright, floral, funky, or unexpectedly fruity.",
        personality: "wildCard",
      },
    ],
  },
  {
    id: 3,
    question: "Pick the product launch energy that feels most like you.",
    prompt: "This is less about work and more about your taste for intensity.",
    answers: [
      {
        text: "Confident, high-stakes, all-in, no hedging.",
        personality: "boldExplorer",
      },
      {
        text: "Clean, polished, well-executed, quietly impressive.",
        personality: "smoothOperator",
      },
      {
        text: "Welcoming, warm, easy to love.",
        personality: "cozyClassic",
      },
      {
        text: "Surprising, experimental, impossible to ignore.",
        personality: "wildCard",
      },
    ],
  },
  {
    id: 4,
    question: "Which visual mood board feels most appealing?",
    prompt: "Treat this like an instinctive design choice.",
    answers: [
      {
        text: "Deep browns, black, gold, dramatic lighting.",
        personality: "boldExplorer",
      },
      {
        text: "Cream, stone, espresso, clean lines.",
        personality: "smoothOperator",
      },
      {
        text: "Warm beige, soft amber, cozy textures.",
        personality: "cozyClassic",
      },
      {
        text: "Bright contrasts, unexpected colors, unusual shapes.",
        personality: "wildCard",
      },
    ],
  },
  {
    id: 5,
    question: "When trying something new, what is your instinct?",
    prompt: "How you discover things says a lot about your coffee style.",
    answers: [
      {
        text: "Go bold. If I am doing it, I want the full experience.",
        personality: "boldExplorer",
      },
      {
        text: "Start with the version most people trust.",
        personality: "smoothOperator",
      },
      {
        text: "Pick the one that feels easiest to enjoy.",
        personality: "cozyClassic",
      },
      {
        text: "Choose the weirdest option. That is the point.",
        personality: "wildCard",
      },
    ],
  },
  {
    id: 6,
    question: "What would make a subscription feel worth keeping?",
    prompt: "This is the NovaBrew strategy question hiding in plain sight.",
    answers: [
      {
        text: "It consistently sends me something powerful and memorable.",
        personality: "boldExplorer",
      },
      {
        text: "It understands my taste and gets the basics right every time.",
        personality: "smoothOperator",
      },
      {
        text: "It feels comforting, reliable, and easy to fit into my life.",
        personality: "cozyClassic",
      },
      {
        text: "It keeps surprising me with things I never would have picked myself.",
        personality: "wildCard",
      },
    ],
  },
  {
    id: 7,
    question: "Which line sounds most like you?",
    prompt: "Pick the one that feels like something you would actually say.",
    answers: [
      {
        text: '"Make it strong and make it count."',
        personality: "boldExplorer",
      },
      {
        text: '"I like quality that does not need to show off."',
        personality: "smoothOperator",
      },
      {
        text: '"I want something that feels like my favorite sweater."',
        personality: "cozyClassic",
      },
      {
        text: '"If it is unusual, I probably want to try it."',
        personality: "wildCard",
      },
    ],
  },
];

export const coffeeProfiles: Record<string, CoffeeProfile> = {
  "Midnight Summit": {
    name: "Midnight Summit",
    description:
      "A smoky dark roast with real depth and a strong finish. Built for drinkers who want intensity, structure, and zero softness.",
  },
  "Campfire Stories": {
    name: "Campfire Stories",
    description:
      "A bold, dessert-leaning roast with toasted sweetness and s'mores energy. It feels dramatic, warm, and unmistakably rich.",
  },
  "Double Down": {
    name: "Double Down",
    description:
      "An extra-bold espresso-style roast with thick body and no-nonsense character. Ideal when you want your coffee to make a statement.",
  },
  "Sunrise Blend": {
    name: "Sunrise Blend",
    description:
      "A polished medium roast with caramel and chocolate notes. Reliable, smooth, and easy to reach for every morning.",
  },
  "Velvet Fog": {
    name: "Velvet Fog",
    description:
      "A medium-light cup with creamy texture, almond warmth, and cocoa softness. It feels refined without trying too hard.",
  },
  "Sunday Paper": {
    name: "Sunday Paper",
    description:
      "A comforting house blend with hazelnut and vanilla notes. Familiar, balanced, and made for rituals you want to repeat.",
  },
  "Golden Hour": {
    name: "Golden Hour",
    description:
      "A soft light-medium roast with honey sweetness and an easy finish. Warm, inviting, and perfect for slow mornings.",
  },
  "The Purist": {
    name: "The Purist",
    description:
      "A clean single-origin coffee with clarity and restraint. It lets the bean speak for itself without extra noise.",
  },
  "Off the Map": {
    name: "Off the Map",
    description:
      "A rotating experimental micro-lot built around surprise. Funky fruit, unusual processing, and high-curiosity energy.",
  },
  Wildflower: {
    name: "Wildflower",
    description:
      "A bright, floral light roast with expressive acidity and lift. Best for drinkers who want something vivid and unexpected.",
  },
};
