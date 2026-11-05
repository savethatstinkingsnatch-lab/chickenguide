export type Task = { id: string; label: string; detail: string };

export const morningTasks: Task[] = [
  {
    id: "open",
    label: "Open up and count",
    detail: "Every bird on its feet. A hen still on the roost after the others are down is the one to watch.",
  },
  {
    id: "water",
    label: "Fresh water",
    detail: "Rinse slime off the drinker. In a freeze, swap ice for water before you do anything else.",
  },
  {
    id: "feed",
    label: "The right feed",
    detail: "Starter, grower, or layer — not a mix of ages on layer feed. Scratch is a treat, not breakfast.",
  },
  {
    id: "eggs",
    label: "Collect eggs",
    detail: "Twice a day in hot weather. Leaving eggs teaches broodiness and invites breakage and egg-eating.",
  },
  {
    id: "scan",
    label: "Ten-second health scan",
    detail: "Bright eyes, dry nostrils, clean vents, even weight on both feet. Pale comb plus hiding is not “a quiet day.”",
  },
  {
    id: "shell",
    label: "Grit and oyster shell",
    detail: "Layers get oyster shell free-choice. Grit is for birds eating treats or whole grains, not a calcium source.",
  },
];

export const eveningTasks: Task[] = [
  {
    id: "count",
    label: "Count them in",
    detail: "Do it before full dark. A missing hen is usually on a low branch, or already in trouble.",
  },
  {
    id: "latch",
    label: "Latch the pop door",
    detail: "Raccoons open a simple slide. Use a carabiner, a spring clip, or a lock you can work with cold hands.",
  },
  {
    id: "skirt",
    label: "Glance at the hardware cloth",
    detail: "Look for a new hole, a lifted apron, or bedding pulled through the wall. Chicken wire is not a lock.",
  },
  {
    id: "bed",
    label: "Pull wet bedding",
    detail: "Moisture, not cold, is what makes a winter coop miserable. Replace the soggy spot, don’t seal the vents.",
  },
];

export const weeklyTasks: Task[] = [
  {
    id: "sanitize",
    label: "Scrub the waterer",
    detail: "A film of algae is a health problem. Soap, rinse, dry, refill. Do the feeder if it’s caked.",
  },
  {
    id: "clean",
    label: "Spot-clean the coop",
    detail: "Droppings under the roost come out. Deep litter only works if you keep adding carbon and it stays dry.",
  },
  {
    id: "perimeter",
    label: "Walk the fence",
    detail: "Dig marks, sagging mesh, a gap at the gate. Predators study the place more carefully than you do.",
  },
  {
    id: "dust",
    label: "Refresh the dust bath",
    detail: "Dry soil in a low box or a corner of the run. A handful of wood ash is plenty. Skip pool-grade diatomaceous earth.",
  },
  {
    id: "vents",
    label: "Check air, not drafts",
    detail: "Vents above the roosts should smell like a barn, not ammonia. If your eyes sting, you need air and drier bedding.",
  },
];

export const seasonNotes: { title: string; body: string }[] = [
  {
    title: "January water",
    body: "Ice is the whole job. Swap waterers or use a listed poultry water heater — not a heat lamp in the coop. Wide roosts and dry air prevent more frostbite than any blanket.",
  },
  {
    title: "February planning",
    body: "Days are still short, so laying stays low. If you want spring chicks, order from an NPIP hatchery now. Don’t start a brooder until you can keep it going for six weeks.",
  },
  {
    title: "March mud",
    body: "Thaw plus rain makes a filthy run and a coccidiosis risk for young birds. Boards, gravel, or a covered corner beat a mud lot. Biosecurity matters as bird shows and swaps start up.",
  },
  {
    title: "April predators",
    body: "Hungry parents are teaching kits and pups to hunt. Lock up before dusk, not “when we remember.” Collect eggs often — a forgotten egg is a broody hen.",
  },
  {
    title: "May grass",
    body: "Short supervised range is a gift. Long, tough grass and stringy weeds can impact a crop. Shade and a second waterer belong in the plan before the first hot week.",
  },
  {
    title: "June heat",
    body: "They don’t sweat. Panting and held-out wings on a hot afternoon can be normal; a bird still panting in the shade at dusk is not. Cool water, frozen bottles, and airflow beat electrolytes as a daily habit.",
  },
  {
    title: "July shells",
    body: "Heat and age thin the shells. Keep oyster shell available, collect twice, and don’t store eggs in a hot coop. Wasps drown in waterers — give the birds a second drinker.",
  },
  {
    title: "August molt",
    body: "Feathers on the ground and a pause in eggs are often molt, not illness, if the hen is bright and eating. Protein matters more than a lamp. Pin feathers are live tissue — don’t handle her roughly.",
  },
  {
    title: "September rodents",
    body: "Mice move toward feed as nights cool. Metal cans with lids, no bag feed on the floor, and a clean-up under the feeder. Laying drops with the day length. That’s normal.",
  },
  {
    title: "October drafts",
    body: "Close the north draft, leave the high vents. Check that the pop door still latches. Single large combs appreciate a thin coat of petroleum jelly before a hard freeze.",
  },
  {
    title: "November freeze",
    body: "First hard freezes find the leak in your water plan. Deep litter can start now if you will actually turn and top it. A wet, sealed coop is colder than a dry, breezy one.",
  },
  {
    title: "December cover",
    body: "Shortest days, fewest eggs. If you travel, the person covering needs to latch the coop, not just toss feed. Leave written notes: who is broody, who gets picked on, where the spare waterer is.",
  },
];
