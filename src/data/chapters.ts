export type AppPath = "/" | "/timeline" | "/guide" | "/breeds" | "/health" | "/flock";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string }
  | { type: "cta"; to: AppPath; label: string };

export type Section = { heading: string; blocks: Block[] };

export type Chapter = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  minutes: number;
  widget?: "space" | "feed" | "daylight";
  sections: Section[];
};

export const chapters: Chapter[] = [
  {
    slug: "before-you-start",
    number: "01",
    title: "Before you start",
    dek: "Ordinances, numbers, and the real cost of a chick that was only a few dollars.",
    minutes: 6,
    sections: [
      {
        heading: "A flock, not a single bird",
        blocks: [
          {
            type: "p",
            text: "Chickens are flock animals. One hen is a stressed hen. Three is a minimum that still works if you lose a bird; four to six is the usual starter flock and still legal in a lot of towns that cap you at six.",
          },
          {
            type: "p",
            text: "They need you every day. Water freezes, eggs pile up, and a raccoon only needs one night. Budget ten minutes morning and evening, a longer session once a week, and a person who will latch the coop when you are gone.",
          },
        ],
      },
      {
        heading: "Rules before lumber",
        blocks: [
          {
            type: "p",
            text: "Read the municipal code and the HOA before you buy birds. Many places ban roosters, limit hens to four or six, and set the coop back from the lot line. “They’re pets” is not a variance.",
          },
          {
            type: "ul",
            items: [
              "Roosters are not required for eggs. They are required for chicks. They crow, and they sometimes need to be rehomed.",
              "Setbacks and fence height are easier to meet on paper than after the coop is built.",
              "Some cities require a permit or a class. It is a one-time annoyance and cheaper than a citation.",
            ],
          },
        ],
      },
      {
        heading: "Where birds should come from",
        blocks: [
          {
            type: "p",
            text: "Buy chicks from an NPIP hatchery, or adults from a keeper whose birds look bright and whose coop doesn’t smell like ammonia. A parking-lot bird is how respiratory disease enters a neighborhood.",
          },
          {
            type: "p",
            text: "Ask the hatchery whether chicks are vaccinated for Marek’s disease. Many hatcheries offer it. It is given at the hatchery, not something you mix into feed at home. Write down what vaccines and medicated starter (if any) came with the birds.",
          },
          {
            type: "p",
            text: "Sexed pullets cost more and are still wrong sometimes, especially in breeds that are hard to sex. Straight-run chicks are cheaper and half roosters. Have a plan for the males before you fall for them.",
          },
          {
            type: "note",
            text: "Quarantine every new bird for 30 days, out of sight and out of shared tools, even if they “look fine.”",
          },
          {
            type: "p",
            text: "See also Volume 19: Rabbits for another small-livestock housing and predator-proofing guide.",
          },
          { type: "cta", to: "/breeds", label: "Compare breeds" },
        ],
      },
    ],
  },
  {
    slug: "choosing-birds",
    number: "02",
    title: "Choosing birds",
    dek: "Egg color is the fun part. Climate, noise, and temperament decide whether you still like them in January.",
    minutes: 7,
    sections: [
      {
        heading: "Start with the job",
        blocks: [
          {
            type: "p",
            text: "If you want a lot of eggs and don’t plan to hold anybody, a Leghorn or a brown-egg hybrid will outlay a pretty dual-purpose hen. If you want birds that tolerate children and winter, look at Orpingtons, Australorps, Sussex, and Rocks — and accept fewer eggs.",
          },
          {
            type: "p",
            text: "“Quiet” is relative. Hens announce an egg. Roosters announce the morning. No breed is silent. Flighty breeds are also louder when startled, and they clear a short fence.",
          },
        ],
      },
      {
        heading: "Climate is a breed trait",
        blocks: [
          {
            type: "ul",
            items: [
              "Large single combs freeze. Leghorns and some Reds need a dry, draft-free roost and a dab of petroleum jelly before a hard cold.",
              "Rose combs and pea combs (Wyandottes, Ameraucanas) handle frost better.",
              "Heavy, loose-feathered birds — Orpingtons, Brahmas, Silkies — suffer in heat and in rain. Silkies’ feathers don’t shed water at all.",
              "A hybrid bred to lay will keep laying in weather that shuts a heritage hen down, until she simply wears out.",
            ],
          },
          { type: "cta", to: "/breeds", label: "Filter the breed list" },
        ],
      },
      {
        heading: "Blue eggs and borrowed names",
        blocks: [
          {
            type: "p",
            text: "A true Ameraucana lays a blue egg and has muffs, a beard, and a pea comb. Most cheap “Ameraucanas” are Easter Eggers: mixed birds that may lay blue, green, or olive. Both are fine backyard hens. They are not the same purchase.",
          },
          {
            type: "note",
            text: "Shell color is genetic and stays in a range for that hen. It does not tell you the egg is healthier, richer, or safer.",
          },
        ],
      },
      {
        heading: "Broilers",
        blocks: [
          {
            type: "p",
            text: "This guide is written for backyard egg flocks. Broilers (meat chickens) grow on a different feed and schedule. If you will process birds for meat, learn from your county extension office or an experienced mentor first. Keep the work clean, keep carcasses cold, and follow local rules. This app does not teach slaughter steps.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-brooder",
    number: "03",
    title: "The first weeks",
    dek: "Heat, water, and a floor they can grip. Almost every early loss is one of those three.",
    minutes: 8,
    sections: [
      {
        heading: "Heat they can leave",
        blocks: [
          {
            type: "p",
            text: "Start at 95°F (35°C) at chick height and drop about five degrees each week. The thermometer is a backup. Chicks piled under the lamp are cold. Chicks panting in a ring at the edge are hot. Quiet chicks spread through the warm zone are right.",
          },
          {
            type: "p",
            text: "A brooder plate is harder to set on fire than a heat lamp. If you use a lamp, clamp it so it cannot fall, keep it well off the bedding, and never run it on an extension cord coiled under shavings.",
          },
          { type: "cta", to: "/timeline", label: "Open the week-by-week timeline" },
        ],
      },
      {
        heading: "Water, feed, and the vent",
        blocks: [
          {
            type: "ul",
            items: [
              "Dip each beak once on arrival. After that, leave them to it.",
              "Shallow water or marbles in the tray. A soaked chick chills and dies.",
              "Chick starter only, 18–20% protein. Medicated starter means amprolium, not an antibiotic. Don’t use it if they were vaccinated for coccidiosis, and don’t add a thiamine-rich vitamin pack on top of amprolium.",
              "Pasty butt: dried manure sealing the vent. Soften with warm water and remove it. Check daily the first week.",
            ],
          },
          {
            type: "note",
            text: "No newspaper as the only floor. Slick surfaces cause spraddle leg. Pine shavings or paper towels over a mat give them grip. Cedar shavings don’t belong in a brooder.",
          },
        ],
      },
      {
        heading: "Leaving the brooder",
        blocks: [
          {
            type: "p",
            text: "Fully feathered birds can go without a lamp when nights stay mild, often around week five or six. Bare bellies still need heat. Move them before you need the brooder for the next batch, and don’t introduce chicks to adult hens for “company.”",
          },
        ],
      },
    ],
  },
  {
    slug: "housing",
    number: "04",
    title: "Housing",
    dek: "Dry air, a latch a raccoon can’t open, and more floor than the brochure drew.",
    minutes: 8,
    widget: "space",
    sections: [
      {
        heading: "Space is behavior",
        blocks: [
          {
            type: "p",
            text: "Four square feet of coop floor and ten of run, per standard bird, is a minimum — not a kindness. Tight birds pick feathers, break eggs, and get dirty faster than you can clean. Bantams need less. Brahmas need more. Free-ranging hours forgive a smaller run. A run that is their only outdoors does not.",
          },
        ],
      },
      {
        heading: "Air above, dry under",
        blocks: [
          {
            type: "p",
            text: "Chickens handle cold better than a wet draft. Put ventilation high, above the roosts, so ammonia and moisture leave without blowing across sleeping birds. If the coop stings your eyes, it is already hurting theirs.",
          },
          {
            type: "ul",
            items: [
              "Roosts wider than their feet — a 2×4 on the wide side — let them sit down over their toes in winter.",
              "Roosts higher than the nest boxes, or they will sleep in the nests and foul them.",
              "About 8–12 inches of roost per bird, and a landing that isn’t a sheer drop for heavy breeds.",
              "One nest for every four or five hens, dim, and open before the first egg so they learn the place.",
            ],
          },
        ],
      },
      {
        heading: "What actually keeps predators out",
        blocks: [
          {
            type: "p",
            text: "Chicken wire keeps chickens in. It does not keep raccoons out — they reach through it and peel it open. Use half-inch hardware cloth on windows, the run, and any gap a hand could fit. Bury an apron of mesh outward from the edge so diggers hit wire instead of a tunnel.",
          },
          {
            type: "note",
            text: "Close the coop at dusk every night. A carabiner or a lock beats a slide bolt. Raccoons have patience and thumbs.",
          },
        ],
      },
    ],
  },
  {
    slug: "feeding",
    number: "05",
    title: "Feeding and water",
    dek: "One complete ration for the age they are. Everything else is a garnish.",
    minutes: 7,
    widget: "feed",
    sections: [
      {
        heading: "The ration changes on purpose",
        blocks: [
          {
            type: "p",
            text: "Starter until about eight weeks, grower until they are about to lay, then a layer feed. The switch that hurts people is jumping to layer feed early because the bag says “chickens.” Layer feed is salted with calcium for eggshells. Pullets and cockerels don’t have a shell gland, and the extra calcium is hard on their kidneys.",
          },
          {
            type: "ul",
            items: [
              "Oyster shell is free-choice for layers, in its own container, not mixed into the only feeder.",
              "Grit is insoluble stone for grinding treats and whole grains. It is not calcium. Pastured birds often find their own. Confined birds eating snacks need a small dish of it.",
              "A laying hen drinks roughly a pint to a quart a day, more in heat. Water limits eggs faster than feed does.",
            ],
          },
        ],
      },
      {
        heading: "Treats and the things that are not food",
        blocks: [
          {
            type: "p",
            text: "Scratch, mealworms, and kitchen scraps should stay under about a tenth of the diet. More than that and you dilute the vitamin pack in the commercial feed, then wonder why shells went thin.",
          },
          {
            type: "ul",
            items: [
              "Fine in small amounts: greens, squash, ripe tomato, a little cooked egg, meat scraps that aren’t salty.",
              "Don’t feed: chocolate, avocado, raw dry beans, green potato or potato peelings, moldy anything, onion and garlic in quantity, or yard waste you sprayed.",
              "Long grass, baling twine, and Styrofoam belong on the impacted-crop list, not the treat list.",
            ],
          },
          {
            type: "note",
            text: "Store the bag in a metal can. Mice live in an open sack, and they are how a lot of disease and feed waste arrive.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-day",
    number: "06",
    title: "The shape of a day",
    dek: "Morning water, evening latch, and a weekly walk of the fence. The rest is noticing.",
    minutes: 6,
    sections: [
      {
        heading: "Twice a day is the whole habit",
        blocks: [
          {
            type: "p",
            text: "Open, count, water, feed, eggs, a look at eyes and feet. At dusk, count again and latch. The birds that get sick “overnight” were usually a little off at morning feed. You only catch that if morning feed is a person, not a timer.",
          },
          { type: "cta", to: "/", label: "Use today’s checklist" },
        ],
      },
      {
        heading: "Biosecurity is boring on purpose",
        blocks: [
          {
            type: "ul",
            items: [
              "Boots that live at the coop. Don’t wear them to the feed store and back through the run.",
              "New birds stay separate 30 days. So do birds returning from a show.",
              "Don’t share crates, and don’t help a neighbor “just hold” a sick hen and then collect your own eggs.",
              "Wild-bird feeders over the run are a disease booth. Hang them somewhere else.",
            ],
          },
        ],
      },
      {
        heading: "When you leave town",
        blocks: [
          {
            type: "p",
            text: "Write the latch, the water trick, the hen who gets picked, and the vet’s number on a card. A sitter who has never kept birds can keep yours alive for a week if the coop is predator-proof and the instructions are specific. “They’ll be fine” is how people come home to a raccoon.",
          },
          { type: "cta", to: "/flock", label: "Log the flock for the sitter" },
        ],
      },
    ],
  },
  {
    slug: "eggs",
    number: "07",
    title: "Eggs",
    dek: "When they start, why they stop, and how to store an egg without washing the protection off it.",
    minutes: 7,
    widget: "daylight",
    sections: [
      {
        heading: "First eggs are strange",
        blocks: [
          {
            type: "p",
            text: "Production hybrids often start around 18–22 weeks. Heritage breeds can take 24–28 weeks or longer; Brahmas are in no hurry. The first eggs may be tiny, wrinkled, double-yolked, or shell-less. Give a healthy pullet a short stretch of weird eggs before you call it a problem.",
          },
          {
            type: "p",
            text: "Hens lay without a rooster. A rooster makes the egg fertile. He does not increase production, and an extra rooster with too few hens bare-backs them until they bleed.",
          },
        ],
      },
      {
        heading: "Light, molt, and the winter pause",
        blocks: [
          {
            type: "p",
            text: "A hen’s ovary listens to day length. Production falls as days drop under about 14 hours, and a hard molt — usually late summer into fall — shuts laying down while feathers come back. Both are normal in a bird that is eating and bright.",
          },
          {
            type: "p",
            text: "Some keepers add light in the morning to hold a 14–16 hour day, and let dusk stay natural so they can still find the roost. A first-year pullet can also be left to rest through her first winter. All-night light is not a favor. They need darkness.",
          },
        ],
      },
      {
        heading: "Collecting, bloom, and a broody hen",
        blocks: [
          {
            type: "ul",
            items: [
              "Collect daily, twice in heat. Eggs left in the nest get broken, dirty, or incubated by a hen you didn’t ask.",
              "A clean egg has a bloom that slows bacteria. Don’t wash it unless it’s dirty. If you wash it, refrigerate it. Local custom and food rules differ; when in doubt, refrigerate.",
              "Wash your hands with soap and water after handling birds, eggs, feed, or the coop. Keep nesting boxes clean. Don’t eat raw cookie dough made with unwashed nest eggs. Young children, pregnant people, older adults, and anyone with a weak immune system should be extra careful around live poultry — chicks are cute and still carry germs.",
              "Store pointy end down if you’re holding them. Don’t eat a cracked nest egg.",
              "A broody hen stays planted, growls, and plucks her breast. To break it, collect eggs, block the favorite nest, and if needed park her for a few days in a wire-bottomed crate with food, water, and airflow — no nest.",
            ],
          },
          {
            type: "note",
            text: "Soft shells plus straining is not a storage question. Use the health checker and treat egg binding as urgent.",
          },
          { type: "cta", to: "/health", label: "Open the symptom checker" },
        ],
      },
    ],
  },
  {
    slug: "trouble",
    number: "08",
    title: "When something’s wrong",
    dek: "What is normal, what can wait until morning, and what means you stop and call.",
    minutes: 7,
    sections: [
      {
        heading: "Normal looks odd the first year",
        blocks: [
          {
            type: "ul",
            items: [
              "Dust bathing is how they stay clean. A hole in the flower bed is a spa.",
              "The pecking order is real. Occasional pecks are not the same as a bird pinned and bleeding.",
              "Molting looks like a pillow exploded. The hen should still be bright and hungry.",
              "A loud song after an egg is advertising, not pain.",
              "A comb pales when she isn’t laying. Compare her with the others before you assume anemia.",
            ],
          },
        ],
      },
      {
        heading: "Act the same day",
        blocks: [
          {
            type: "p",
            text: "Blood in a chick’s droppings, a hen straining with no egg, gasping at rest, a crop still hard in the morning, or more than one bird down at once — those do not wait for a weekend forum reply.",
          },
          {
            type: "note",
            text: "Sudden deaths, swollen heads, or purple combs: do not carry birds around town. Call a veterinarian or your state animal-health office first. That pattern can be a reportable disease.",
          },
          { type: "cta", to: "/health", label: "Match what you’re seeing" },
        ],
      },
      {
        heading: "The injuries people cause by helping",
        blocks: [
          {
            type: "ul",
            items: [
              "Don’t cut into a bumblefoot abscess on the kitchen table. Lower the roost, and let a vet open a hot foot.",
              "Don’t massage an impacted crop so hard she vomits. Aspiration kills faster than the impaction.",
              "Don’t break a stuck egg inside the hen.",
              "Don’t drench the coop in a product labeled for dogs, gardens, or pools because the dust “seemed natural.”",
            ],
          },
          {
            type: "p",
            text: "Separate a picked-on or sick bird somewhere warm, dry, and boring, with water she can reach. Then get a diagnosis. Isolation is care. It is not, by itself, treatment.",
          },
        ],
      },
    ],
  },
];

export function chapterBySlug(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}
