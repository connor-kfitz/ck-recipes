export interface NavLink {
  label: string;
  href: string;
  active: boolean;
}

export interface PinnedRecipe {
  eyebrow: string;
  title: string;
  time: string;
  calories: string;
  brandPicks: string;
  image: string;
  imageAlt: string;
}

export interface Recipe {
  id: string;
  title: string;
  time: string;
  calories: string;
  image: string;
  imageAlt: string;
}

export interface Ingredient {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
}

export interface IngredientLibrary {
  heading: string;
  subhead: string;
  linkLabel: string;
  href: string;
  items: Ingredient[];
}

/**
 * Unsplash serves the crop, so each src carries the aspect ratio its slot needs
 * before next/image resizes it for the viewport.
 */
const photo = (id: string, width: number, height: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;

export const siteName = "recipes";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#", active: true },
  { label: "Recipes", href: "#", active: false },
  { label: "Ingredients", href: "#", active: false }
];

export const pinnedRecipe: PinnedRecipe = {
  eyebrow: "Pinned",
  title: "The weeknight roast chicken",
  time: "1 hr 15 min",
  calories: "690 cal/serving",
  brandPicks: "8 brand picks",
  image: photo("1598103442097-8b74394b95c6", 1600, 900),
  imageAlt: "Whole roast chicken resting in a cast iron pan"
}

export const ingredientLibrary: IngredientLibrary = {
  heading: "Ingredients",
  subhead: "42 ingredients I stand behind",
  linkLabel: "Browse all",
  href: "#",
  items: [
    {
      id: "olive-oil",
      name: "Cold-pressed olive oil",
      image: photo("1474979266404-7eaacbcd87c5", 600, 400),
      imageAlt: "Glass cruet of olive oil beside fresh olives"
    },
    {
      id: "chili-powder",
      name: "Kashmiri chili powder",
      image: photo("1607672632458-9eb56696346b", 600, 400),
      imageAlt: "Bowl of red chili powder ringed by dried chilies"
    },
    {
      id: "toasting-spices",
      name: "Whole toasting spices",
      image: photo("1596040033229-a9821ebd058d", 600, 400),
      imageAlt: "Whole and ground spices laid out on a white table"
    },
    {
      id: "market-vegetables",
      name: "Market vegetables",
      image: photo("1518843875459-f738682238a6", 600, 400),
      imageAlt: "Still life of root vegetables, tomatoes and cabbage"
    }
  ]
}

export const recentHeading = "Recent";

export const recentLinkLabel = "See all 42";

export const recentRecipes: Recipe[] = [
  {
    id: "miso-butter-noodles",
    title: "Miso butter noodles",
    time: "25 min",
    calories: "540 cal",
    image: photo("1585032226651-759b368d7246", 800, 600),
    imageAlt: "Tangle of miso butter noodles on a wooden platter"
  },
  {
    id: "sunday-chili",
    title: "Sunday chili",
    time: "2 hr",
    calories: "610 cal",
    image: photo("1596797038530-2c107229654b", 800, 600),
    imageAlt: "Pan of chili finished with a heavy scatter of cilantro"
  },
  {
    id: "blistered-margherita",
    title: "Blistered margherita",
    time: "45 min",
    calories: "620 cal",
    image: photo("1595854341625-f33ee10dbf94", 800, 600),
    imageAlt: "Margherita pizza with basil on a flour-dusted stone"
  },
  {
    id: "broccoli-basil-soup",
    title: "Broccoli basil soup",
    time: "35 min",
    calories: "280 cal",
    image: photo("1626200419199-391ae4be7a41", 800, 600),
    imageAlt: "Bowl of green broccoli soup with basil and a sesame stick"
  },
  {
    id: "country-loaf",
    title: "No-knead country loaf",
    time: "14 hr",
    calories: "260 cal",
    image: photo("1586444248902-2f64eddc13df", 800, 600),
    imageAlt: "Scored country loaf dusted with flour"
  },
  {
    id: "braised-short-ribs",
    title: "Braised short ribs",
    time: "3 hr",
    calories: "780 cal",
    image: photo("1544025162-d76694265947", 800, 600),
    imageAlt: "Glazed rack of short ribs carved on a board"
  },
  {
    id: "chickpea-masala",
    title: "Chickpea masala",
    time: "30 min",
    calories: "410 cal",
    image: photo("1585937421612-70a008356fbe", 800, 600),
    imageAlt: "Two bowls of chickpea masala served with rice"
  },
  {
    id: "sesame-slaw",
    title: "Sesame slaw",
    time: "15 min",
    calories: "180 cal",
    image: photo("1540420773420-3366772f4999", 800, 600),
    imageAlt: "Platter of shredded carrot, cabbage and radish slaw"
  }
];
