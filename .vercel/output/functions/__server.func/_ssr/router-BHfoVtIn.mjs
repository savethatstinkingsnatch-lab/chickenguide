import { i as __toESM } from "../_runtime.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as require_react, v as createRootRoute, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as CalendarRange, i as Stethoscope, l as BookOpen, r as Sun, s as Feather, t as TriangleAlert, u as Bird } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chapters-DfWCWn59.js
var chapters = [
	{
		slug: "before-you-start",
		number: "01",
		title: "Before you start",
		dek: "Ordinances, numbers, and the real cost of a chick that was only a few dollars.",
		minutes: 6,
		sections: [
			{
				heading: "A flock, not a single bird",
				blocks: [{
					type: "p",
					text: "Chickens are flock animals. One hen is a stressed hen. Three is a minimum that still works if you lose a bird; four to six is the usual starter flock and still legal in a lot of towns that cap you at six."
				}, {
					type: "p",
					text: "They need you every day. Water freezes, eggs pile up, and a raccoon only needs one night. Budget ten minutes morning and evening, a longer session once a week, and a person who will latch the coop when you are gone."
				}]
			},
			{
				heading: "Rules before lumber",
				blocks: [{
					type: "p",
					text: "Read the municipal code and the HOA before you buy birds. Many places ban roosters, limit hens to four or six, and set the coop back from the lot line. “They’re pets” is not a variance."
				}, {
					type: "ul",
					items: [
						"Roosters are not required for eggs. They are required for chicks. They crow, and they sometimes need to be rehomed.",
						"Setbacks and fence height are easier to meet on paper than after the coop is built.",
						"Some cities require a permit or a class. It is a one-time annoyance and cheaper than a citation."
					]
				}]
			},
			{
				heading: "Where birds should come from",
				blocks: [
					{
						type: "p",
						text: "Buy chicks from an NPIP hatchery, or adults from a keeper whose birds look bright and whose coop doesn’t smell like ammonia. A parking-lot bird is how respiratory disease enters a neighborhood."
					},
					{
						type: "p",
						text: "Sexed pullets cost more and are still wrong sometimes, especially in breeds that are hard to sex. Straight-run chicks are cheaper and half roosters. Have a plan for the males before you fall for them."
					},
					{
						type: "note",
						text: "Quarantine every new bird for 30 days, out of sight and out of shared tools, even if they “look fine.”"
					},
					{
						type: "cta",
						to: "/breeds",
						label: "Compare breeds"
					}
				]
			}
		]
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
				blocks: [{
					type: "p",
					text: "If you want a lot of eggs and don’t plan to hold anybody, a Leghorn or a brown-egg hybrid will outlay a pretty dual-purpose hen. If you want birds that tolerate children and winter, look at Orpingtons, Australorps, Sussex, and Rocks — and accept fewer eggs."
				}, {
					type: "p",
					text: "“Quiet” is relative. Hens announce an egg. Roosters announce the morning. No breed is silent. Flighty breeds are also louder when startled, and they clear a short fence."
				}]
			},
			{
				heading: "Climate is a breed trait",
				blocks: [{
					type: "ul",
					items: [
						"Large single combs freeze. Leghorns and some Reds need a dry, draft-free roost and a dab of petroleum jelly before a hard cold.",
						"Rose combs and pea combs (Wyandottes, Ameraucanas) handle frost better.",
						"Heavy, loose-feathered birds — Orpingtons, Brahmas, Silkies — suffer in heat and in rain. Silkies’ feathers don’t shed water at all.",
						"A hybrid bred to lay will keep laying in weather that shuts a heritage hen down, until she simply wears out."
					]
				}, {
					type: "cta",
					to: "/breeds",
					label: "Filter the breed list"
				}]
			},
			{
				heading: "Blue eggs and borrowed names",
				blocks: [{
					type: "p",
					text: "A true Ameraucana lays a blue egg and has muffs, a beard, and a pea comb. Most cheap “Ameraucanas” are Easter Eggers: mixed birds that may lay blue, green, or olive. Both are fine backyard hens. They are not the same purchase."
				}, {
					type: "note",
					text: "Shell color is genetic and stays in a range for that hen. It does not tell you the egg is healthier, richer, or safer."
				}]
			}
		]
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
						text: "Start at 95°F (35°C) at chick height and drop about five degrees each week. The thermometer is a backup. Chicks piled under the lamp are cold. Chicks panting in a ring at the edge are hot. Quiet chicks spread through the warm zone are right."
					},
					{
						type: "p",
						text: "A brooder plate is harder to set on fire than a heat lamp. If you use a lamp, clamp it so it cannot fall, keep it well off the bedding, and never run it on an extension cord coiled under shavings."
					},
					{
						type: "cta",
						to: "/timeline",
						label: "Open the week-by-week timeline"
					}
				]
			},
			{
				heading: "Water, feed, and the vent",
				blocks: [{
					type: "ul",
					items: [
						"Dip each beak once on arrival. After that, leave them to it.",
						"Shallow water or marbles in the tray. A soaked chick chills and dies.",
						"Chick starter only, 18–20% protein. Medicated starter means amprolium, not an antibiotic. Don’t use it if they were vaccinated for coccidiosis, and don’t add a thiamine-rich vitamin pack on top of amprolium.",
						"Pasty butt: dried manure sealing the vent. Soften with warm water and remove it. Check daily the first week."
					]
				}, {
					type: "note",
					text: "No newspaper as the only floor. Slick surfaces cause spraddle leg. Pine shavings or paper towels over a mat give them grip. Cedar shavings don’t belong in a brooder."
				}]
			},
			{
				heading: "Leaving the brooder",
				blocks: [{
					type: "p",
					text: "Fully feathered birds can go without a lamp when nights stay mild, often around week five or six. Bare bellies still need heat. Move them before you need the brooder for the next batch, and don’t introduce chicks to adult hens for “company.”"
				}]
			}
		]
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
				blocks: [{
					type: "p",
					text: "Four square feet of coop floor and ten of run, per standard bird, is a minimum — not a kindness. Tight birds pick feathers, break eggs, and get dirty faster than you can clean. Bantams need less. Brahmas need more. Free-ranging hours forgive a smaller run. A run that is their only outdoors does not."
				}]
			},
			{
				heading: "Air above, dry under",
				blocks: [{
					type: "p",
					text: "Chickens handle cold better than a wet draft. Put ventilation high, above the roosts, so ammonia and moisture leave without blowing across sleeping birds. If the coop stings your eyes, it is already hurting theirs."
				}, {
					type: "ul",
					items: [
						"Roosts wider than their feet — a 2×4 on the wide side — let them sit down over their toes in winter.",
						"Roosts higher than the nest boxes, or they will sleep in the nests and foul them.",
						"About 8–12 inches of roost per bird, and a landing that isn’t a sheer drop for heavy breeds.",
						"One nest for every four or five hens, dim, and open before the first egg so they learn the place."
					]
				}]
			},
			{
				heading: "What actually keeps predators out",
				blocks: [{
					type: "p",
					text: "Chicken wire keeps chickens in. It does not keep raccoons out — they reach through it and peel it open. Use half-inch hardware cloth on windows, the run, and any gap a hand could fit. Bury an apron of mesh outward from the edge so diggers hit wire instead of a tunnel."
				}, {
					type: "note",
					text: "Close the coop at dusk every night. A carabiner or a lock beats a slide bolt. Raccoons have patience and thumbs."
				}]
			}
		]
	},
	{
		slug: "feeding",
		number: "05",
		title: "Feeding and water",
		dek: "One complete ration for the age they are. Everything else is a garnish.",
		minutes: 7,
		widget: "feed",
		sections: [{
			heading: "The ration changes on purpose",
			blocks: [{
				type: "p",
				text: "Starter until about eight weeks, grower until they are about to lay, then a layer feed. The switch that hurts people is jumping to layer feed early because the bag says “chickens.” Layer feed is salted with calcium for eggshells. Pullets and cockerels don’t have a shell gland, and the extra calcium is hard on their kidneys."
			}, {
				type: "ul",
				items: [
					"Oyster shell is free-choice for layers, in its own container, not mixed into the only feeder.",
					"Grit is insoluble stone for grinding treats and whole grains. It is not calcium. Pastured birds often find their own. Confined birds eating snacks need a small dish of it.",
					"A laying hen drinks roughly a pint to a quart a day, more in heat. Water limits eggs faster than feed does."
				]
			}]
		}, {
			heading: "Treats and the things that are not food",
			blocks: [
				{
					type: "p",
					text: "Scratch, mealworms, and kitchen scraps should stay under about a tenth of the diet. More than that and you dilute the vitamin pack in the commercial feed, then wonder why shells went thin."
				},
				{
					type: "ul",
					items: [
						"Fine in small amounts: greens, squash, ripe tomato, a little cooked egg, meat scraps that aren’t salty.",
						"Don’t feed: chocolate, avocado, raw dry beans, green potato or potato peelings, moldy anything, onion and garlic in quantity, or yard waste you sprayed.",
						"Long grass, baling twine, and Styrofoam belong on the impacted-crop list, not the treat list."
					]
				},
				{
					type: "note",
					text: "Store the bag in a metal can. Mice live in an open sack, and they are how a lot of disease and feed waste arrive."
				}
			]
		}]
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
				blocks: [{
					type: "p",
					text: "Open, count, water, feed, eggs, a look at eyes and feet. At dusk, count again and latch. The birds that get sick “overnight” were usually a little off at morning feed. You only catch that if morning feed is a person, not a timer."
				}, {
					type: "cta",
					to: "/",
					label: "Use today’s checklist"
				}]
			},
			{
				heading: "Biosecurity is boring on purpose",
				blocks: [{
					type: "ul",
					items: [
						"Boots that live at the coop. Don’t wear them to the feed store and back through the run.",
						"New birds stay separate 30 days. So do birds returning from a show.",
						"Don’t share crates, and don’t help a neighbor “just hold” a sick hen and then collect your own eggs.",
						"Wild-bird feeders over the run are a disease booth. Hang them somewhere else."
					]
				}]
			},
			{
				heading: "When you leave town",
				blocks: [{
					type: "p",
					text: "Write the latch, the water trick, the hen who gets picked, and the vet’s number on a card. A sitter who has never kept birds can keep yours alive for a week if the coop is predator-proof and the instructions are specific. “They’ll be fine” is how people come home to a raccoon."
				}, {
					type: "cta",
					to: "/flock",
					label: "Log the flock for the sitter"
				}]
			}
		]
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
				blocks: [{
					type: "p",
					text: "Production hybrids often start around 18–22 weeks. Heritage breeds can take 24–28 weeks or longer; Brahmas are in no hurry. The first eggs may be tiny, wrinkled, double-yolked, or shell-less. Give a healthy pullet a short stretch of weird eggs before you call it a problem."
				}, {
					type: "p",
					text: "Hens lay without a rooster. A rooster makes the egg fertile. He does not increase production, and an extra rooster with too few hens bare-backs them until they bleed."
				}]
			},
			{
				heading: "Light, molt, and the winter pause",
				blocks: [{
					type: "p",
					text: "A hen’s ovary listens to day length. Production falls as days drop under about 14 hours, and a hard molt — usually late summer into fall — shuts laying down while feathers come back. Both are normal in a bird that is eating and bright."
				}, {
					type: "p",
					text: "Some keepers add light in the morning to hold a 14–16 hour day, and let dusk stay natural so they can still find the roost. A first-year pullet can also be left to rest through her first winter. All-night light is not a favor. They need darkness."
				}]
			},
			{
				heading: "Collecting, bloom, and a broody hen",
				blocks: [
					{
						type: "ul",
						items: [
							"Collect daily, twice in heat. Eggs left in the nest get broken, dirty, or incubated by a hen you didn’t ask.",
							"A clean egg has a bloom that slows bacteria. Don’t wash it unless it’s dirty. If you wash it, refrigerate it. Local custom and food rules differ; when in doubt, refrigerate.",
							"Store pointy end down if you’re holding them. Don’t eat a cracked nest egg.",
							"A broody hen stays planted, growls, and plucks her breast. To break it, collect eggs, block the favorite nest, and if needed park her for a few days in a wire-bottomed crate with food, water, and airflow — no nest."
						]
					},
					{
						type: "note",
						text: "Soft shells plus straining is not a storage question. Use the health checker and treat egg binding as urgent."
					},
					{
						type: "cta",
						to: "/health",
						label: "Open the symptom checker"
					}
				]
			}
		]
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
				blocks: [{
					type: "ul",
					items: [
						"Dust bathing is how they stay clean. A hole in the flower bed is a spa.",
						"The pecking order is real. Occasional pecks are not the same as a bird pinned and bleeding.",
						"Molting looks like a pillow exploded. The hen should still be bright and hungry.",
						"A loud song after an egg is advertising, not pain.",
						"A comb pales when she isn’t laying. Compare her with the others before you assume anemia."
					]
				}]
			},
			{
				heading: "Act the same day",
				blocks: [
					{
						type: "p",
						text: "Blood in a chick’s droppings, a hen straining with no egg, gasping at rest, a crop still hard in the morning, or more than one bird down at once — those do not wait for a weekend forum reply."
					},
					{
						type: "note",
						text: "Sudden deaths, swollen heads, or purple combs: do not carry birds around town. Call a veterinarian or your state animal-health office first. That pattern can be a reportable disease."
					},
					{
						type: "cta",
						to: "/health",
						label: "Match what you’re seeing"
					}
				]
			},
			{
				heading: "The injuries people cause by helping",
				blocks: [{
					type: "ul",
					items: [
						"Don’t cut into a bumblefoot abscess on the kitchen table. Lower the roost, and let a vet open a hot foot.",
						"Don’t massage an impacted crop so hard she vomits. Aspiration kills faster than the impaction.",
						"Don’t break a stuck egg inside the hen.",
						"Don’t drench the coop in a product labeled for dogs, gardens, or pools because the dust “seemed natural.”"
					]
				}, {
					type: "p",
					text: "Separate a picked-on or sick bird somewhere warm, dry, and boring, with water she can reach. Then get a diagnosis. Isolation is care. It is not, by itself, treatment."
				}]
			}
		]
	}
];
function chapterBySlug(slug) {
	return chapters.find((chapter) => chapter.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/breeds-N-qqbQyx.js
var breeds = [
	{
		slug: "rhode-island-red",
		name: "Rhode Island Red",
		purpose: "Dual purpose",
		eggColor: "brown",
		eggColorLabel: "Brown",
		eggsPerYear: "250–300",
		eggsMid: 260,
		size: "Standard",
		temperament: "Busy, sturdy, and usually tolerant of beginners",
		hardiness: "Both",
		broody: "Rarely",
		noise: "Average",
		beginner: true,
		summary: "The classic backyard hen: a steady brown-egg layer that forages, handles weather, and doesn’t need to be fussed over. Production strains lay harder and act flightier than the older dual-purpose lines.",
		keep: [
			"Give them room to work. A bored Red in a tiny run will pick on flockmates.",
			"Production hatchery lines are lighter and lay more; heritage lines are calmer and slower.",
			"They do fine on a standard layer ration once they actually start laying."
		],
		watch: ["Some roosters of this breed are assertive. Don’t keep one unless you want fertile eggs and your town allows it.", "High production can fade after the second year. That’s the trade for those early numbers."]
	},
	{
		slug: "buff-orpington",
		name: "Buff Orpington",
		purpose: "Dual purpose",
		eggColor: "brown",
		eggColorLabel: "Brown",
		eggsPerYear: "180–200",
		eggsMid: 190,
		size: "Heavy",
		temperament: "Calm, personable, and often happy to be held",
		hardiness: "Cold",
		broody: "Often",
		noise: "Quiet",
		beginner: true,
		summary: "A big golden hen that behaves like a pet and still lays a respectable number of brown eggs. Feathers make them look larger than the frame underneath, and those feathers hold heat.",
		keep: [
			"Shade and air in summer. They overheat sooner than a Leghorn.",
			"If you want chicks, an Orpington will often sit. If you don’t, break the brood or you will lose a month of eggs.",
			"They are gentle enough to be low bird in a mixed flock. Don’t pair them with aggressive breeds in a small pen."
		],
		watch: ["Broodiness is a feature, not a malfunction.", "Mud and wet feathers cling. Keep the run from becoming a swamp."]
	},
	{
		slug: "australorp",
		name: "Australorp",
		purpose: "Dual purpose",
		eggColor: "brown",
		eggColorLabel: "Brown",
		eggsPerYear: "220–280",
		eggsMid: 250,
		size: "Standard",
		temperament: "Quiet, steady, and easy around people",
		hardiness: "Both",
		broody: "Sometimes",
		noise: "Quiet",
		beginner: true,
		summary: "An Australian take on the Orpington that kept the calm and added more eggs. Glossy black plumage, brown eggs, and fewer drama fits than a lot of “beginner” lists admit other breeds have.",
		keep: [
			"A solid choice when you want eggs and a bird you can walk into the coop with.",
			"They forage well but still need a complete ration. Pasture is a salad, not the meal.",
			"One nest per four or five hens, or they will queue up and break eggs."
		],
		watch: ["Green sheen on the feathers is normal, not a health sign.", "They can still go broody. Collect daily if you don’t want a sitter."]
	},
	{
		slug: "speckled-sussex",
		name: "Speckled Sussex",
		purpose: "Dual purpose",
		eggColor: "cream",
		eggColorLabel: "Tinted cream",
		eggsPerYear: "200–250",
		eggsMid: 230,
		size: "Standard",
		temperament: "Curious, friendly, and good foragers",
		hardiness: "Both",
		broody: "Sometimes",
		noise: "Average",
		beginner: true,
		summary: "A handsome English dual-purpose bird with white-tipped feathers that speckle more after each molt. Reliable layers of tinted eggs and calm enough for a first flock.",
		keep: [
			"They like to range. If the run is their whole world, make it bigger than the minimum.",
			"Speckles increase with age. A plain-looking pullet is not the wrong bird.",
			"Good family birds, though “friendly” still means a chicken, not a dog."
		],
		watch: ["Roosters are usually steady, not silent. Check local rooster rules anyway.", "They mature a little slower than a sex-link hybrid."]
	},
	{
		slug: "barred-rock",
		name: "Barred Plymouth Rock",
		purpose: "Dual purpose",
		eggColor: "brown",
		eggColorLabel: "Brown",
		eggsPerYear: "180–220",
		eggsMid: 200,
		size: "Standard",
		temperament: "Even-tempered and hardy",
		hardiness: "Both",
		broody: "Sometimes",
		noise: "Average",
		beginner: true,
		summary: "The barred rock is the other bird people mean when they picture a farm. Black-and-white bars, brown eggs, cold tolerance, and a temperament that forgives a new keeper’s mistakes.",
		keep: [
			"Bars should be crisp. That doesn’t affect eggs, but it tells you what line you bought.",
			"They handle winter if the coop is dry. Don’t add a heat lamp to “help.”",
			"A classic 4-to-6 bird starter flock works well as Rocks alone or with Sussex and Reds."
		],
		watch: ["Some go broody in spring. Plan for it.", "They are heavier than they look. Roosts should be low enough to spare their feet, or use a ramp."]
	},
	{
		slug: "wyandotte",
		name: "Wyandotte",
		purpose: "Dual purpose",
		eggColor: "brown",
		eggColorLabel: "Brown",
		eggsPerYear: "180–200",
		eggsMid: 200,
		size: "Standard",
		temperament: "Self-possessed, sometimes aloof",
		hardiness: "Cold",
		broody: "Sometimes",
		noise: "Average",
		beginner: true,
		summary: "Rose combs and dense feathers make Wyandottes one of the better cold-weather layers. Silver-laced is the familiar one; gold, blue, and others lay the same brown eggs.",
		keep: [
			"Rose combs frostbite less than the big single combs on Leghorns and Reds.",
			"They can be independent. Don’t expect a lap chicken.",
			"Curvy backs and tight feathering mean pick a well-bred bird if you care about type, not just eggs."
		],
		watch: ["A few lines are bossy in small runs.", "Laying is good, not hybrid-good. Buy them for winter eggs and hardiness."]
	},
	{
		slug: "leghorn",
		name: "Leghorn",
		purpose: "Eggs",
		eggColor: "white",
		eggColorLabel: "White",
		eggsPerYear: "280–320",
		eggsMid: 300,
		size: "Standard",
		temperament: "Flighty, alert, and not interested in being held",
		hardiness: "Heat",
		broody: "Rarely",
		noise: "Loud",
		beginner: false,
		summary: "The industrial white-egg hen, and still hard to beat if the only goal is eggs. They are light, noisy, and excellent at escaping a casual fence. Wonderful layers, poor pets.",
		keep: [
			"Cover the run. They fly and startle.",
			"Large single combs freeze in bitter wind. Jelly before a cold snap, and a dry coop.",
			"They rarely go broody, which is what you want if you only want eggs."
		],
		watch: ["The “egg song” is loud. Neighbors will meet your Leghorn before they meet you.", "Don’t expect them to sit still for kids."]
	},
	{
		slug: "isa-brown",
		name: "ISA Brown",
		purpose: "Eggs",
		eggColor: "brown",
		eggColorLabel: "Brown",
		eggsPerYear: "280–320",
		eggsMid: 300,
		size: "Standard",
		temperament: "Usually docile production hens",
		hardiness: "Both",
		broody: "Rarely",
		noise: "Average",
		beginner: true,
		summary: "A sex-link hybrid built to lay brown eggs early and often. Friendly enough for a backyard, and honest about the deal: huge production for about two years, then a clear slowdown. They do not breed true.",
		keep: [
			"Feed a complete layer ration. These birds are working hard and feel a cheap diet first.",
			"Expect the first egg around 18–20 weeks, sometimes sooner.",
			"Plan for retirement. A hybrid that slows down is still a hen, not a broken machine."
		],
		watch: ["Prolapse and soft shells show up more in high-production birds. Calcium free-choice, and don’t let them get overweight.", "Hatchery names vary (ISA, Red Star, Cinnamon Queen). The job is the same."]
	},
	{
		slug: "easter-egger",
		name: "Easter Egger",
		purpose: "Eggs",
		eggColor: "green",
		eggColorLabel: "Blue, green, or olive",
		eggsPerYear: "180–220",
		eggsMid: 200,
		size: "Standard",
		temperament: "Varies — often friendly, never predictable",
		hardiness: "Both",
		broody: "Sometimes",
		noise: "Average",
		beginner: true,
		summary: "Not a breed. Easter Eggers are mixes that carry a blue-egg gene, so the carton looks like a paint set. If a hatchery sells “Ameraucanas” cheap and in five colors, they are usually Easter Eggers.",
		keep: [
			"Buy them for egg color, not for a show standard.",
			"Each pullet’s shell color stays in a family — blue, green, or olive — it doesn’t change every day.",
			"Temperament is a grab bag. Most are fine backyard birds."
		],
		watch: ["Don’t breed two random green-egg hens and expect uniform chicks.", "Muffs and a pea comb do not make the bird an Ameraucana."]
	},
	{
		slug: "ameraucana",
		name: "Ameraucana",
		purpose: "Eggs",
		eggColor: "blue",
		eggColorLabel: "Blue",
		eggsPerYear: "150–200",
		eggsMid: 170,
		size: "Standard",
		temperament: "Active and generally calm",
		hardiness: "Cold",
		broody: "Sometimes",
		noise: "Average",
		beginner: false,
		summary: "A real breed: muffs, beard, pea comb, slate legs, and blue eggs — not green. True Ameraucanas are harder to find than the hatchery birds that borrow the name, and they lay fewer eggs than an Easter Egger mix.",
		keep: [
			"Pea combs handle frost better than single combs.",
			"Buy from a breeder who can tell you the parents if you care about blue eggs specifically.",
			"They still need the same feed, space, and predator-proofing as any other hen."
		],
		watch: ["A green egg means a brown-egg gene is in the mix. That’s an Easter Egger, which is fine — just a different bird.", "Muffs can hide early signs of a swollen face. Part the feathers if she sounds congested."]
	},
	{
		slug: "brahma",
		name: "Light Brahma",
		purpose: "Dual purpose",
		eggColor: "brown",
		eggColorLabel: "Brown",
		eggsPerYear: "140–180",
		eggsMid: 150,
		size: "Heavy",
		temperament: "Gentle, slow-moving, and patient",
		hardiness: "Cold",
		broody: "Often",
		noise: "Quiet",
		beginner: false,
		summary: "A very large, feather-footed bird that stays calm and lays modestly through cold weather. They mature slowly — often past six months — and they are a poor choice for a hot, wet climate.",
		keep: [
			"Dry bedding. Mud balls on foot feathers lead to limping and infection.",
			"Lower roosts or a ramp. A heavy bird landing off a high bar is how bumblefoot starts.",
			"Give them time. Judging a Brahma pullet at 18 weeks is too early."
		],
		watch: ["Heat stresses them. Shade is not optional.", "They eat like their size. Budget feed accordingly."]
	},
	{
		slug: "silkie",
		name: "Silkie",
		purpose: "Ornamental",
		eggColor: "cream",
		eggColorLabel: "Cream or tinted",
		eggsPerYear: "80–120",
		eggsMid: 100,
		size: "Bantam",
		temperament: "Exceedingly calm, often broody",
		hardiness: "Shelter",
		broody: "Often",
		noise: "Quiet",
		beginner: false,
		summary: "The fluffy bird everyone wants to pet. Silkies are bantams with black skin, an extra toe, and feathers that don’t shed rain. They are famous mothers and modest layers. They are not outdoor ornaments in a wet winter.",
		keep: [
			"Keep them dry. Their feathers lack the barbicels that shed water, so a storm soaks them to the skin.",
			"Separate sight lines if bigger hens pick on them. Crests also block vision, which makes them easier to bully.",
			"If you want chicks under a broody, a Silkie will sit almost anything."
		],
		watch: ["Crests hide mites and eye bubbles. Check the face, not just the fluff.", "They should not sleep in a sodden run. A covered coop is the minimum."]
	}
];
var breedFilters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "beginner",
		label: "Beginner"
	},
	{
		id: "cold",
		label: "Cold-hardy"
	},
	{
		id: "prolific",
		label: "Prolific"
	},
	{
		id: "quiet",
		label: "Quieter"
	},
	{
		id: "broody",
		label: "Sets well"
	},
	{
		id: "dual",
		label: "Dual purpose"
	}
];
function matchesFilter(breed, filter) {
	switch (filter) {
		case "beginner": return breed.beginner;
		case "cold": return breed.hardiness === "Cold" || breed.hardiness === "Both";
		case "prolific": return breed.eggsMid >= 240;
		case "quiet": return breed.noise === "Quiet";
		case "broody": return breed.broody === "Often";
		case "dual": return breed.purpose === "Dual purpose";
		default: return true;
	}
}
function breedBySlug(slug) {
	return breeds.find((breed) => breed.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BHfoVtIn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var empty = {
	checks: {},
	birds: [],
	eggs: {},
	notes: [],
	read: []
};
var memoryStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
var useCoop = create()(persist((set) => ({
	hydrated: false,
	...empty,
	toggleCheck: (key, id) => set((s) => {
		const cur = s.checks[key] ?? [];
		const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
		return { checks: {
			...s.checks,
			[key]: next
		} };
	}),
	addBird: (bird) => set((s) => ({ birds: [{
		...bird,
		id: crypto.randomUUID()
	}, ...s.birds] })),
	removeBird: (id) => set((s) => ({ birds: s.birds.filter((b) => b.id !== id) })),
	setEggs: (date, count) => set((s) => ({ eggs: {
		...s.eggs,
		[date]: Math.max(0, Math.min(99, Math.round(count)))
	} })),
	addNote: (date, text) => set((s) => {
		const trimmed = text.trim();
		if (!trimmed) return s;
		return { notes: [{
			id: crypto.randomUUID(),
			date,
			text: trimmed
		}, ...s.notes].slice(0, 40) };
	}),
	removeNote: (id) => set((s) => ({ notes: s.notes.filter((n) => n.id !== id) })),
	toggleRead: (slug) => set((s) => ({ read: s.read.includes(slug) ? s.read.filter((x) => x !== slug) : [...s.read, slug] })),
	reset: () => set({ ...empty })
}), {
	name: "henhouse-v1",
	skipHydration: true,
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage : localStorage),
	partialize: (s) => ({
		checks: s.checks,
		birds: s.birds,
		eggs: s.eggs,
		notes: s.notes,
		read: s.read
	})
}));
var hydrateStarted = false;
function useHydrateCoop() {
	(0, import_react.useEffect)(() => {
		if (hydrateStarted) {
			if (useCoop.persist.hasHydrated()) useCoop.setState({ hydrated: true });
			return;
		}
		hydrateStarted = true;
		Promise.resolve(useCoop.persist.rehydrate()).finally(() => {
			useCoop.setState({ hydrated: true });
		});
	}, []);
}
var items = [
	{
		to: "/",
		label: "Today",
		short: "Today",
		icon: Sun,
		exact: true,
		mobile: true
	},
	{
		to: "/timeline",
		label: "Timeline",
		short: "Weeks",
		icon: CalendarRange,
		exact: true,
		mobile: false
	},
	{
		to: "/guide",
		label: "Guide",
		short: "Guide",
		icon: BookOpen,
		exact: false,
		mobile: true
	},
	{
		to: "/breeds",
		label: "Breeds",
		short: "Breeds",
		icon: Feather,
		exact: false,
		mobile: true
	},
	{
		to: "/health",
		label: "Health",
		short: "Health",
		icon: Stethoscope,
		exact: true,
		mobile: true
	},
	{
		to: "/flock",
		label: "Flock",
		short: "Flock",
		icon: Bird,
		exact: true,
		mobile: true
	}
];
function ItemLink({ item, variant }) {
	const className = variant === "side" ? "nav-link" : "tab-link";
	const Icon = item.icon;
	const label = variant === "side" ? item.label : item.short;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className: "size-5",
		"aria-hidden": true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })] });
	const opts = { exact: item.exact };
	switch (item.to) {
		case "/": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			activeOptions: opts,
			className,
			children: inner
		});
		case "/timeline": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/timeline",
			activeOptions: opts,
			className,
			children: inner
		});
		case "/guide": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/guide",
			activeOptions: opts,
			className,
			children: inner
		});
		case "/breeds": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/breeds",
			activeOptions: opts,
			className,
			children: inner
		});
		case "/health": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/health",
			activeOptions: opts,
			className,
			children: inner
		});
		case "/flock": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/flock",
			activeOptions: opts,
			className,
			children: inner
		});
		default: return null;
	}
}
function Shell({ children }) {
	useHydrateCoop();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen md:grid md:grid-cols-[15.5rem_1fr]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "skip",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-0 hidden h-screen flex-col border-r border-line bg-card px-4 py-6 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "mb-8 flex items-center gap-3 px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center rounded-lg bg-barn text-straw",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feather, {
								className: "size-5",
								"aria-hidden": true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl leading-none",
							children: "Henhouse"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: "Field guide"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-1",
						"aria-label": "Sections",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemLink, {
							item,
							variant: "side"
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto px-2 pt-6 text-sm text-muted",
						children: "For backyard keepers. Not a veterinary diagnosis."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "app-main mx-auto w-full max-w-5xl px-4 py-6 md:px-8 md:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "content",
					children
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-12 border-t border-line pt-4 text-sm text-muted",
					children: "Husbandry for backyard flocks — not a diagnosis. Your ordinance, a poultry vet, and the state animal-health office outrank this guide."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "tab-bar",
				"aria-label": "Sections",
				children: items.filter((item) => item.mobile).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemLink, {
					item,
					variant: "tab"
				}, item.to))
			})
		]
	});
}
var styles_default = "/assets/styles-DvVq2uLy.css";
var APP_NAME = "Henhouse";
var Route$8 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "A practical field guide to raising chickens: daily care, breeds, brooding, feeding, eggs, and what to do when a bird looks off."
			},
			{
				name: "theme-color",
				content: "#3A2A1C"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,620&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$7 = () => import("./routes-zqi_6sP9.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Today · Henhouse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./flock-TsbB03Nk.mjs");
var Route$6 = createFileRoute("/flock")({
	head: () => ({ meta: [{ title: "Flock · Henhouse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./health-D_A6Rr2T.mjs");
var Route$5 = createFileRoute("/health")({
	head: () => ({ meta: [{ title: "Health · Henhouse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./timeline-Dy7rXWzy.mjs");
var Route$4 = createFileRoute("/timeline")({
	head: () => ({ meta: [{ title: "Timeline · Henhouse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./breeds-DuGGRZGk.mjs");
var Route$3 = createFileRoute("/breeds/")({
	head: () => ({ meta: [{ title: "Breeds · Henhouse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-DEWwdkXW.mjs");
var Route$2 = createFileRoute("/breeds/$slug")({
	head: ({ params }) => ({ meta: [{ title: `${breedBySlug(params.slug)?.name ?? "Breed"} · Henhouse` }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./guide-B-dYOexj.mjs");
var Route$1 = createFileRoute("/guide/")({
	head: () => ({ meta: [{ title: "Guide · Henhouse" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-CKcU3QMv.mjs");
var Route = createFileRoute("/guide/$slug")({
	head: ({ params }) => ({ meta: [{ title: `${chapterBySlug(params.slug)?.title ?? "Guide"} · Henhouse` }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var FlockRoute = Route$6.update({
	id: "/flock",
	path: "/flock",
	getParentRoute: () => Route$8
});
var HealthRoute = Route$5.update({
	id: "/health",
	path: "/health",
	getParentRoute: () => Route$8
});
var TimelineRoute = Route$4.update({
	id: "/timeline",
	path: "/timeline",
	getParentRoute: () => Route$8
});
var BreedsIndexRoute = Route$3.update({
	id: "/breeds/",
	path: "/breeds/",
	getParentRoute: () => Route$8
});
var BreedsSlugRoute = Route$2.update({
	id: "/breeds/$slug",
	path: "/breeds/$slug",
	getParentRoute: () => Route$8
});
var GuideIndexRoute = Route$1.update({
	id: "/guide/",
	path: "/guide/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	FlockRoute,
	HealthRoute,
	TimelineRoute,
	BreedsSlugRoute,
	GuideSlugRoute: Route.update({
		id: "/guide/$slug",
		path: "/guide/$slug",
		getParentRoute: () => Route$8
	}),
	BreedsIndexRoute,
	GuideIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { breedBySlug as a, matchesFilter as c, useCoop as i, chapterBySlug as l, Route as n, breedFilters as o, Route$2 as r, breeds as s, router_exports as t, chapters as u };
