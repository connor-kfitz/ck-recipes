import type {
  Equipment,
  EquipmentCategory,
  Ingredient,
  IngredientCategory,
  IngredientLibrary,
  NavLink,
  PinnedRecipe,
  Recipe,
  RecipeCategory,
  RecipeDetail
} from "./lib/types"

const photo = (id: string, width: number, height: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`

export const siteName = "recipes"

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Recipes", href: "/recipes" },
  { label: "Ingredients", href: "/ingredients" },
  { label: "Equipment", href: "/equipment" }
]

export const pinnedRecipe: PinnedRecipe = {
  eyebrow: "Pinned",
  title: "The weeknight roast chicken",
  time: "1 hr 15 min",
  calories: "690 cal/serving",
  image: photo("1598103442097-8b74394b95c6", 1600, 900),
  imageAlt: "Whole roast chicken resting in a cast iron pan"
}

export const ingredients: Ingredient[] = [
  {
    id: "olive-oil",
    name: "Cold-pressed olive oil",
    category: "pantry",
    image: photo("1474979266404-7eaacbcd87c5", 600, 400),
    imageAlt: "Glass cruet of olive oil beside fresh olives"
  },
  {
    id: "chili-powder",
    name: "Kashmiri chili powder",
    category: "spices",
    image: photo("1607672632458-9eb56696346b", 600, 400),
    imageAlt: "Bowl of red chili powder ringed by dried chilies"
  },
  {
    id: "toasting-spices",
    name: "Whole toasting spices",
    category: "spices",
    image: photo("1596040033229-a9821ebd058d", 600, 400),
    imageAlt: "Whole and ground spices laid out on a white table"
  },
  {
    id: "market-vegetables",
    name: "Market vegetables",
    category: "produce",
    image: photo("1518843875459-f738682238a6", 600, 400),
    imageAlt: "Still life of root vegetables, tomatoes and cabbage"
  },
  {
    id: "ramen-noodles",
    name: "Ramen noodles",
    brand: "Sun Noodle",
    category: "pantry",
    image: photo("1612929633738-8fe44f7ec841", 600, 600),
    imageAlt: "Bowl of noodles tossed with red chili, chopsticks resting alongside"
  },
  {
    id: "white-miso",
    name: "White miso",
    brand: "Hikari",
    category: "sauces",
    image: photo("1532336414038-cf19250c5757", 600, 600),
    imageAlt: "Market stall lined with open bowls of spices and dried goods",
    detail: {
      blurb:
        "Mellow, not too salty, and it dissolves without clumping — the only one I've found that never turns a butter sauce grainy. Comes in a tub rather than a pouch, so it keeps for months in the fridge without drying at the edges.",
      purchaseNote: "~$6 · 17.6 oz · most Asian groceries",
      calories: { amount: 30, per: "Tbsp" }
    }
  },
  {
    id: "butter",
    name: "Butter",
    brand: "Kerrygold",
    category: "dairy",
    image: photo("1589985270826-4b7bb135bc9d", 600, 600),
    imageAlt: "Block of butter with two pats cut from it on parchment"
  },
  {
    id: "chili-crisp",
    name: "Chili crisp",
    brand: "Fly By Jing",
    category: "sauces",
    image: photo("1607672632458-9eb56696346b", 600, 600),
    imageAlt: "Bowl of red chili flakes ringed by whole dried chilies"
  },
  {
    id: "flaky-salt",
    name: "Flaky salt",
    brand: "Maldon",
    category: "spices",
    image: photo("1596040033229-a9821ebd058d", 600, 600),
    imageAlt: "Coarse salt and whole spices spread across a white table"
  }
]

const libraryIds = ["olive-oil", "chili-powder", "toasting-spices", "market-vegetables"]

export const ingredientLibrary: IngredientLibrary = {
  heading: "Ingredients",
  subhead: "42 brands recommendations",
  linkLabel: "Browse all",
  href: "/ingredients",
  items: ingredients.filter((ingredient) => libraryIds.includes(ingredient.id))
}

export const recentHeading = "Recent"

export const recentLinkLabel = "See all"

export const recipeCategories: RecipeCategory[] = [
  { id: "weeknight", label: "Weeknight" },
  { id: "baking", label: "Baking" },
  { id: "soup-stew", label: "Soup & stew" },
  { id: "sides", label: "Sides" },
  { id: "sweets", label: "Sweets" }
]

export const ingredientCategories: IngredientCategory[] = [
  { id: "pantry", label: "Pantry" },
  { id: "spices", label: "Spices" },
  { id: "sauces", label: "Sauces" },
  { id: "produce", label: "Produce" },
  { id: "dairy", label: "Dairy" },
  { id: "tools", label: "Tools" }
]

export const equipment: Equipment[] = [
  {
    id: "dutch-oven",
    name: "Enameled Dutch oven",
    category: "cookware",
    image: photo("1590794056226-79ef3a8147e1", 600, 600),
    imageAlt: "Orange enameled Dutch oven on a trivet against white tile",
    detail: {
      blurb:
        "Heavy enough to hold a steady simmer for hours and goes straight from the stovetop into the oven. The enamel means nothing acidic reacts with it, so braises and tomato sauces stay clean-tasting.",
      purchaseNote: "5.5 qt · the size I reach for most"
    }
  },
  {
    id: "stockpot",
    name: "Stainless stockpot",
    category: "cookware",
    image: photo("1556911220-bff31c812dba", 600, 600),
    imageAlt: "Stainless steel stockpot on a gas range in a white kitchen"
  },
  {
    id: "knife-set",
    name: "Chef's knife set",
    category: "knives",
    image: photo("1593618998160-e34014e67546", 600, 600),
    imageAlt: "Three wooden-handled knives, a carving fork and a honing steel above a leather roll"
  },
  {
    id: "blender",
    name: "High-speed blender",
    category: "appliances",
    image: photo("1585515320310-259814833e62", 600, 600),
    imageAlt: "Glass blender jar filled with chopped fruit against a blue sky"
  },
  {
    id: "stand-mixer",
    name: "Stand mixer",
    category: "appliances",
    image: photo("1586208958839-06c17cacdf08", 600, 600),
    imageAlt: "Cream stand mixer on a counter beside a built-in oven and green cabinets"
  },
  {
    id: "toaster-oven",
    name: "Countertop toaster oven",
    category: "appliances",
    image: photo("1574269909862-7e1d70bb8078", 600, 600),
    imageAlt: "Stainless countertop toaster oven with its door closed"
  }
]

export const equipmentCategories: EquipmentCategory[] = [
  { id: "cookware", label: "Cookware" },
  { id: "bakeware", label: "Bakeware" },
  { id: "knives", label: "Knives" },
  { id: "tools", label: "Tools" },
  { id: "appliances", label: "Appliances" }
]

const misoButterNoodles: RecipeDetail = {
  serves: 2,
  prepMinutes: 10,
  cookMinutes: 15,
  nutrition: { calories: 540, carbs: 62, fat: 24, protein: 18 },
  ingredients: [
    { amount: "8 oz", name: "ramen noodles", ingredientId: "ramen-noodles", calories: 380 },
    { amount: "3 Tbsp", name: "white miso", ingredientId: "white-miso", calories: 90 },
    { amount: "4 Tbsp", name: "butter", ingredientId: "butter", calories: 400 },
    { amount: "2 cloves", name: "garlic", calories: 9 },
    { amount: "1 tsp", name: "chili crisp", ingredientId: "chili-crisp", calories: 45 },
    { amount: "2", name: "scallions", calories: 10 },
    { amount: "to taste", name: "flaky salt", ingredientId: "flaky-salt" }
  ],
  equipmentIds: ["stockpot"],
  directions: [
    {
      body: [
        { kind: "text", text: "Boil the " },
        { kind: "ingredient", text: "noodles", ingredientId: "ramen-noodles" },
        { kind: "text", text: " in " },
        { kind: "strong", text: "heavily salted" },
        {
          kind: "text",
          text: " water, one minute under the package time. Reserve ½ cup of the water."
        }
      ]
    },
    {
      label: "Make the sauce",
      body: [
        { kind: "text", text: "Melt the " },
        { kind: "ingredient", text: "butter", ingredientId: "butter" },
        { kind: "text", text: " over low heat, then whisk in the " },
        { kind: "ingredient", text: "miso", ingredientId: "white-miso" },
        { kind: "text", text: " until smooth. " },
        { kind: "strong", text: "Do not let it boil." }
      ],
      bullets: [
        "Garlic goes in last, off the heat",
        "Thin with the pasta water a splash at a time"
      ]
    },
    {
      body: [
        {
          kind: "text",
          text: "Toss the noodles in the pan for 30 seconds so the sauce clings. Top with scallions and "
        },
        { kind: "ingredient", text: "chili crisp", ingredientId: "chili-crisp" },
        { kind: "text", text: "." }
      ]
    }
  ],
  tips: [
    {
      id: "miso-seizes",
      type: "learning",
      date: "Mar 2026",
      body: "Miso seizes if the butter is too hot — pull the pan off the burner before it goes in."
    },
    {
      id: "double-the-sauce",
      type: "tip",
      date: "Jan 2026",
      body: "Double the sauce and keep half in the fridge; it holds a week and makes any vegetable edible."
    },
    {
      id: "udon-swap",
      type: "note",
      date: "Nov 2025",
      body: "Swapped in udon once — needs a splash more pasta water and a shorter toss."
    }
  ]
}

export const recipes: Recipe[] = [
  {
    id: "miso-butter-noodles",
    title: "Miso butter noodles",
    category: "weeknight",
    minutes: 25,
    calories: 540,
    addedAt: "2026-08-24",
    image: photo("1585032226651-759b368d7246", 800, 600),
    imageAlt: "Tangle of miso butter noodles on a wooden platter",
    detail: misoButterNoodles
  },
  {
    id: "sunday-chili",
    title: "Sunday chili",
    category: "soup-stew",
    minutes: 120,
    calories: 610,
    addedAt: "2026-08-17",
    image: photo("1596797038530-2c107229654b", 800, 600),
    imageAlt: "Pan of chili finished with a heavy scatter of cilantro"
  },
  {
    id: "blistered-margherita",
    title: "Blistered margherita",
    category: "baking",
    minutes: 45,
    calories: 620,
    addedAt: "2026-08-10",
    image: photo("1595854341625-f33ee10dbf94", 800, 600),
    imageAlt: "Margherita pizza with basil on a flour-dusted stone"
  },
  {
    id: "broccoli-basil-soup",
    title: "Broccoli basil soup",
    category: "soup-stew",
    minutes: 35,
    calories: 280,
    addedAt: "2026-08-03",
    image: photo("1626200419199-391ae4be7a41", 800, 600),
    imageAlt: "Bowl of green broccoli soup with basil and a sesame stick"
  },
  {
    id: "country-loaf",
    title: "No-knead country loaf",
    category: "baking",
    minutes: 840,
    calories: 260,
    addedAt: "2026-07-27",
    image: photo("1586444248902-2f64eddc13df", 800, 600),
    imageAlt: "Scored country loaf dusted with flour"
  },
  {
    id: "braised-short-ribs",
    title: "Braised short ribs",
    category: "soup-stew",
    minutes: 180,
    calories: 780,
    addedAt: "2026-07-20",
    image: photo("1544025162-d76694265947", 800, 600),
    imageAlt: "Glazed rack of short ribs carved on a board"
  },
  {
    id: "chickpea-masala",
    title: "Chickpea masala",
    category: "weeknight",
    minutes: 30,
    calories: 410,
    addedAt: "2026-07-13",
    image: photo("1585937421612-70a008356fbe", 800, 600),
    imageAlt: "Two bowls of chickpea masala served with rice"
  },
  {
    id: "sesame-slaw",
    title: "Sesame slaw",
    category: "sides",
    minutes: 15,
    calories: 180,
    addedAt: "2026-07-06",
    image: photo("1540420773420-3366772f4999", 800, 600),
    imageAlt: "Platter of shredded carrot, cabbage and radish slaw"
  }
]

export const recentRecipes: Recipe[] = recipes.slice(0, 8)
