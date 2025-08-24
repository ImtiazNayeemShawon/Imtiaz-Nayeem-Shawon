"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  ExternalLink,
  Mail,
  Target,
  Users,
  Clock,
  TrendingUp,
  BarChart3,
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  Linkedin,
  Download,
  Play,
  Monitor,
  Smartphone,
  Tablet,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import HeroSection from "../../../../components/Hero";

// JSON Data Configuration
// const projectData = {
//   projectInfo: {
//     title: "VestorNet",
//     subtitle: "Seamless Mortgage Networking Platform",
//     description:
//       "Unlock a Seamless Mortgage Network: Empower Your Next Deal with VestorNet. A platform transforming the way mortgage agents, brokers, realtors, and lenders connect, collaborate, and close deals.",
//     badge: "Case Study",
//   },

//   mockups: [
//     {
//       title: "Newsfeed",
//       description:
//         "Dynamic feed with mortgage insights, promotions, and industry news",
//       device: "desktop",
//       image: "/api/placeholder/800/500",
//     },
//     {
//       title: "Profiles & Badges",
//       description:
//         "Verified professionals with unique profile badges for easy identification",
//       device: "desktop",
//       image: "/api/placeholder/800/500",
//     },
//     {
//       title: "Real-time Chat",
//       description: "Secure real-time messaging system similar to Messenger",
//       device: "mobile",
//       image: "/api/placeholder/375/667",
//     },
//     {
//       title: "AI-Powered Search",
//       description:
//         "Intelligent search to connect with the right mortgage professionals",
//       device: "tablet",
//       image: "/api/placeholder/768/1024",
//     },
//   ],

//   overview: {
//     badge: "Project Overview",
//     title: "Transforming the Mortgage Industry",
//     description:
//       "VestorNet addresses the critical need for seamless communication and networking in the mortgage industry.",
//     challenges: {
//       title: "Challenges",
//       description: "Key problems identified in the mortgage networking space",
//       color: "destructive",
//       icon: "Target",
//       items: [
//         "Lack of a centralized platform for mortgage professionals",
//         "Difficulty verifying professionals’ credibility",
//         "Inefficient communication between agents, brokers, and lenders",
//         "Limited tools for client engagement and discovery",
//       ],
//     },
//     solutions: {
//       title: "Solutions",
//       description: "How VestorNet solves industry pain points",
//       color: "green-600",
//       icon: "TrendingUp",
//       items: [
//         "Verified profiles with unique role-based badges",
//         "Secure real-time chat for all user types",
//         "Dynamic newsfeed for updates and promotions",
//         "AI-powered search engine tailored for mortgage needs",
//       ],
//     },
//     stats: [
//       { icon: "Users", value: "5,000+", label: "Verified Professionals" },
//       { icon: "Clock", value: "1 Year", label: "Development Time" },
//       { icon: "Target", value: "100%", label: "Verified Connections" },
//       { icon: "TrendingUp", value: "Seamless", label: "Networking Experience" },
//     ],
//   },

//   techStack: {
//     badge: "Technology Stack",
//     title: "Modern Cross-Platform Technologies",
//     description:
//       "VestorNet is built with scalable frontend, backend, and dashboard technologies ensuring reliability and performance.",
//     stacks: [
//       {
//         title: "Mobile App (Project)",
//         color: "blue",
//         description: "Expo React Native app with modern tools",
//         technologies: [
//           {
//             name: "React Native",
//             description: "Cross-platform mobile development",
//           },
//           { name: "Expo", description: "Framework for React Native apps" },
//           { name: "Zustand", description: "Lightweight state management" },
//           { name: "Axios", description: "API communication" },
//           { name: "Nativewind", description: "Tailwind for React Native" },
//           { name: "Expo Notifications", description: "Push notifications" },
//         ],
//       },
//       {
//         title: "Backend",
//         color: "green",
//         description: "Laravel-based backend with modern ecosystem",
//         technologies: [
//           { name: "Laravel 11", description: "Robust PHP framework" },
//           { name: "Sanctum", description: "API authentication" },
//           { name: "Redis", description: "In-memory caching and sessions" },
//           { name: "AWS S3", description: "File storage" },
//           { name: "Inertia.js", description: "Full-stack approach" },
//           { name: "Predis", description: "Redis client for PHP" },
//         ],
//       },
//       {
//         title: "Dashboard",
//         color: "purple",
//         description: "Next.js powered web dashboard",
//         technologies: [
//           { name: "Next.js 14", description: "React framework for web apps" },
//           { name: "TailwindCSS", description: "Utility-first CSS framework" },
//           { name: "Framer Motion", description: "Animations" },
//           { name: "Recharts", description: "Data visualization" },
//           { name: "Lucide-react", description: "Modern icon library" },
//           { name: "Radix UI", description: "Accessible UI components" },
//         ],
//       },
//     ],
//   },

//   features: {
//     badge: "Key Features",
//     title: "Innovative Features That Simplify Mortgage Networking",
//     description:
//       "Discover VestorNet’s powerful features designed for professionals, realtors, lenders, and clients.",
//     featureList: [
//       {
//         icon: "Shield",
//         title: "Verified Professionals",
//         description:
//           "Every user is carefully verified for trust and reliability",
//         details: [
//           "Mortgage Agents",
//           "Brokers",
//           "Realtors",
//           "A & B Lender Representatives",
//           "Alternative Lenders",
//         ],
//       },
//       {
//         icon: "Award",
//         title: "Unique Profile Badges",
//         description: "Role-based badges for easy identification",
//         details: [
//           "Public Users",
//           "Realtors",
//           "Mortgage Brokerages",
//           "Lender Representatives",
//         ],
//       },
//       {
//         icon: "MessageSquare",
//         title: "Real-Time Chat",
//         description: "Messenger-like chat for instant communication",
//         details: [
//           "1-on-1 Chat",
//           "Secure Messaging",
//           "Realtime Updates",
//           "Cross-role Communication",
//         ],
//       },
//       {
//         icon: "Newspaper",
//         title: "Dynamic Newsfeed",
//         description: "Latest posts, mortgage insights, and promotions",
//         details: [
//           "Photo/Video posts",
//           "Carousel updates",
//           "Mortgage industry news",
//           "Public & Professional content",
//         ],
//       },
//       {
//         icon: "Search",
//         title: "AI-Powered Search",
//         description: "Intelligent search tailored for mortgage professionals",
//         details: [
//           "Find Realtors",
//           "Locate Brokers",
//           "Connect with Lenders",
//           "Discover Mortgage Agents",
//         ],
//       },
//     ],
//   },

//   architecture: {
//     badge: "System Architecture",
//     title: "Cross-Platform Scalable Solution",
//     description:
//       "VestorNet uses a modern cross-platform architecture to power mobile, backend, and dashboard seamlessly.",
//     overview: {
//       title: "System Overview",
//       description:
//         "High-level architecture showcasing the connection between mobile app, Laravel backend, and Next.js dashboard",
//     },
//     layers: [
//       {
//         title: "Mobile App Layer",
//         color: "blue-500",
//         components: [
//           { title: "Expo React Native", desc: "Cross-platform app" },
//           {
//             title: "Zustand & Nativewind",
//             desc: "State management and styling",
//           },
//           { title: "Expo APIs", desc: "Notifications, File system, Auth" },
//         ],
//       },
//       {
//         title: "Backend Services",
//         color: "green-500",
//         components: [
//           { title: "Laravel Core", desc: "Business logic & APIs" },
//           { title: "Sanctum", desc: "Authentication" },
//           { title: "Redis + AWS S3", desc: "Caching & File storage" },
//         ],
//       },
//       {
//         title: "Dashboard",
//         color: "purple-500",
//         components: [
//           { title: "Next.js", desc: "Admin & reporting dashboard" },
//           { title: "Tailwind + Radix", desc: "Modern UI components" },
//           { title: "Recharts", desc: "Analytics & reporting" },
//         ],
//       },
//     ],
//   },

//   contact: {
//     badge: "Get In Touch",
//     title: "Join VestorNet Today",
//     description:
//       "Become an early adopter of our app. Connect with mortgage professionals in real-time, right from your mobile device.",
//     profile: {
//       title: "About VestorNet",
//       description:
//         "A revolutionary social platform for mortgage agents, brokers, lenders, and realtors to connect, collaborate, and close deals.",
//       expertise: [
//         "Mortgage Networking",
//         "Verified Professionals",
//         "Real-Time Communication",
//         "AI-Powered Search",
//         "Cross-Platform Solution",
//       ],
//       achievements: [
//         "Built cross-platform app with Expo",
//         "Laravel backend with Redis and AWS S3",
//         "Next.js dashboard with modern UI/UX",
//         "Seamless real-time chat and networking",
//       ],
//     },
//     contactInfo: {
//       title: "Contact Information",
//       description: "Ready to discuss opportunities with VestorNet?",
//       links: [
//         { icon: "Mail", label: "support@vestornet.com", variant: "default" },
//         { icon: "Linkedin", label: "LinkedIn Profile", variant: "default" },
//         { icon: "Github", label: "GitHub Repositories", variant: "default" },
//       ],
//       availability: "Open to partnerships, collaborations, and investments",
//       status: "Active & Growing",
//     },
//   },
// };

// const projectData = {
//   projectInfo: {
//     title: "Flourish",
//     subtitle: "Your Personal Finance Companion",
//     description:
//       "Flourish empowers users to take control of their financial life. Track transactions, manage investments, set financial goals, and gain insights through AI-powered recommendations.",
//     badge: "Case Study",
//   },

//   mockups: [
//     {
//       title: "Dashboard Home",
//       description: "Centralized overview of financial health, transactions, and portfolio",
//       device: "desktop",
//       image: "/api/placeholder/800/500",
//     },
//     {
//       title: "Portfolio & Investments",
//       description: "Track your stocks, investments, and portfolio performance",
//       device: "desktop",
//       image: "/api/placeholder/800/500",
//     },
//     {
//       title: "AI-Powered Insights",
//       description: "Personalized insights and suggestions powered by AI",
//       device: "mobile",
//       image: "/api/placeholder/375/667",
//     },
//     {
//       title: "Goal Management",
//       description: "Set and track savings, debt, and investment goals easily",
//       device: "tablet",
//       image: "/api/placeholder/768/1024",
//     },
//   ],

//   overview: {
//     badge: "Project Overview",
//     title: "Simplifying Personal Finance Management",
//     description:
//       "Flourish provides a comprehensive solution for managing finances, investments, and goals, all in one place.",
//     challenges: {
//       title: "Challenges",
//       description: "Problems users face in personal finance management",
//       color: "destructive",
//       icon: "Target",
//       items: [
//         "Difficulty tracking expenses and income in one place",
//         "Limited visibility on investments and portfolio performance",
//         "Hard to set and monitor financial goals effectively",
//         "Lack of AI-driven insights for better decision-making",
//       ],
//     },
//     solutions: {
//       title: "Solutions",
//       description: "How Flourish addresses these challenges",
//       color: "green-600",
//       icon: "TrendingUp",
//       items: [
//         "Centralized dashboard to track finances, portfolio, and goals",
//         "AI-powered insights for spending, saving, and investing",
//         "Seamless transaction management with bank integrations",
//         "Goal-oriented tracking with progress visualizations",
//       ],
//     },
//     stats: [
//       { icon: "Users", value: "10,000+", label: "Active Users" },
//       { icon: "Clock", value: "2 Years", label: "Development Time" },
//       { icon: "Target", value: "100%", label: "Goal Achievement Support" },
//       { icon: "TrendingUp", value: "Smart", label: "Financial Insights" },
//     ],
//   },

//   techStack: {
//     badge: "Technology Stack",
//     title: "Modern Cross-Platform Technologies",
//     description:
//       "Flourish is built with scalable backend, mobile, and web technologies ensuring performance and reliability.",
//     stacks: [
//       {
//         title: "Mobile App",
//         color: "blue",
//         description: "Expo React Native app with typed routes and modern libraries",
//         technologies: [
//           { name: "React Native", description: "Cross-platform mobile development" },
//           { name: "Expo", description: "Framework for React Native apps" },
//           { name: "React Query", description: "Data fetching and caching" },
//           { name: "TailwindCSS / Nativewind", description: "Styling and utility classes" },
//           { name: "Zustand", description: "Lightweight state management" },
//           { name: "Expo Notifications", description: "Push notifications" },
//         ],
//       },
//       {
//         title: "Backend",
//         color: "green",
//         description: "Bun + Hono server with integrations for finance and AI",
//         technologies: [
//           { name: "Bun + Hono", description: "High-performance backend framework" },
//           { name: "MongoDB (Mongoose)", description: "Database for transactions & portfolio" },
//           { name: "Redis", description: "Caching & session management" },
//           { name: "Plaid API", description: "Bank account integration" },
//           { name: "OpenAI API", description: "AI-powered insights and chat" },
//           { name: "Svix", description: "Webhook management" },
//         ],
//       },
//       {
//         title: "Web Dashboard",
//         color: "purple",
//         description: "React + Vite powered web app for portfolio & analytics",
//         technologies: [
//           { name: "React", description: "Web interface development" },
//           { name: "Vite", description: "Fast bundler for development" },
//           { name: "ShadCN + Radix UI", description: "Accessible UI components" },
//           { name: "Recharts & Chart.js", description: "Data visualization" },
//           { name: "React Hook Form + Zod", description: "Forms and validation" },
//         ],
//       },
//     ],
//   },

//   features: {
//     badge: "Key Features",
//     title: "Powerful Features That Simplify Finance Management",
//     description:
//       "Flourish combines transaction tracking, portfolio management, goal setting, and AI-driven insights in a single platform.",
//     featureList: [
//       {
//         icon: "CreditCard",
//         title: "Transaction Tracking",
//         description: "Easily manage all your income and expenses",
//         details: ["Add Transactions", "Recurring Expenses", "Categorization", "Bank Integrations"],
//       },
//       {
//         icon: "TrendingUp",
//         title: "Portfolio Management",
//         description: "Track your stocks and investments in real-time",
//         details: ["Add Stocks", "View Performance", "Investment Insights", "Portfolio Analytics"],
//       },
//       {
//         icon: "Target",
//         title: "Goal Setting",
//         description: "Set and track financial goals such as savings and debt",
//         details: ["Emergency Fund", "Debt Payoff", "Investment Goals", "Savings Plans"],
//       },
//       {
//         icon: "MessageCircle",
//         title: "AI Insights & Chat",
//         description: "Get personalized recommendations and AI guidance",
//         details: ["Expense Analysis", "Investment Advice", "Budget Improvement", "Real-time Chat Assistance"],
//       },
//       {
//         icon: "PieChart",
//         title: "Analytics & Reports",
//         description: "Visualize your financial data with charts and dashboards",
//         details: ["Portfolio Charts", "Transaction Summaries", "Goal Progress", "Spending Patterns"],
//       },
//     ],
//   },

//   architecture: {
//     badge: "System Architecture",
//     title: "Cross-Platform Scalable Solution",
//     description:
//       "Flourish uses a modern architecture connecting mobile apps, backend APIs, and web dashboards seamlessly.",
//     overview: {
//       title: "System Overview",
//       description:
//         "Mobile, backend, and web dashboard communicate via API, AI services, and real-time updates.",
//     },
//     layers: [
//       {
//         title: "Mobile App Layer",
//         color: "blue-500",
//         components: [
//           { title: "Expo React Native", desc: "Cross-platform mobile application" },
//           { title: "React Query & Zustand", desc: "State management and data fetching" },
//           { title: "Nativewind / Tailwind", desc: "Styling and theming" },
//         ],
//       },
//       {
//         title: "Backend Services",
//         color: "green-500",
//         components: [
//           { title: "Bun + Hono", desc: "API server and business logic" },
//           { title: "MongoDB + Mongoose", desc: "Database for transactions & portfolio" },
//           { title: "Redis + Plaid + OpenAI + Svix", desc: "Caching, banking, AI, and webhooks" },
//         ],
//       },
//       {
//         title: "Web Dashboard",
//         color: "purple-500",
//         components: [
//           { title: "React + Vite", desc: "Web interface and dashboard" },
//           { title: "ShadCN + Radix UI", desc: "Accessible and modern UI components" },
//           { title: "Recharts & Chart.js", desc: "Analytics and data visualization" },
//         ],
//       },
//     ],
//   },

//   contact: {
//     badge: "Get In Touch",
//     title: "Start Managing Your Finances with Flourish",
//     description:
//       "Join Flourish today to track, manage, and improve your financial life with AI assistance and goal tracking.",
//     profile: {
//       title: "About Flourish",
//       description:
//         "A personal finance platform that integrates transactions, portfolio tracking, goals, and AI-driven insights in one seamless experience.",
//       expertise: [
//         "Transaction Management",
//         "Portfolio Tracking",
//         "Goal Management",
//         "AI Insights & Chat",
//         "Cross-Platform Architecture",
//       ],
//       achievements: [
//         "Expo React Native mobile app",
//         "Bun + Hono backend with Plaid & OpenAI integration",
//         "Vite + React web dashboard with charts and analytics",
//         "Seamless AI-driven insights and real-time financial tracking",
//       ],
//     },
//     contactInfo: {
//       title: "Contact Information",
//       description: "Reach out to discuss Flourish partnerships or feedback",
//       links: [
//         { icon: "Mail", label: "support@flourish.com", variant: "default" },
//         { icon: "Linkedin", label: "LinkedIn Profile", variant: "default" },
//         { icon: "Github", label: "GitHub Repositories", variant: "default" },
//       ],
//       availability: "Open to collaborations, partnerships, and beta users",
//       status: "Active & Growing",
//     },
//   },
// };

const projectData = {
  projectInfo: {
    title: "Convey AI",
    subtitle: "All-in-One Conveyancing Platform",
    description:
      "Simplifying property transactions by connecting Vendors, Purchasers, Real Estate Agents, Conveyancers, and Mortgage Brokers into a single unified system.",
    badge: "Case Study",
  },

  mockups: [
    {
      title: "Property Dashboard",
      description:
        "Real-time overview of property listings, milestones, and transactions",
      device: "desktop",
      image: "/api/placeholder/800/500",
    },
    {
      title: "Document Management",
      description:
        "AI-powered contract review and document upload for all users",
      device: "desktop",
      image: "/api/placeholder/800/500",
    },
    {
      title: "Mobile Notifications",
      description:
        "Real-time alerts for milestones, reminders, and chat messages",
      device: "mobile",
      image: "/api/placeholder/375/667",
    },
    {
      title: "AI Chatbot",
      description: "24/7 assistant for answering legal and transaction queries",
      device: "tablet",
      image: "/api/placeholder/768/1024",
    },
  ],

  overview: {
    badge: "Project Overview",
    title: "Transforming Property Transactions",
    description:
      "Convey AI streamlines the conveyancing process, connecting all parties for faster, more transparent property transactions.",
    challenges: {
      title: "Challenges",
      description: "Key issues in traditional property transactions",
      color: "destructive",
      icon: "Target",
      items: [
        "Multiple parties using separate systems",
        "Manual tracking of legal and financial milestones",
        "Inefficient communication among agents, conveyancers, and buyers",
        "Complex contract and document management",
      ],
    },
    solutions: {
      title: "Solutions",
      description: "How Convey AI addresses these challenges",
      color: "green-600",
      icon: "TrendingUp",
      items: [
        "Unified platform connecting all stakeholders",
        "AI-powered contract review and legal document simplification",
        "Real-time notifications and chat across roles",
        "Integrated document management and property search",
      ],
    },
    stats: [
      { icon: "Users", value: "1000+", label: "Active Users" },
      { icon: "Clock", value: "12 Months", label: "Development Time" },
      { icon: "Target", value: "100%", label: "Workflow Automation" },
      {
        icon: "TrendingUp",
        value: "Efficient",
        label: "Transaction Experience",
      },
    ],
  },

  techStack: {
    badge: "Technology Stack",
    title: "Modern Full-Stack Architecture",
    description:
      "Convey AI is built using scalable technologies for web, mobile, backend, and notifications.",
    stacks: [
      {
        title: "Mobile App",
        color: "blue",
        description: "React Native app with Expo and state management",
        technologies: [
          {
            name: "React Native",
            description: "Cross-platform mobile development",
          },
          { name: "Expo Router", description: "App navigation & routing" },
          { name: "Zustand", description: "Lightweight state management" },
          { name: "Axios", description: "API communication" },
          { name: "Nativewind", description: "Tailwind styling" },
          { name: "Expo Notifications", description: "Push notifications" },
        ],
      },
      {
        title: "Web Platform & Admin Dashboard",
        color: "purple",
        description:
          "Next.js frontend with modern UI components and admin dashboard",
        technologies: [
          { name: "Next.js 15", description: "Web framework" },
          { name: "TailwindCSS", description: "Utility-first CSS" },
          { name: "Radix UI", description: "Accessible UI components" },
          { name: "Recharts", description: "Data visualization" },
          { name: "React Hook Form", description: "Form management" },
          { name: "Lucide-react", description: "Icons library" },
        ],
      },
      {
        title: "Backend & Notifications",
        color: "green",
        description:
          "Bun-based backend with Redis, MongoDB, AI integration, and pub/sub",
        technologies: [
          { name: "Bun.js", description: "Fast runtime for backend services" },
          { name: "Hono", description: "Server framework" },
          { name: "MongoDB", description: "Database for structured data" },
          {
            name: "Redis + Kafka",
            description: "Websocket & notification pub/sub",
          },
          { name: "OpenAI API", description: "AI chatbot & document analysis" },
          {
            name: "Stripe / Dropbox / Hazletts API",
            description: "Payment, e-sign, search integration",
          },
        ],
      },
    ],
  },

  features: {
    badge: "Key Features",
    title: "Powerful Features for Every Stakeholder",
    description:
      "Convey AI provides comprehensive features for conveyancers, agents, buyers, sellers, and brokers.",
    featureList: [
      {
        icon: "MessageSquare",
        title: "Real-Time Communication",
        description: "Multi-party chat and AI assistant",
        details: [
          "1-on-1 and group chat",
          "Cross-role messaging",
          "AI-powered assistance for legal & financial queries",
        ],
      },
      {
        icon: "FileText",
        title: "Document Management & AI Review",
        description: "Upload, share, sign, and simplify contracts",
        details: [
          "Contract upload & e-sign",
          "AI-powered legal review",
          "Task and milestone tracking",
        ],
      },
      {
        icon: "Bell",
        title: "Notifications & Alerts",
        description: "Real-time updates and reminders for all parties",
        details: [
          "Transaction updates",
          "Contract deadlines",
          "Finance and inspection alerts",
        ],
      },
      {
        icon: "Search",
        title: "Property Search Integration",
        description: "Search and connect via Hazletts API",
        details: [
          "Browse listings",
          "Connect buyers and agents",
          "Track search analytics",
        ],
      },
      {
        icon: "Shield",
        title: "Role-Based Permissions",
        description: "Secure access and actions per user type",
        details: [
          "Conveyancers (Buyer/Seller)",
          "Real Estate Agents",
          "Mortgage Brokers",
          "Vendors & Purchasers",
          "Admin Root",
        ],
      },
    ],
  },

  architecture: {
    badge: "System Architecture",
    title: "Cross-Platform, Scalable & AI-Driven",
    description:
      "Convey AI connects mobile, web, backend, and notification services seamlessly for real-time operations.",
    overview: {
      title: "System Overview",
      description:
        "Web platform, admin dashboard, mobile app, backend APIs, AI, and pub/sub notifications work in unison to streamline transactions.",
    },
    layers: [
      {
        title: "Mobile App Layer",
        color: "blue-500",
        components: [
          { title: "React Native + Expo", desc: "Cross-platform app" },
          { title: "Zustand & Nativewind", desc: "State management & styling" },
          { title: "Expo Notifications", desc: "Real-time alerts" },
        ],
      },
      {
        title: "Web & Admin Layer",
        color: "purple-500",
        components: [
          { title: "Next.js", desc: "Web frontend & admin dashboard" },
          { title: "Tailwind + Radix", desc: "UI components" },
          { title: "Recharts & Forms", desc: "Analytics & form handling" },
        ],
      },
      {
        title: "Backend & Notification Layer",
        color: "green-500",
        components: [
          { title: "Bun.js + Hono", desc: "Backend APIs & business logic" },
          {
            title: "Redis + Kafka",
            desc: "Pub/sub and websocket notifications",
          },
          { title: "MongoDB", desc: "Database storage" },
          { title: "AI (OpenAI)", desc: "Chatbot & contract analysis" },
        ],
      },
    ],
  },

  contact: {
    badge: "Get In Touch",
    title: "Join Convey AI Today",
    description:
      "Experience seamless property transactions and real-time updates for all parties involved.",
    profile: {
      title: "About Convey AI",
      description:
        "An all-in-one conveyancing platform connecting vendors, purchasers, agents, conveyancers, and mortgage brokers with AI assistance.",
      expertise: [
        "Multi-party workflow automation",
        "AI-powered contract review",
        "Real-time notifications",
        "Role-based permissions",
        "Cross-platform solution",
      ],
      achievements: [
        "Mobile app with React Native and Expo",
        "Web platform & admin dashboard with Next.js",
        "Backend with Bun.js, Redis, Kafka, and MongoDB",
        "AI chatbot & contract simplification",
      ],
    },
    contactInfo: {
      title: "Contact Information",
      description: "Ready to discuss Convey AI partnership or implementation?",
      links: [
        { icon: "Mail", label: "support@conveyai.com", variant: "default" },
        { icon: "Linkedin", label: "LinkedIn Profile", variant: "default" },
        { icon: "Github", label: "GitHub Repositories", variant: "default" },
      ],
      availability:
        "Open to partnerships, collaborations, and technical discussions",
      status: "Active & Growing",
    },
  },
};

// Icon mapping helper
const iconMap = {
  Target,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  Mail,
  Linkedin,
  Github,
  Download,
};

const TaskFlowCaseStudy = () => {
  const [currentMockup, setCurrentMockup] = useState(0);

  const nextMockup = () => {
    setCurrentMockup((prev) => (prev + 1) % projectData.mockups.length);
  };

  const prevMockup = () => {
    setCurrentMockup(
      (prev) =>
        (prev - 1 + projectData.mockups.length) % projectData.mockups.length
    );
  };

  const DeviceFrame = ({ device, children }) => {
    if (device === "mobile") {
      return (
        <div className="relative mx-auto w-80">
          <div className="bg-gray-800 rounded-3xl p-3 shadow-2xl">
            <div className="bg-black rounded-2xl p-1">
              <div
                className="bg-white rounded-xl overflow-hidden"
                style={{ aspectRatio: "375/667" }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (device === "tablet") {
      return (
        <div className="relative mx-auto w-96">
          <div className="bg-gray-800 rounded-2xl p-4 shadow-2xl">
            <div className="bg-black rounded-xl p-2">
              <div
                className="bg-white rounded-lg overflow-hidden"
                style={{ aspectRatio: "768/1024" }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative mx-auto max-w-4xl">
        <div className="bg-gray-800 rounded-t-xl p-3 shadow-2xl">
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div
            className="bg-white rounded-lg overflow-hidden"
            style={{ aspectRatio: "16/10" }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent || Target;
  };

  return (
    <div className="min-h-screen bg-[#101010]">
      {/* Hero Section */}
      <HeroSection />

      {/* Project Previews */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="" className="mb-4 text-white py-2 px-10">
              Project Preview
            </Badge>
            <h2 className="text-3xl md:text-4xl text-blue-400 font-bold mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive mockups showcasing the user interface and user
              experience across different devices.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <DeviceFrame device={projectData.mockups[currentMockup].device}>
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <ImageIcon className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      {projectData.mockups[currentMockup].title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {projectData.mockups[currentMockup].description}
                    </p>
                  </div>
                </div>
              </DeviceFrame>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full shadow-lg bg-white hover:bg-gray-50"
                  onClick={prevMockup}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full shadow-lg bg-white hover:bg-gray-50"
                  onClick={nextMockup}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Device Icons and Dots */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Desktop</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tablet className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Tablet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Mobile</span>
                </div>
              </div>
            </div>

            {/* Mockup Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {projectData.mockups.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentMockup
                      ? "bg-primary"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentMockup(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="" className="mb-4 text-white py-2 px-10">
              {projectData.overview.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              {projectData.overview.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {projectData.overview.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Challenges Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {React.createElement(
                    getIcon(projectData.overview.challenges.icon),
                    {
                      className: `h-5 w-5 text-${projectData.overview.challenges.color}`,
                    }
                  )}
                  <CardTitle
                    className={`text-${projectData.overview.challenges.color}`}
                  >
                    {projectData.overview.challenges.title}
                  </CardTitle>
                </div>
                <CardDescription>
                  {projectData.overview.challenges.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {projectData.overview.challenges.items.map(
                    (challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-${projectData.overview.challenges.color}/60 mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-sm">{challenge}</span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Solutions Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {React.createElement(
                    getIcon(projectData.overview.solutions.icon),
                    {
                      className: `h-5 w-5 text-${projectData.overview.solutions.color}`,
                    }
                  )}
                  <CardTitle
                    className={`text-${projectData.overview.solutions.color}`}
                  >
                    {projectData.overview.solutions.title}
                  </CardTitle>
                </div>
                <CardDescription>
                  {projectData.overview.solutions.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {projectData.overview.solutions.items.map(
                    (solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-${projectData.overview.solutions.color}/60 mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-sm">{solution}</span>
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {projectData.overview.stats.map((stat, index) => {
              const IconComponent = getIcon(stat.icon);
              return (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="pt-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="" className="mb-4 text-white py-2 px-10">
              {projectData.techStack.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              {projectData.techStack.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {projectData.techStack.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projectData.techStack.stacks.map((stack, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-${stack.color}-500`}
                    ></div>
                    {stack.title}
                  </CardTitle>
                  <CardDescription>{stack.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className={`border-l-2 border-${stack.color}-500/20 pl-4`}
                      >
                        <div className="font-semibold text-sm">{tech.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {tech.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="" className="mb-4 text-white py-2 px-10">
              {projectData.features.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              {projectData.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {projectData.features.description}
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full bg-transparent">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-transparent">
              <TabsTrigger variant="default" value="overview">
                Feature Overview
              </TabsTrigger>
              <TabsTrigger variant="default" value="technical">
                Technical Implementation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.features.featureList.map((feature, index) => {
                  const IconComponent = getIcon(feature.icon);
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-6 w-6 text-green-400" />
                          </div>
                          <CardTitle className="text-lg">
                            {feature.title}
                          </CardTitle>
                        </div>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="technical">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Frontend Technical Details */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      {projectData.features?.technical?.frontend?.title}
                    </CardTitle>
                    <CardDescription>
                      {projectData.features?.technical?.frontend?.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projectData.features?.technical?.frontend?.sections.map(
                        (section, index) => (
                          <div key={index}>
                            <h4 className="font-semibold mb-2">
                              {section.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {section.description}
                            </p>
                            <Badge variant="secondary" className="text-xs">
                              {section.badge}
                            </Badge>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="" className="mb-4 px-10 py-2">
              {projectData.architecture.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
              {projectData.architecture.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {projectData.architecture.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle>{projectData.architecture.overview.title}</CardTitle>
                <CardDescription>
                  {projectData.architecture.overview.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projectData.architecture.layers.map((layer, layerIndex) => (
                    <div key={layerIndex}>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full bg-${layer.color}`}
                        ></div>
                        {layer.title}
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 ml-5">
                        {layer.components.map((component, componentIndex) => (
                          <div
                            key={componentIndex}
                            className="p-4 rounded-lg dark:bg-blue-950/20 border border-blue-400 dark:border-blue-800"
                          >
                            <div className="font-medium text-green-500 text-sm mb-1">
                              {component.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {component.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                      {layerIndex <
                        projectData.architecture.layers.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="" className="mb-4 px-10 py-2">
              {projectData.contact.badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
              {projectData.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {projectData.contact.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Developer Profile Card */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>{projectData.contact.profile.title}</CardTitle>
                <CardDescription>
                  {projectData.contact.profile.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectData.contact.profile.expertise.map(
                        (skill, index) => (
                          <Badge key={index} variant="default">
                            {skill}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Recent Achievements</h4>
                    <ul className="space-y-2 text-sm">
                      {projectData.contact.profile.achievements.map(
                        (achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information Card */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>{projectData.contact.contactInfo.title}</CardTitle>
                <CardDescription>
                  {projectData.contact.contactInfo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    {projectData.contact.contactInfo.links.map(
                      (link, index) => {
                        const IconComponent = getIcon(link.icon);
                        return (
                          <Button
                            key={index}
                            className="w-full justify-start"
                            variant={link.variant}
                          >
                            <IconComponent className="mr-3 h-4 w-4" />
                            {link.label}
                          </Button>
                        );
                      }
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="">
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Resume
                      </Button>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <div className="text-sm text-muted-foreground">
                      {projectData.contact.contactInfo.availability}
                    </div>
                    <Badge variant="" className="mt-2 px-10 py-2">
                      {projectData.contact.contactInfo.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TaskFlowCaseStudy;
