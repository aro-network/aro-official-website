export const headerBtnList = [
  { name: "Home", href: "/", target: "_self" },
  { name: "About Us", href: "/aboutUs", target: "_self" },
  {},
  {
    name: "Docs",
    href: "https://docs.aro.network",
    target: "_blank",
  },
  {
    name: "Sign In",
    // href: "http://dashboard.enreach.network",
    target: "_blank",
  },
];

export const showCaseList = [
  {
    title: "P2P CDN",
    content: "Real-time delivery of internet content, static & dynamic.",
    icon: "IconTeam",
  },
  {
    title: "AI Agent Hosting",
    content: "Decentralized hosting, with secure & verifiable executions.",
    icon: "IconEfficiency",
  },
  {
    title: "Media Streaming",
    content: "Immersice content. Live media. Near-zero latency fulfilled.",
    icon: "IconStack",
  },
  // {
  //   title: "Cloud Gaming",
  //   content: "Games hosted by ARO nodes, scalable with player demand.",
  //   icon: "IconMatch",
  // },
  // {
  //   title: "Autonomous Systems",
  //   content:
  //     "Supporting auto-drive vehicles and IoT devices with edge resilience.",
  //   icon: "IconReliability",
  // },
];

export const openEdgeList = [
  {
    title: "Openness for the Infinite Edge",
  },
  {
    title: "Open Protocol ",
    subTitle: "Connecting Edge Nodes",
    content:
      "A decentralized protocol enabling robust data storage and transmission functions through a vast network of connected edge nodes. ",
    icon: "IconProtocol",
    gif: "./box1.gif",
  },
  {
    title: "Open Platform",
    subTitle: "Enabling Edge Intelligence",
    content:
      "A complete cloud enabling AI model/computation functions deployment, execution, and context data management across the network. ",
    icon: "IconCloud",
    gif: "./box2.gif",
  },
  {
    title: "Open App Ecosystem",
    subTitle: "Forstering Edge Innovation",
    content:
      "An open ecosystem fostering innovation, incentivizing application growth, and guided by community-driven governance.",
    gif: "./box3.gif",
    icon: "IconEcosystem",
  },
];

export const list = [
  { name: "Media Kit", link: "https://aro.network/AroMediaKit.zip" },
  {
    name: "Privacy Policy",
    link: "privacy",
  },
  {
    name: "Terms & Conditions",
    link: "terms",
  },
];

export const doingItList = [
  {
    title: "Leveraging Blockchain for Distributed Efficiency",
    contnet: `We utilize blockchain to enable decentralized coordination and transparency across edge nodes, ensuring optimal resource allocation, data security, and seamless scalability.`,
  },
  {
    title: "Establishing a Complete Edge Intelligence Tech Stack",
    contnet: `Our comprehensive stack standardizes resources, orchestrates workflows, and provides developer-friendly tools, supporting the entire lifecycle of edge and AI applications from creation to scaling.`,
  },
  {
    title: "Building the Core Competency of Smart Orchestration",
    contnet: `We develop state-of-the-art technologies to sense, optimize, and schedule heterogeneous, massive-scale resources. This enables precise orchestration tailored to complex, real-world demands.`,
  },
  {
    title: "Providing Industry-Ready Solutions",
    contnet:
      "Leveraging our robust infrastructure, we deliver practical and scalable solutions tailored to real-world industries, enabling meaningful adoption and bridging the gap between Web3 technology and industry applications.",
  },
];

export const fabricList = [
  {
    title: "Application Layer",
    icon: "./application.svg",
    moIcon: "./mo-applicaiton.svg",
    content:
      "Provide developer SDKs and user interfaces that expose the network’s capabilities, allowing for easy development, deployment, management, and scaling of edge applications and AI solutions.",
  },
  {
    title: "Orchestration Layer",
    icon: "./open.svg",
    default: "./default-open.svg",
    moIcon: "./mo-orchestration.svg",
    content:
      "Coordinate network consensus, data, computation flows, and task management across nodes to meet the dynamic demands of edge computing, data transmission & processing with high precision and reliability.",
  },
  {
    title: "Resource Layer",
    icon: "./resource.svg",
    default: " default-resource.svg",
    moIcon: "./mo-resource.svg",
    content:
      "Standardize, virtualize, and containerize heterogeneous node resources to create a scalable, flexible digital infrastructure that can be verified, quantified, and optimized for efficient utilization.",
  },
];

export const titleList = [
  { title: "Real-time" },
  { title: "Cost-effective" },
  { title: "Verifiable" },
];
export const baseUrl = "https://email.aro.network";

// export const getCurrentCategorie = (
//   currentNames: ArticleInfo.Post | ArticleInfo.Post[],
//   categoriesArr: ArticleInfo.Category[]
// ) => {
//   const result = (
//     currentNames && Array.isArray(currentNames) ? currentNames : [currentNames]
//   ).map((item) => {
//     const { categories = [] } = item;
//     item

//     if (categories && categories.length > 0) {
//       const validCategories = categories
//         .filter((categoryId) => categoryId !== 1)
//         .map((categoryId) => {
//           const matchedCategory = categoriesArr.find(
//             (category) => category.id === categoryId
//           );
//           return matchedCategory ? matchedCategory.name : null;
//         })
//         .filter(Boolean);

//       return {
//         ...item,
//         names: validCategories,
//       };
//     }

//     return item;
//   });

//   return result;
// };

export const convertDate = (date?: Date) => {
  if (!date) return "";
  const result = new Date(date);
  const year = result.getFullYear();
  const month = String(result.getMonth() + 1).padStart(2, "0");
  const day = String(result.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getCurrentArticleTags = (data?: ArticleInfo.Post) => {
  if (!data) return [];
  const tags = data.tags;
  const terms = data._embedded["wp:term"].flat();

  return terms
    .filter((term) => tags.includes(term.id))
    .map((term) => {
      return { name: term.name, id: term.id };
    });
};

export const faqText = [
  {
    title: "1. What is “Decentralized Edge Cloud”?",
    content:
      "A Decentralized Edge Cloud is a distributed network where bandwidth, computing and storage are provided by nodes from the edge in a permissionless way, instead of centralized servers. Cloud resources are moved closer to where data is generated and end-users are located, significantly enhancing the scalability, resilience and affordability for contents and AI delivery. ",
  },
  {
    title: "2. How does ARO work?",
    content: `
    ARO empowers an open infrastructure where you can easily contribute your idle and unused bandwidth to this decentralized edge cloud — and earn real rewards in return. 
Enterprise-level customers purchase the resources collected by ARO, for delivering faster, smarter and cheaper internet contents (videos, gaming, AI services, etc. ) to their end users.  
$ARO tokens act as a key medium in this ecosystem. Your contributions will be measured, and you will get $ARO as a reward.  

`,
  },
  {
    title: "3. What are Jades / Jade Shards?",
    content: `Before mainnet is live, your contributions to the ARO Testnet will be tracked and reflected as Jade Shards (or just Jades for simpler term). You will be rewarded with Jades when you participate and make contributions to the ARO Testnet. In some cases, community contributors may receive NFTs as a recognition of their special efforts. The Jades serve as a key metric to determine your eligibility for future rewards. On Mainnet launch, you will be able to exchange your Jades for $ARO tokens.. 
`,
  },
  {
    title: "4. Does the device compromise user privacy?",
    content: `
  No. ARO will NEVER collect any personal data from your daily operation. The only resource ARO wants from you is your idle bandwidth — and nothing else.
`,
  },
  {
    title: "5. Does joining the ARO network affect my internet usage?",
    content: `No. ARO only collects and utilizes your idle bandwidth, without breaking your regular internet use. You just earn passive income while surfing the internet. 
ARO Hardware Nodes (ARO Pod and ARO Link) are dedicated and highly integrated devices which will help you optimize your resources contribution without compromising your daily experience.
`,
  },
  {
    title: "6. What stage is ARO currently in?",
    content: `ARO is currently in the Devnet phase, which means we are still testing the core infrastructure internally with a small group of early participants. We will soon enter the Testnet phase — this is when more participants will be able to join the network, contribute bandwidth, and start earning Jades, which can later be exchanged for $ARO tokens upon mainnet launch.
It’s still very early, and now is the perfect time to get involved if you want to become an early contributor and help shape the future of the ARO decentralized edge cloud!
`,
  },
];

export const roadmap = [
  {
    date: "2024",
    title: "Laying the Foundations",
    items: [
      "GPoW (Geographic Proof of Work) & GPoS (Geographic Proof of Stake)",
      "Peer-HVM (Hardware Virtual Machine)",
      "Peer-DTS (Distributed Task Scheduling)",
      "Peer-Routing (Decentralized Routing Layer)",
    ],
    color: "bg-[#8D9CB6]",
    finished: true,
  },
  {
    date: "2025 Q1",
    title: "Activating the Network",
    items: [
      "Community launch",
      "Initial hardware offering",
      "Resource aggregation",
    ],
    color: "bg-[#8D9CB6]",
    finished: true,
  },
  {
    date: "2025 Q2",
    title: "Proving Our Model",
    items: [
      "Real demand: PCDN delivery and AI hosting",
      "Kickstarting onchain revenue",
      "Testnet launch",
    ],
    color: "bg-[#1C73FF]",
    isCurrent: true,
  },
  {
    date: "2025 Q3",
    title: "Scaling Globally",
    items: ["Mainnet launch", "Node expansion", "Customer expansion"],
    color: "bg-[#5995F5]",
  },
  {
    date: "2026",
    title: "Opening the Network",
    items: ["Open platform launch", "Open governance"],
    color: "bg-[#5995F5]",
  },
];
