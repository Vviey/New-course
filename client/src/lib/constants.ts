import { Realm } from "./types";

export const DEFAULT_AVATAR = "A";

export const BACKPACK_ITEMS = [
  {
    id: "wallet",
    name: "Wallet",
    icon: "fa-wallet",
    href: "#wallet"
  },
  {
    id: "glossary",
    name: "Glossary",
    icon: "fa-book",
    href: "#glossary"
  },
  {
    id: "bookmarks",
    name: "Bookmarks",
    icon: "fa-bookmark",
    href: "#bookmarks"
  },
  {
    id: "settings",
    name: "Settings",
    icon: "fa-cog",
    href: "#settings"
  }
];

export const INITIAL_REALMS: Realm[] = [
  {
    id: 1,
    name: "Realm of Origins",
    description: "Discover how money began and evolved from shells to bills in this foundational chapter.",
    moduleNumber: 1,
    imageUrl: "/realm-origins.svg",
    isLocked: false
  },
  {
    id: 2,
    name: "The Forest of Sparks",
    description: "Enter the mystical forest where the spark of Bitcoin was first ignited.",
    moduleNumber: 4, // Note: Number changed to match the UI design
    imageUrl: "/realm-forest.svg",
    isLocked: true
  },
  {
    id: 3,
    name: "The Central Citadel",
    description: "Explore the towers of power where monetary decisions echo through the lands.",
    moduleNumber: 6, // Note: Number changed to match the UI design
    imageUrl: "/realm-citadel.svg",
    isLocked: true
  },
  {
    id: 4,
    name: "The Council of Forks",
    description: "Witness the debates that shape the path of digital currencies at the Council.",
    moduleNumber: 6, // Note: Number changed to match the UI design
    imageUrl: "/realm-council.svg",
    isLocked: true
  },
  {
    id: 5,
    name: "The Ubuntu Village",
    description: "Discover how Bitcoin weaves into African traditions of community and shared prosperity.",
    moduleNumber: 7, // Note: Number changed to match the UI design
    imageUrl: "/realm-ubuntu.svg",
    isLocked: true
  },
  {
    id: 6,
    name: "The Grove of Becoming",
    description: "Complete your journey and discover your role in the future of money.",
    moduleNumber: 8, // Note: Number adjusted for sequence
    imageUrl: "/realm-grove.svg",
    isLocked: true
  }
];

export const REWARDS = [
  {
    id: 1,
    name: "Origins Explorer",
    description: "Completed Module 1",
    imageUrl: "https://images.unsplash.com/photo-1609726494499-27d3e942456c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    isEarned: true
  },
  {
    id: 2,
    name: "Spark Finder",
    description: "Completed Module 2",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    isEarned: true
  },
  {
    id: 3,
    name: "Central Banker",
    description: "Complete Module 3",
    imageUrl: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    isEarned: false
  },
  {
    id: 4,
    name: "???",
    description: "Continue your journey",
    imageUrl: "",
    isEarned: false
  }
];
