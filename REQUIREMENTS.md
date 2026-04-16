# NovaBrew Coffee Taste Profile Quiz - Requirements

## Overview
A web-based personality quiz that matches coffee subscribers to their coffee personality and recommends specific NovaBrew coffees based on their results. The quiz should feel premium, bold, and brand-forward while still being easy and fun to complete. It is designed to create a personalized first impression for new subscribers and support NovaBrew's shift from transactional retention to identity-based retention.

## Personality Types

### Bold Explorer
A high-intensity coffee drinker who wants something powerful, memorable, and full of character. This personality is drawn to dark roasts, strong flavor, and a sense of confidence and adventure.

### Smooth Operator
A balanced, polished coffee drinker who appreciates quality, consistency, and understated sophistication. This personality likes medium roasts and flavors that feel dependable, refined, and easy to return to.

### Cozy Classic
A comfort-first coffee drinker who wants warmth, softness, and a ritual that fits naturally into everyday life. This personality is drawn to coffees that feel familiar, sweet, and easy to love.

### Wild Card
An experimental coffee drinker who actively seeks surprise, unusual flavor notes, and coffees they would never find on a normal menu. This personality wants discovery, novelty, and a sense of exploration.

## Coffee Pairings
- **Bold Explorer:** Midnight Summit, Campfire Stories, Double Down
- **Smooth Operator:** Sunrise Blend, Velvet Fog, Sunday Paper
- **Cozy Classic:** Golden Hour, The Purist
- **Wild Card:** Off the Map, Wildflower

## Quiz Questions

### Question 1
**It is your ideal Saturday morning. What feels right?**
- A) A sharp espresso, a clean kitchen, and a full day ahead. -> Bold Explorer
- B) A cafe table, a good playlist, and an easy morning routine. -> Smooth Operator
- C) A blanket, a book, and something warm before anyone talks to me. -> Cozy Classic
- D) A new coffee shop across town with a bag you have never tried before. -> Wild Card

### Question 2
**Which flavor profile sounds most like home?**
- A) Smoky, intense, and a little bitter in the best way. -> Bold Explorer
- B) Smooth, balanced, chocolatey, dependable. -> Smooth Operator
- C) Soft, sweet, comforting, maybe vanilla or caramel. -> Cozy Classic
- D) Bright, floral, funky, or unexpectedly fruity. -> Wild Card

### Question 3
**Pick the product launch energy that feels most like you.**
- A) Confident, high-stakes, all-in, no hedging. -> Bold Explorer
- B) Clean, polished, well-executed, quietly impressive. -> Smooth Operator
- C) Welcoming, warm, easy to love. -> Cozy Classic
- D) Surprising, experimental, impossible to ignore. -> Wild Card

### Question 4
**Which visual mood board feels most appealing?**
- A) Deep browns, black, gold, dramatic lighting. -> Bold Explorer
- B) Cream, stone, espresso, clean lines. -> Smooth Operator
- C) Warm beige, soft amber, cozy textures. -> Cozy Classic
- D) Bright contrasts, unexpected colors, unusual shapes. -> Wild Card

### Question 5
**When trying something new, what is your instinct?**
- A) Go bold. If I am doing it, I want the full experience. -> Bold Explorer
- B) Start with the version most people trust. -> Smooth Operator
- C) Pick the one that feels easiest to enjoy. -> Cozy Classic
- D) Choose the weirdest option. That is the point. -> Wild Card

### Question 6
**What would make a subscription feel worth keeping?**
- A) It consistently sends me something powerful and memorable. -> Bold Explorer
- B) It understands my taste and gets the basics right every time. -> Smooth Operator
- C) It feels comforting, reliable, and easy to fit into my life. -> Cozy Classic
- D) It keeps surprising me with things I never would have picked myself. -> Wild Card

### Question 7
**Which line sounds most like you?**
- A) "Make it strong and make it count." -> Bold Explorer
- B) "I like quality that does not need to show off." -> Smooth Operator
- C) "I want something that feels like my favorite sweater." -> Cozy Classic
- D) "If it is unusual, I probably want to try it." -> Wild Card

## Quiz Logic
- Each answer maps to one personality type.
- Track a running tally across all questions.
- At the end, the personality with the highest count is the primary result.
- Also show the second-highest personality as a secondary tendency.
- In case of a tie, prefer the result from the later questions that are more identity-oriented, or use a deterministic tie-break rule in the build.

## Visual Style
The quiz should use the bold visual direction. It should feel premium, confident, and dramatic, with a dark background, rich accent colors, strong typography, and a high-end coffee-bar energy. The interface should feel polished and modern rather than cute or minimal. The overall impression should be that NovaBrew is a premium brand with taste and confidence.

## Extra Features
- **Images:** Skip for version one.
- **Icons or emoji in answer options:** No.
- **Question style:** Mix of direct preference questions, lifestyle questions, and a few visual-style prompts.

## Technical Notes
- Built with Next.js and Tailwind CSS.
- Single-page app with smooth transitions between questions.
- Mobile-responsive and works well on phones.
- Results page should be visually strong and easy to share.
- The build should prioritize clarity, speed, and a polished MVP over unnecessary complexity.
