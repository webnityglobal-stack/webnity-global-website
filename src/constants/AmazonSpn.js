// // constants/socialMediaPlans.js
// import { FaAmazon } from "react-icons/fa";
// export const amazonSpn = [
//   {
//     id: 1,
//     planType: "Brand Plan", 
//     icon:FaAmazon ,
//     features: [               // ye change hoga
//       {
//         title: "Image Posts & Stories",
//         count: "15 posts",
//         description: "Each post includes tailored captions and relevant hashtags for reach."
//       },
//       {
//         title: "Organic Boosting",
//         description: "Eye-catching graphics and compelling copy designed to increase engagement organically."
//       },
//       {
//         title: "Profile Optimization",
//         description: "Clean up negative comments and refine bio, links, and highlights for a professional look."
//       },
//       {
//         title: "Content Calendar",
//         description: "All posts scheduled in advance for consistent, on-time publishing."
//       },
//       {
//         title: "Business Replies",
//         description: "Timely, brand-aligned replies to comments and DMs to nurture leads."
//       }
//     ]
//   },
//   {
//     id: 2,
//     planType: "Standard Plan",
//     icon:FaAmazon ,  // ye alag
//     features: [                  // ye alag
//       {
//         title: "Posts & Stories",
//         count: "24 posts",
//         description: "Engaging posts crafted with captions and hashtags to maximize reach."
//       },
//       {
//         title: "Reels Editing",
//         count: "2 reels",
//         description: "Client-provided raw videos edited into professional, eye-catching reels."
//       },
//       {
//         title: "Highlights & Replies",
//         count: "15 responses",
//         description: "Custom icons design plus timely replies for stronger engagement."
//       },
//       {
//         title: "Comment Management",
//         count: "30 comments",
//         description: "Remove up to 30 negative comments to maintain a positive brand image."
//       },
//       {
//         title: "Boosting",
//         count: "5 spots",
//         description: "Includes 2 paid promotions and 3 organic boosts for better visibility."
//       },
//       {
//         title: "Content Calendar",
//         description: "Customized posting strategy and scheduling for consistent engagement."
//       },
//       {
//         title: "Graphics & Copy",
//         description: "Attention-grabbing visuals and compelling captions for maximum impact."
//       },
//       {
//         title: "Profile Optimization",
//         description: "Enhanced profile layout and details to boost audience interaction."
//       }
//     ]
//   },
//   {
//     id: 3,
//     planType: "Premium Plan", 
//     icon:FaAmazon , // ye alag
//     features: [                 // ye alag
//       {
//         title: "Image Posting & Stories",
//         count: "26 posts",
//         description: "Creative posts with captions and hashtags to maximize engagement."
//       },
//       {
//         title: "Reels",
//         count: "4 edits + Infographic",
//         description: "4 video edits (client-provided) plus 1 infographic reel for impactful storytelling."
//       },
//       {
//         title: "Post Boost",
//         count: "4 posts",
//         description: "Boosted posts with engaging captions and hashtags for higher reach."
//       },
//       {
//         title: "Negative Comments",
//         count: "50 removals",
//         description: "Removal of up to 50 negative comments plus a detailed monthly report."
//       },
//       {
//         title: "Ad Campaigns",
//         count: "2 campaigns",
//         description: "Includes 2 ad campaigns (purchase-based or lead-focused)."
//       },
//       {
//         title: "Logo Design & PR Guidance",
//         description: "Professional logo creation and public relations guidance included."
//       },
//       {
//         title: "Organic Boosting",
//         description: "Engage with the right audience by targeting specific demographics."
//       },
//       {
//         title: "Profile Optimization",
//         description: "Custom engagement strategy with a dedicated posting calendar."
//       }
//     ]
//   }
// ]
// constants/AmazonSpn.jsx
import { FaAmazon } from "react-icons/fa";

export const amazonSpn = [
  {
    id: 1,
    planType: "Basic Plan",
    icon: FaAmazon,
    description: "Perfect for new sellers who want to establish their presence on Amazon. It covers essential listings, keyword updates, and claim submissions with a focus on up to 50 SKUs, helping you start strong with optimized product visibility and improved customer reach.",
    skuNote: "1 product with 4 variations = 1 SKU; 1 product with 8 variations = 2 SKUs.",
    features: [
      {
        title: "Amazon Basic Product Listings & Optimization",
        count: "Limited to 50 SKUs",
        description: "Essential listings management for new sellers"
      },
      {
        title: "SKU Counting",
        description: "1 product with 4 variations = 1 SKU; 1 product with 8 variations = 2 SKUs"
      },
      {
        title: "Keyword Updates",
        count: "On existing listings",
        description: "Improve visibility and search ranking"
      },
      {
        title: "Claim Submissions",
        count: "10 submissions",
        description: "Plus competitor analysis for better positioning"
      },
      {
        title: "Title & Description",
        count: "50 updates",
        description: "Effective price calculation strategies"
      },
      {
        title: "Growth Call Discussion",
        count: "1 call",
        description: "CTR enhancement strategies"
      },
      {
        title: "Campaigns",
        count: "100 high-CTR listings",
        description: "Run campaigns to maximize reach"
      },
      {
        title: "Image Enhancements",
        count: "50 images",
        description: "Optimized and upgraded for better presentation"
      }
    ]
  },
  {
    id: 2,
    planType: "Standard Plan",
    icon: FaAmazon,
    description: "Designed for growing sellers who want to scale faster. It includes detailed competitor analysis, enhanced title and description strategies, multiple growth calls, and broader campaign coverage across up to 100 SKUs, ensuring better conversions and marketplace growth.",
    skuNote: "Based on variations (e.g., 4 variations = 1 SKU, 8 variations = 2 SKUs).",
    features: [
      {
        title: "Amazon Standard Product Listings & Optimization",
        count: "For up to 100 SKUs",
        description: "Scale faster with enhanced strategies"
      },
      {
        title: "SKU Count",
        description: "Based on variations (e.g., 4 variations = 1 SKU, 8 variations = 2 SKUs)"
      },
      {
        title: "Keyword Updates",
        description: "Updates on existing listings to improve ranking and visibility"
      },
      {
        title: "Claim Submissions",
        count: "15 submissions",
        description: "Along with competitor analysis"
      },
      {
        title: "Title & Description",
        count: "100 optimized updates",
        description: "With price calculation strategies"
      },
      {
        title: "Growth Calls",
        count: "3 weekly calls",
        description: "With CTR enhancement support"
      },
      {
        title: "Campaigns",
        count: "200 high CTR campaigns & 50 organic marketing efforts",
        description: "Broader campaign coverage"
      },
      {
        title: "Social Media & Image Enhancements",
        count: "100 social posts and image upgrades",
        description: "Enhanced branding"
      },
      {
        title: "A+ Listings",
        count: "5 A+ listings",
        description: "With performance management support"
      }
    ]
  },
  {
    id: 3,
    planType: "Premium Plan",
    icon: FaAmazon,
    description: "Tailored for large-scale sellers, offering advanced optimization, unlimited growth calls, extensive campaigns, and complete performance management for sustained success on Amazon.",
    skuNote: "SKUs based on product variations (e.g., 4 variations = 1 SKU, 8 variations = 2 SKUs).",
    features: [
      {
        title: "Amazon Premium Product Listings & Optimization",
        count: "For up to 150 SKUs",
        description: "Advanced optimization for large-scale sellers"
      },
      {
        title: "SKU Calculation",
        description: "SKUs based on product variations (e.g., 4 variations = 1 SKU, 8 variations = 2 SKUs)"
      },
      {
        title: "Keyword Updates",
        description: "Updates applied on existing listings to improve ranking and visibility"
      },
      {
        title: "Claim Submissions",
        count: "25 claims submission",
        description: "And competitor analysis"
      },
      {
        title: "Title & Description",
        count: "300 titles and descriptions",
        description: "With advanced pricing strategy"
      },
      {
        title: "Growth Calls & CTR",
        count: "Unlimited growth calls",
        description: "With CTR enhancement support"
      },
      {
        title: "Campaigns & Marketing",
        count: "300 high CTR campaigns and 100 organic marketing efforts",
        description: "Extensive campaign coverage"
      },
      {
        title: "Social Media & Image Enhancements",
        count: "150 image upgrades",
        description: "Enhancements for better branding"
      },
      {
        title: "A+ Listings & Performance",
        count: "10 A+ listings",
        description: "Performance management and POA for suspension review"
      }
    ]
  }
]