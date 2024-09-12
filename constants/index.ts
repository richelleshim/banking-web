export const navBarRoutes = [
  {
    imgURL: "/icons/home-line.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/wallet.svg",
    route: "/banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/file-05.svg",
    route: "/transactions",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/coins-swap.svg",
    route: "/transfer",
    label: "Transfer Funds",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-[#ECF5FB]", // Softened blue background
    circleBg: "bg-[#2E516A]", // Circle with accent color
    text: {
      main: "text-[#2E516A]", // Main text in accent color
      count: "text-[#4A667D]", // Count text slightly darker
    },
    progress: {
      bg: "bg-[#ECF5FB]",
      indicator: "bg-[#2E516A]", // Progress indicator in accent color
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-[#D5E7ED]", // Travel background softened with the accent palette
    circleBg: "bg-[#4A667D]", // Darker version for contrast
    text: {
      main: "text-[#2E516A]",
      count: "text-[#4A667D]",
    },
    progress: {
      bg: "bg-[#D5E7ED]",
      indicator: "bg-[#4A667D]", // Darker accent for the progress bar
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-[#F3F7F9]", // Lighter neutral with a slight blue tone
    circleBg: "bg-[#2E516A]",
    text: {
      main: "text-[#2E516A]",
      count: "text-[#4A667D]",
    },
    progress: {
      bg: "bg-[#F3F7F9]",
      indicator: "bg-[#2E516A]",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-[#2E516A]",
    backgroundColor: "bg-[#ECF5FB]",
    textColor: "text-[#2E516A]",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-[#4A667D]",
    backgroundColor: "bg-[#4A667D]",
    textColor: "text-[#2E516A]",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-[#2E516A]",
    backgroundColor: "bg-[#4A667D]",
    textColor: "text-[#2E516A]",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-[#F43F5E]", // Red for Transfer to keep a distinction
    backgroundColor: "bg-[#F43F5E]",
    textColor: "text-[#F43F5E]",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#2E516A]",
    backgroundColor: "bg-[#4A667D]",
    textColor: "text-[#2E516A]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "border-[#2E516A]",
    backgroundColor: "bg-[#2E516A]",
    textColor: "text-[#FFFFFF]", // Default white text on accent color
    chipBackgroundColor: "bg-inherit",
  },
};
