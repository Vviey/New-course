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
    imageUrl: "https://images.unsplash.com/photo-1604235362977-3eb0221402aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isLocked: false
  },
  {
    id: 2,
    name: "The Forest of Sparks",
    description: "Enter the mystical forest where the spark of Bitcoin was first ignited.",
    moduleNumber: 2,
    imageUrl: "https://images.unsplash.com/photo-1574607383180-2347cf7dcc4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isLocked: true
  },
  {
    id: 3,
    name: "The Central Citadel",
    description: "Explore the towers of power where monetary decisions echo through the lands.",
    moduleNumber: 3,
    imageUrl: "https://images.unsplash.com/photo-1575503802870-45bcd9fe51d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isLocked: true
  },
  {
    id: 4,
    name: "The Council of Forks",
    description: "Witness the debates that shape the path of digital currencies at the Council.",
    moduleNumber: 4,
    imageUrl: "https://images.unsplash.com/photo-1516750084777-bcc7eb0b9b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isLocked: true
  },
  {
    id: 5,
    name: "The Ubuntu Village",
    description: "Discover how Bitcoin weaves into African traditions of community and shared prosperity.",
    moduleNumber: 5,
    imageUrl: "https://images.unsplash.com/photo-1506730447-7683abca8534?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    isLocked: true
  },
  {
    id: 6,
    name: "The Grove of Becoming",
    description: "Complete your journey and discover your role in the future of money.",
    moduleNumber: 6,
    imageUrl: "https://images.unsplash.com/photo-1589123053646-4e8b0c603676?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
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
