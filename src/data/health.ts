export type Urgency = "watch" | "soon" | "emergency";

export type Symptom = {
  id: string;
  label: string;
  group: "Bird" | "Breathing" | "Gut" | "Eggs" | "Legs and skin";
};

export const symptoms: Symptom[] = [
  { id: "lethargy", label: "Fluffed up, hunched, or much quieter than usual", group: "Bird" },
  { id: "off-feed", label: "Not eating or drinking", group: "Bird" },
  { id: "isolating", label: "Hiding from the others", group: "Bird" },
  { id: "sudden-deaths", label: "Sudden deaths, or several birds sick at once", group: "Bird" },
  { id: "sneeze", label: "Sneezing, cough, or a runny nose", group: "Breathing" },
  { id: "swollen-face", label: "Swollen face, wattles, or sinuses", group: "Breathing" },
  { id: "bubbly-eye", label: "Bubbles or foam in an eye", group: "Breathing" },
  { id: "gape", label: "Gasping or open-mouth breathing at rest", group: "Breathing" },
  { id: "purple-comb", label: "Comb going purple or blue", group: "Breathing" },
  { id: "diarrhea", label: "Watery droppings", group: "Gut" },
  { id: "blood-droppings", label: "Blood or a chocolate color in droppings", group: "Gut" },
  { id: "crop-hard", label: "Crop still hard and full in the morning", group: "Gut" },
  { id: "crop-sour", label: "Crop is squishy and smells sour", group: "Gut" },
  { id: "straining", label: "Straining, tail down, penguin walk — and no egg", group: "Eggs" },
  { id: "soft-shell", label: "Soft, thin, or shell-less eggs", group: "Eggs" },
  { id: "stopped-laying", label: "Stopped laying, but still bright and eating", group: "Eggs" },
  { id: "pale-comb", label: "Comb much paler than her flockmates", group: "Legs and skin" },
  { id: "feather-loss", label: "Patchy feather loss", group: "Legs and skin" },
  { id: "mites", label: "Tiny bugs at the vent, or on the roosts at night", group: "Legs and skin" },
  { id: "limp", label: "Limping", group: "Legs and skin" },
  { id: "foot-pad", label: "Swollen foot pad or a black scab", group: "Legs and skin" },
  { id: "heat-signs", label: "Panting with wings held out on a hot day", group: "Bird" },
  { id: "frost", label: "Black tips on the comb after a freeze", group: "Legs and skin" },
];

export const symptomGroups = ["Bird", "Breathing", "Gut", "Eggs", "Legs and skin"] as const;

type Condition = {
  id: string;
  name: string;
  urgency: Urgency;
  summary: string;
  steps: string[];
  weights: Record<string, number>;
  unless?: string[];
};

const conditions: Condition[] = [
  {
    id: "reportable",
    name: "Possible reportable disease",
    urgency: "emergency",
    summary:
      "Sudden deaths, a purple comb, swollen heads, or a crash across the flock can be avian influenza or another reportable disease. Treat it that way until an official says otherwise.",
    steps: [
      "Do not carry birds to a clinic, a feed store, or a neighbor. Call your veterinarian or state animal-health office first and describe what you see.",
      "Keep a dedicated pair of boots at the coop. Don’t visit another flock.",
      "Note how many birds, how fast it moved, and any swelling or odd droppings. That timeline helps the person on the phone.",
    ],
    weights: {
      "sudden-deaths": 8,
      "purple-comb": 3,
      "swollen-face": 2,
      gape: 2,
    },
  },
  {
    id: "egg-bound",
    name: "Egg binding",
    urgency: "emergency",
    summary:
      "A hen who strains, walks like a penguin, and doesn’t pass an egg can die the same day. This is not a “wait and see” problem.",
    steps: [
      "Put her somewhere warm, dim, and quiet with water. A warm bath up to the vent can relax her. Dry her fully afterward.",
      "If you already keep a poultry calcium supplement and know how to give it, a dose can help a hen whose shell gland is stalling. Don’t experiment with random pills.",
      "Call a vet if she hasn’t passed an egg within about an hour, or sooner if she is limp or closing her eyes. Never break the egg inside her.",
    ],
    weights: { straining: 6, lethargy: 1, isolating: 1, "off-feed": 1 },
  },
  {
    id: "heat",
    name: "Heat stress",
    urgency: "soon",
    summary:
      "Chickens cool by panting. Wings out on a hot afternoon can be ordinary. A bird still gasping in the shade, especially a heavy breed, is overheating.",
    steps: [
      "Move her to shade and moving air. Offer cool (not ice-cold) water. A frozen bottle in the run gives them a place to sit near.",
      "Don’t force her head into water. Do bring the drinker to her if she won’t walk.",
      "Electrolytes are a short tool for a heat wave, not a daily drink. Follow the packet so you don’t throw off a normal day.",
    ],
    weights: { "heat-signs": 6, gape: 1, lethargy: 1 },
  },
  {
    id: "coccidiosis",
    name: "Coccidiosis",
    urgency: "soon",
    summary:
      "Mostly a disease of chicks and young birds in damp bedding. Blood or a dark chocolate color in the droppings, plus a hunched, off-feed bird, should be treated the same day.",
    steps: [
      "Call a vet or ask a feed store for a labeled coccidiostat such as amprolium, and follow that label. This guide will not invent a dose.",
      "Dry the brooder. Wet shavings are the usual reason this comes back.",
      "If those chicks were vaccinated for coccidiosis, medicated starter and some treatments can undo the vaccine. Tell the vet which you used.",
    ],
    weights: {
      "blood-droppings": 5,
      lethargy: 2,
      "off-feed": 2,
      diarrhea: 1,
      isolating: 1,
    },
  },
  {
    id: "respiratory",
    name: "Respiratory infection",
    urgency: "soon",
    summary:
      "One sneeze in a dusty coop can be nothing. Sneezing that continues, foam in the eye, or a swollen face is a respiratory infection until you know which one. Some of them never really leave a flock.",
    steps: [
      "Separate the sick bird if you can do it without chilling her. Don’t bring new birds in, and don’t take birds out to “rehome the problem.”",
      "Call a vet. Antibiotics are not a guess, and some of these diseases are reportable or permanent.",
      "Quarantine any new bird for 30 days, far from this coop, before you try again.",
    ],
    weights: { sneeze: 3, "swollen-face": 3, "bubbly-eye": 4, gape: 2, lethargy: 1 },
  },
  {
    id: "impacted",
    name: "Impacted crop",
    urgency: "soon",
    summary:
      "The crop should be full at bedtime and flat by morning. A crop that is still hard and packed at dawn is impacted — often from long grass, string, or bedding.",
    steps: [
      "Remove feed, leave water, and call a vet the same day if it hasn’t softened. Do not massage a hard crop hard enough to push material up the throat. Birds aspirate that way.",
      "Check the run for baling twine, long grass, and Styrofoam. They eat all of it.",
      "A sour, watery crop is a different problem. Don’t treat them as the same thing.",
    ],
    weights: { "crop-hard": 6, "off-feed": 2, lethargy: 1 },
  },
  {
    id: "sour",
    name: "Sour crop",
    urgency: "soon",
    summary:
      "A crop that is squishy, slow to empty, and smells like yeast is sour crop. It often follows a stall, dirty water, or a bird who is already off.",
    steps: [
      "Isolate her with water and no treats. A vet can confirm yeast and flush a crop safely. Home remedies that make her vomit are a good way to choke her.",
      "Wash the drinker. Biofilm keeps this going.",
      "If the crop is hard instead of squishy, read it as an impaction.",
    ],
    weights: { "crop-sour": 6, "off-feed": 1, lethargy: 1 },
  },
  {
    id: "bumblefoot",
    name: "Bumblefoot",
    urgency: "soon",
    summary:
      "A swollen foot pad with a black scab is usually an abscess from a splinter, a wire floor, or a hard landing off a high roost.",
    steps: [
      "Lower the roosts, cover sharp edges, and stop using wire as a floor. The foot will not heal in the setup that cut it.",
      "A small early scab in a bright bird can be a vet-guided soak and bandage. A hot, swollen foot needs a vet — don’t carve into a pad at the kitchen table.",
      "Heavy breeds need a ramp more than light ones.",
    ],
    weights: { "foot-pad": 6, limp: 2 },
  },
  {
    id: "mites",
    name: "Mites or lice",
    urgency: "soon",
    summary:
      "Northern fowl mites and lice live on the bird, especially under the vent. Red mites hide in coop cracks by day and feed at night, so a clean-looking hen can still be covered in bites.",
    steps: [
      "Part feathers below the vent in daylight. For red mites, check the underside of roosts with a flashlight after dark.",
      "Treat the birds and the coop with a product actually labeled for poultry, and repeat on the label’s schedule so you hit the next hatch.",
      "Don’t dust the flock with pool-grade diatomaceous earth or a cat product because a forum said to.",
    ],
    weights: { mites: 6, "feather-loss": 2, "pale-comb": 2, "stopped-laying": 1 },
  },
  {
    id: "calcium",
    name: "Thin shells",
    urgency: "watch",
    summary:
      "Soft or sandy shells in a laying hen are often calcium, heat, or age. A pullet’s very first eggs can be weird for a few days and then settle. A sudden run of shell-less eggs in a mature hen is a ration problem or a sick bird.",
    steps: [
      "Offer oyster shell free-choice, in its own dish, not stirred into the grower feed the young birds are eating.",
      "Make sure they are actually on layer feed, and that treats are under about a tenth of the diet.",
      "If she is also straining or lethargic, this is not a calcium lecture. Treat it as an emergency.",
    ],
    weights: { "soft-shell": 5, "stopped-laying": 1 },
  },
  {
    id: "molt",
    name: "Molt — often normal",
    urgency: "watch",
    summary:
      "Once a year, usually as days shorten, hens drop feathers and pause laying. If she is bright, eating, and the loss is roughly symmetrical, that is molt. Pin feathers coming in are tender.",
    steps: [
      "Keep the protein in a complete feed. A few mealworms are a treat, not a cure.",
      "Don’t add overnight lighting in the middle of a hard molt just to force eggs.",
      "If she is fluffed, losing weight, or bleeding at the skin, it isn’t only molt.",
    ],
    weights: { "feather-loss": 3, "stopped-laying": 2 },
    unless: ["lethargy", "off-feed", "blood-droppings", "gape", "purple-comb", "sudden-deaths", "straining"],
  },
  {
    id: "frostbite",
    name: "Frostbite",
    urgency: "watch",
    summary:
      "Black tips on a comb or wattles after a freeze are frostbitten tissue. It looks worse as it dries. Birds lose toes the same way when they sleep with wet feet in a draft.",
    steps: [
      "Don’t rub the comb, and don’t pull black tissue off. Keep it clean and watch for swelling or a bad smell.",
      "Fix the cause: moisture and a draft at roost height. Leave high vents open so damp air can leave.",
      "A thin film of petroleum jelly before the next cold night helps a large single comb. It does nothing for tissue that already froze.",
    ],
    weights: { frost: 6 },
  },
  {
    id: "pale",
    name: "Pale comb",
    urgency: "watch",
    summary:
      "A comb goes pale when a hen isn’t laying, when she has mites, or when she is actually anemic or ill. Compare her with a flockmate of the same age before you panic.",
    steps: [
      "Look under the vent for mites and at the droppings for blood.",
      "A pullet who hasn’t started, or a hen in molt, can look washed out and be fine.",
      "Pale plus fluffed and off-feed is a sick bird. Separate her and call a vet if she declines by evening.",
    ],
    weights: { "pale-comb": 4, lethargy: 1, mites: 1 },
  },
  {
    id: "limp-watch",
    name: "Limping",
    urgency: "watch",
    summary:
      "Check the pad, the toes, and whether a toe is swollen like a sprain or cut. A limp with a black scab is bumblefoot. A limp after a fall from a high roost may be a sprain — or a break.",
    steps: [
      "Confine her where she can reach water and doesn’t have to jump.",
      "If the leg sits at a wrong angle, or she can’t stand by the next morning, see a vet. Splinting a broken leg wrong makes it worse.",
      "Look at the roost height and landing zone so the next bird doesn’t do the same thing.",
    ],
    weights: { limp: 4 },
  },
  {
    id: "off",
    name: "A bird that’s off",
    urgency: "watch",
    summary:
      "The useful sign is change. A hen who is normally second off the roost and today is fluffed in a corner is telling you something, even before you know the name of it.",
    steps: [
      "Separate her somewhere warm and draft-free, with water she can reach without walking across the run.",
      "Look at the crop, the vent, the eyes, the feet, and the droppings. Write it down.",
      "If she is worse by evening — colder, eyes shut, not drinking — don’t wait the weekend out.",
    ],
    weights: { lethargy: 3, "off-feed": 3, isolating: 2, diarrhea: 1 },
  },
];

export type Assessment = Condition & { score: number };

export function assess(selected: string[]): Assessment[] {
  if (selected.length === 0) return [];
  const chosen = new Set(selected);
  const ranked = conditions
    .map((condition) => {
      let score = 0;
      for (const [id, weight] of Object.entries(condition.weights)) {
        if (chosen.has(id)) score += weight;
      }
      if (condition.unless?.some((id) => chosen.has(id))) score *= 0.15;
      return { ...condition, score };
    })
    .filter((condition) => condition.score >= 3)
    .sort((a, b) => b.score - a.score);
  return ranked.slice(0, 3);
}
