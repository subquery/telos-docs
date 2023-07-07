/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  // What does Telos offer and how does the EVM on top of Zero add an advantage
  overview: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'overview/overview',
        'overview/why-telos',
        'overview/consensus',
        'overview/technical-features',
        {
          type: 'link',
          label: 'Roadmap',
          href: 'https://hellotelos.medium.com/tcd-telos-2023-blockchain-roadmap-unveiled-7334d2661e9e',
        },
        'overview/resources',
      ],
    },
  ],
  // Quick Start Layout A basic launch with Zero and EVM
  quickStart: [
    'quickstart/README',
    {   //EVM Section
        type: 'category',
        label: 'EVM',
        collapsed: false,
        items: [
          'quickstart/evm/setup-a-wallet',
          'quickstart/evm/getting-tlos',
          'quickstart/evm/metamask_remix',
          'quickstart/evm/create_apps_using_thirdweb',
        ],
    },
    {   //Zero Section
        type: 'category',
        label: 'Telos Zero',
        collapsed: false,
        items: [
          'quickstart/zero/accounts',
          'quickstart/zero/setup-a-wallet',
          'quickstart/zero/getting-tlos',
          'quickstart/zero/withdraw-transfer-and-send-tlos',
          'quickstart/zero/native-eosio',
      ],
    },
  ],

  // Telos EVM
  evm: [
  {
    type: 'category',
    label: 'About',
    collapsed: false,
    items: [
      {
        type: 'autogenerated',
        dirName: 'evm/about',
      },
      {
        type: 'link',
        label: 'Telos NFT',
        href: 'https://telos-nft.gitbook.io/telosnft/',
      },
    ],
  },
  {
    type: 'category',
    label: 'Smart Contracts',
    collapsed: false,
    items: [
      {
        type: 'autogenerated',
        dirName: 'evm/smart-contracts',
      },
    ],
  },
  {
    type: 'category',
    label: 'EVM APIs',
    collapsed: true,
    items: [
      {
        type: 'autogenerated',
        dirName: 'evm/api',
      },
    ],
  }
  ],

  // Telos Zero
  zero: [
    'zero/telos_zero',
    {
      type: 'category',
      label: 'About',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/about',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Environment',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/developer-environment',
        },
      ],
    },
    {
      type: 'category',
      label: 'Smart Contract Tutorials',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/smart-contract-tutorials',
        },
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Telos Works',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/governance/works',
            },
          ],
        },
        {
          type: 'category',
          label: 'Telos Amend',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/governance/amend',
            },
          ],
        },
        {
          type: 'category',
          label: 'Telos Decide',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/governance/decide',
            },
          ],
        },
        {
          type: 'category',
          label: 'Telos Login',
          collapsed: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'zero/governance/login',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resource Management',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/resource-management',
        },
      ],
    },
    {
      type: 'category',
      label: 'Crosschain Guide',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/crosschain',
        },
      ],
    },
    {
      type: 'category',
      label: 'Multisig Wallets',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'zero/multisig-wallets',
        },
      ],
    },
  ],

  // Nodes
  nodes: [
    'nodes/Nodes and Clients',
    'nodes/types-of-nodes',
    'nodes/nodeos',
    {
      type: 'category',
      label: 'Block Producing Nodes',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes/bp-nodes',
        },
      ],
    },
    {
      type: 'category',
      label: 'Non Block Producing Nodes',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes/non-bp-nodes',
        },
      ],
    },
    'nodes/local_developer_network',
  ],

  // Learn
  learn: [
    'learn/README',
    {
      type: 'category',
      label: 'Voting Guide',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'learn/voting_guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Defi Guide',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'learn/defi_guide',
        },
      ],
    },
  ],


  // FAQ PAGE
  faq: [
    'faq/faqs',
    {
      type: 'link',
      label: 'Other Questions',
      href: 'https://help.telos.net/',
    },
  ],


};

module.exports = sidebars;
