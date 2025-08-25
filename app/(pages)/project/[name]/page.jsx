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
import Marquee from "react-fast-marquee";
import Image from "next/image";

// JSON Data Configuration
const vestornet = {
  projectInfo: {
    title: "VestorNet",
    subtitle: "Seamless Mortgage Networking Platform",
    description:
      "Unlock a Seamless Mortgage Network: Empower Your Next Deal with VestorNet. A platform transforming the way mortgage agents, brokers, realtors, and lenders connect, collaborate, and close deals.",
    badge: "Case Study",
    link: "https://vestornet.com/",
    metadata: [
      {
        title: "Components",
        data: "180+",
      },
      {
        title: "Technology used",
        data: "20+",
      },
      {
        title: "Typescript",
        data: "100%",
      },
      {
        title: "Optimized",
        data: "98%",
      },
    ],
  },

  mockups: [
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756139381/Imtiaz_Nayeem_Shawon_kttzce.jpg",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756140509/Device_Mockup_Aug_25_2025_2_dyipfy.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756140506/Device_Mockup_Aug_25_2025_tkwiuk.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756140915/Device_Mockup_Aug_25_2025_4_iiq351.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756140505/Device_Mockup_Aug_25_2025_3_d8yij3.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756140504/Device_Mockup_Aug_25_2025_1_xlghxt.png",
  ],

  overview: {
    badge: "Project Overview",
    title: "Transforming the Mortgage Industry",
    description:
      "VestorNet addresses the critical need for seamless communication and networking in the mortgage industry.",
    challenges: {
      title: "Challenges",
      description: "Key problems identified in the mortgage networking space",
      color: "destructive",
      icon: "Target",
      items: [
        "Lack of a centralized platform for mortgage professionals",
        "Difficulty verifying professionals’ credibility",
        "Inefficient communication between agents, brokers, and lenders",
        "Limited tools for client engagement and discovery",
      ],
    },
    solutions: {
      title: "Solutions",
      description: "How VestorNet solves industry pain points",
      color: "green-600",
      icon: "TrendingUp",
      items: [
        "Verified profiles with unique role-based badges",
        "Secure real-time chat for all user types",
        "Dynamic newsfeed for updates and promotions",
        "AI-powered search engine tailored for mortgage needs",
      ],
    },
    stats: [
      { icon: "Users", value: "300+", label: "Verified Professionals" },
      { icon: "Clock", value: "6 Month", label: "Development Time" },
      { icon: "Target", value: "100%", label: "Verified Connections" },
      { icon: "TrendingUp", value: "Seamless", label: "Networking Experience" },
    ],
  },

  techStack: {
    badge: "Technology Stack",
    title: "Modern Cross-Platform Technologies",
    description:
      "VestorNet is built with scalable frontend, backend, and dashboard technologies ensuring reliability and performance.",
    stacks: [
      {
        title: "Mobile App (Project)",
        color: "blue",
        description: "Expo React Native app with modern tools",
        technologies: [
          {
            name: "React Native",
            description: "Cross-platform mobile development",
          },
          { name: "Expo", description: "Framework for React Native apps" },
          { name: "Zustand", description: "Lightweight state management" },
          { name: "Axios", description: "API communication" },
          { name: "Nativewind", description: "Tailwind for React Native" },
          { name: "Expo Notifications", description: "Push notifications" },
        ],
      },
      {
        title: "Backend",
        color: "green",
        description: "Laravel-based backend with modern ecosystem",
        technologies: [
          { name: "Laravel 11", description: "Robust PHP framework" },
          { name: "Sanctum", description: "API authentication" },
          { name: "Redis", description: "In-memory caching and sessions" },
          { name: "AWS S3", description: "File storage" },
          { name: "Inertia.js", description: "Full-stack approach" },
          { name: "Predis", description: "Redis client for PHP" },
        ],
      },
      {
        title: "Dashboard",
        color: "purple",
        description: "Next.js powered web dashboard",
        technologies: [
          { name: "Next.js 14", description: "React framework for web apps" },
          { name: "TailwindCSS", description: "Utility-first CSS framework" },
          { name: "Framer Motion", description: "Animations" },
          { name: "Recharts", description: "Data visualization" },
          { name: "Lucide-react", description: "Modern icon library" },
          { name: "Radix UI", description: "Accessible UI components" },
        ],
      },
    ],
  },

  features: {
    badge: "Key Features",
    title: "Innovative Features That Simplify Mortgage Networking",
    description:
      "Discover VestorNet’s powerful features designed for professionals, realtors, lenders, and clients.",
    featureList: [
      {
        icon: "Shield",
        title: "Verified Professionals",
        description:
          "Every user is carefully verified for trust and reliability",
        details: [
          "Mortgage Agents",
          "Brokers",
          "Realtors",
          "A & B Lender Representatives",
          "Alternative Lenders",
        ],
      },
      {
        icon: "Award",
        title: "Unique Profile Badges",
        description: "Role-based badges for easy identification",
        details: [
          "Public Users",
          "Realtors",
          "Mortgage Brokerages",
          "Lender Representatives",
        ],
      },
      {
        icon: "MessageSquare",
        title: "Real-Time Chat",
        description: "Messenger-like chat for instant communication",
        details: [
          "1-on-1 Chat",
          "Secure Messaging",
          "Realtime Updates",
          "Cross-role Communication",
        ],
      },
      {
        icon: "Newspaper",
        title: "Dynamic Newsfeed",
        description: "Latest posts, mortgage insights, and promotions",
        details: [
          "Photo/Video posts",
          "Carousel updates",
          "Mortgage industry news",
          "Public & Professional content",
        ],
      },
      {
        icon: "Search",
        title: "AI-Powered Search",
        description: "Intelligent search tailored for mortgage professionals",
        details: [
          "Find Realtors",
          "Locate Brokers",
          "Connect with Lenders",
          "Discover Mortgage Agents",
        ],
      },
    ],
  },

  architecture: {
    badge: "System Architecture",
    title: "Cross-Platform Scalable Solution",
    description:
      "VestorNet uses a modern cross-platform architecture to power mobile, backend, and dashboard seamlessly.",
    overview: {
      title: "System Overview",
      description:
        "High-level architecture showcasing the connection between mobile app, Laravel backend, and Next.js dashboard",
    },
    layers: [
      {
        title: "Mobile App Layer",
        color: "blue-500",
        components: [
          { title: "Expo React Native", desc: "Cross-platform app" },
          {
            title: "Zustand & Nativewind",
            desc: "State management and styling",
          },
          { title: "Expo APIs", desc: "Notifications, File system, Auth" },
        ],
      },
      {
        title: "Backend Services",
        color: "green-500",
        components: [
          { title: "Laravel Core", desc: "Business logic & APIs" },
          { title: "Sanctum", desc: "Authentication" },
          { title: "Redis + AWS S3", desc: "Caching & File storage" },
        ],
      },
      {
        title: "Dashboard",
        color: "purple-500",
        components: [
          { title: "Next.js", desc: "Admin & reporting dashboard" },
          { title: "Tailwind + Radix", desc: "Modern UI components" },
          { title: "Recharts", desc: "Analytics & reporting" },
        ],
      },
    ],
  },

  contact: {
    badge: "Get In Touch",
    title: "About Developer",
    description:
      "Imtiaz Nayeem Shawon Self-taught Full stack developer with 4 years of experience in product development and client services.",
    profile: {
      title: "About Developer",
      description:
        "Imtiaz Nayeem Shawon Self-taught Full stack developer with 4 years of experience in product development and client services.",
      expertise: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "DSA",
        "OOP",
        "React",
        "Next.js",
        "React Native",
        "Redux",
        "Tailwind",
        "Node.js",
        "Express",
        "GraphQL",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Nginx",
        "CI/CD",
        "Payment Gateway",
        "GenAI Development",
      ],
      achievements: [
        "Built cross-platform app with Expo",
        "Laravel backend with Redis and AWS S3",
        "Next.js dashboard with modern UI/UX",
        "Seamless real-time chat and networking",
      ],
    },
    contactInfo: {
      title: "Contact Information",
      description: "Ready to discuss opportunities with me?",
      links: [
        { icon: "Mail", label: "imtiaznayim95@gmail.com", variant: "default" },
      ],
      availability: "Contact with me for full-stack development ",
      status: "Open for a position",
    },
  },
};

const Flourish = {
  projectInfo: {
    title: "Flourish",
    subtitle: "Your Personal Finance Companion",
    description:
      "Flourish empowers users to take control of their financial life. Track transactions, manage investments, set financial goals, and gain insights through AI-powered recommendations.",
    badge: "Case Study",
    metadata: [
      {
        title: "Components",
        data: "120+",
      },
      {
        title: "Technology used",
        data: "17+",
      },
      {
        title: "Typescript",
        data: "100%",
      },
      {
        title: "Optimized",
        data: "99%",
      },
    ],
  },

  mockups: [""],

  overview: {
    badge: "Project Overview",
    title: "Simplifying Personal Finance Management",
    description:
      "Flourish provides a comprehensive solution for managing finances, investments, and goals, all in one place.",
    challenges: {
      title: "Challenges",
      description: "Problems users face in personal finance management",
      color: "destructive",
      icon: "Target",
      items: [
        "Difficulty tracking expenses and income in one place",
        "Limited visibility on investments and portfolio performance",
        "Hard to set and monitor financial goals effectively",
        "Lack of AI-driven insights for better decision-making",
      ],
    },
    solutions: {
      title: "Solutions",
      description: "How Flourish addresses these challenges",
      color: "green-600",
      icon: "TrendingUp",
      items: [
        "Centralized dashboard to track finances, portfolio, and goals",
        "AI-powered insights for spending, saving, and investing",
        "Seamless transaction management with bank integrations",
        "Goal-oriented tracking with progress visualizations",
      ],
    },
    stats: [
      { icon: "Users", value: "Not launched yet", label: "Active Users" },
      { icon: "Clock", value: "4 Month", label: "Development Time" },
      { icon: "Target", value: "100%", label: "Goal Achievement Support" },
      { icon: "TrendingUp", value: "Smart", label: "Financial Insights" },
    ],
  },

  techStack: {
    badge: "Technology Stack",
    title: "Modern Cross-Platform Technologies",
    description:
      "Flourish is built with scalable backend, mobile, and web technologies ensuring performance and reliability.",
    stacks: [
      {
        title: "Mobile App",
        color: "blue",
        description:
          "Expo React Native app with typed routes and modern libraries",
        technologies: [
          {
            name: "React Native",
            description: "Cross-platform mobile development",
          },
          { name: "Expo", description: "Framework for React Native apps" },
          { name: "React Query", description: "Data fetching and caching" },
          { name: "Revenue-cat", description: "in-app purchase feature" },
          {
            name: "Clerk",
            description: "Authentication and Multi factor auth",
          },

          {
            name: "TailwindCSS / Nativewind",
            description: "Styling and utility classes",
          },
          { name: "Zustand", description: "Lightweight state management" },
          { name: "Expo Notifications", description: "Push notifications" },
        ],
      },
      {
        title: "Backend",
        color: "green",
        description: "Bun + Hono server with integrations for finance and AI",
        technologies: [
          {
            name: "Bun + Hono",
            description: "High-performance backend framework",
          },
          {
            name: "MongoDB (Mongoose)",
            description: "Database for transactions & portfolio",
          },
          { name: "Redis", description: "Caching & session management" },
          { name: "Plaid API", description: "Bank account integration" },
          { name: "OpenAI API", description: "AI-powered insights and chat" },
          { name: "Svix", description: "Webhook management" },
          {
            name: "Clerk",
            description: "Authentication and Multi factor auth",
          },
        ],
      },
      {
        title: "Web Dashboard",
        color: "purple",
        description: "React + Vite powered web app for portfolio & analytics",
        technologies: [
          { name: "React", description: "Web interface development" },
          { name: "Vite", description: "Fast bundler for development" },
          {
            name: "ShadCN + Radix UI",
            description: "Accessible UI components",
          },
          { name: "Recharts & Chart.js", description: "Data visualization" },
          {
            name: "React Hook Form + Zod",
            description: "Forms and validation",
          },
          {
            name: "Clerk",
            description: "Authentication and Multi factor auth",
          },
        ],
      },
    ],
  },

  features: {
    badge: "Key Features",
    title: "Powerful Features That Simplify Finance Management",
    description:
      "Flourish combines transaction tracking, portfolio management, goal setting, and AI-driven insights in a single platform.",
    featureList: [
      {
        icon: "CreditCard",
        title: "Transaction Tracking",
        description: "Easily manage all your income and expenses",
        details: [
          "Add Transactions",
          "Recurring Expenses",
          "Categorization",
          "Bank Integrations",
        ],
      },
      {
        icon: "TrendingUp",
        title: "Portfolio Management",
        description: "Track your stocks and investments in real-time",
        details: [
          "Add Stocks",
          "View Performance",
          "Investment Insights",
          "Portfolio Analytics",
        ],
      },
      {
        icon: "Target",
        title: "Goal Setting",
        description: "Set and track financial goals such as savings and debt",
        details: [
          "Emergency Fund",
          "Debt Payoff",
          "Investment Goals",
          "Savings Plans",
        ],
      },
      {
        icon: "MessageCircle",
        title: "AI Insights & Chat",
        description: "Get personalized recommendations and AI guidance",
        details: [
          "Expense Analysis",
          "Investment Advice",
          "Budget Improvement",
          "Real-time Chat Assistance",
        ],
      },
      {
        icon: "PieChart",
        title: "Analytics & Reports",
        description: "Visualize your financial data with charts and dashboards",
        details: [
          "Portfolio Charts",
          "Transaction Summaries",
          "Goal Progress",
          "Spending Patterns",
        ],
      },
    ],
  },

  architecture: {
    badge: "System Architecture",
    title: "Cross-Platform Scalable Solution",
    description:
      "Flourish uses a modern architecture connecting mobile apps, backend APIs, and web dashboards seamlessly.",
    overview: {
      title: "System Overview",
      description:
        "Mobile, backend, and web dashboard communicate via API, AI services, and real-time updates.",
    },
    layers: [
      {
        title: "Mobile App Layer",
        color: "blue-500",
        components: [
          {
            title: "Expo React Native",
            desc: "Cross-platform mobile application",
          },
          {
            title: "React Query & Zustand",
            desc: "State management and data fetching",
          },
          { title: "Nativewind / Tailwind", desc: "Styling and theming" },
        ],
      },
      {
        title: "Backend Services",
        color: "green-500",
        components: [
          { title: "Bun + Hono", desc: "API server and business logic" },
          {
            title: "MongoDB + Mongoose",
            desc: "Database for transactions & portfolio",
          },
          {
            title: "Redis + Plaid + OpenAI + Svix",
            desc: "Caching, banking, AI, and webhooks",
          },
        ],
      },
      {
        title: "Web Dashboard",
        color: "purple-500",
        components: [
          { title: "React + Vite", desc: "Web interface and dashboard" },
          {
            title: "ShadCN + Radix UI",
            desc: "Accessible and modern UI components",
          },
          {
            title: "Recharts & Chart.js",
            desc: "Analytics and data visualization",
          },
        ],
      },
    ],
  },

  contact: {
    badge: "Get In Touch",
    title: "About Developer",
    description:
      "Imtiaz Nayeem Shawon Self-taught Full stack developer with 4 years of experience in product development and client services.",
    profile: {
      title: "About Developer",
      description:
        "Imtiaz Nayeem Shawon Self-taught Full stack developer with 4 years of experience in product development and client services.",
      expertise: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "DSA",
        "OOP",
        "React",
        "Next.js",
        "React Native",
        "Redux",
        "Tailwind",
        "Node.js",
        "Express",
        "GraphQL",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Nginx",
        "CI/CD",
        "Payment Gateway",
        "GenAI Development",
      ],
      achievements: [
        "Built cross-platform app with Expo",
        "Laravel backend with Redis and AWS S3",
        "Next.js dashboard with modern UI/UX",
        "Seamless real-time chat and networking",
      ],
    },
    contactInfo: {
      title: "Contact Information",
      description: "Ready to discuss opportunities with me?",
      links: [
        { icon: "Mail", label: "imtiaznayim95@gmail.com", variant: "default" },
      ],
      availability: "Contact with me for full-stack development ",
      status: "Open for a position",
    },
  },
};

const conveyai = {
  projectInfo: {
    title: "Convey AI",
    subtitle: "All-in-One Conveyancing Platform",
    description:
      "Simplifying property transactions by connecting Vendors, Purchasers, Real Estate Agents, Conveyancers, and Mortgage Brokers into a single unified system.",
    badge: "Case Study",
    link: "https://conveyai.app/",
    metadata: [
      {
        title: "Components",
        data: "300+",
      },
      {
        title: "Technology used",
        data: "50+",
      },
      {
        title: "Typescript",
        data: "100%",
      },
      {
        title: "Optimized",
        data: "99%",
      },
    ],
  },

  mockups: [
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142629/Device_Mockup_Aug_25_2025_14_wmtne3.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142625/Device_Mockup_Aug_25_2025_11_mgci1y.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142635/Device_Mockup_Aug_25_2025_13_agfoq0.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142636/Device_Mockup_Aug_25_2025_12_aa175w.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756141643/Device_Mockup_Aug_25_2025_6_ac3xbr.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756141643/Device_Mockup_Aug_25_2025_5_y5rcch.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756141643/Device_Mockup_Aug_25_2025_8_lquouy.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142086/Screenshot_Aug_25_2025_from_PostSpark_1_bklnb3.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756141643/Device_Mockup_Aug_25_2025_7_ubpibf.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142090/Screenshot_Aug_25_2025_from_PostSpark_jldc8n.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142091/Screenshot_Aug_25_2025_from_PostSpark_2_trgisu.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142086/Screenshot_Aug_25_2025_from_PostSpark_1_bklnb3.png",
    "https://res.cloudinary.com/dif5pfkci/image/upload/v1756142084/Device_Mockup_Aug_25_2025_9_vqoix5.png",
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
      { icon: "Users", value: "350+", label: "Active Users" },
      { icon: "Clock", value: "6.5 Months", label: "Development Time" },
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
          { name: "CompPDF", description: "PDF Editor" },
          { name: "Dropbox sign", description: "E-signature management" },
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
            name: "Redis + BullMQ",
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
    title: "About Developer",
    description:
      "Imtiaz Nayeem Shawon Self-taught Full stack developer with 4 years of experience in product development and client services.",
    profile: {
      title: "About Developer",
      description:
        "Imtiaz Nayeem Shawon Self-taught Full stack developer with 4 years of experience in product development and client services.",
      expertise: [
        "JavaScript",
        "TypeScript",
        "Python",
        "C++",
        "DSA",
        "OOP",
        "React",
        "Next.js",
        "React Native",
        "Redux",
        "Tailwind",
        "Node.js",
        "Express",
        "GraphQL",
        "REST APIs",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Nginx",
        "CI/CD",
        "Payment Gateway",
        "GenAI Development",
      ],
      achievements: [
        "Built cross-platform app with Expo",
        "Laravel backend with Redis and AWS S3",
        "Next.js dashboard with modern UI/UX",
        "Seamless real-time chat and networking",
      ],
    },
    contactInfo: {
      title: "Contact Information",
      description: "Ready to discuss opportunities with me?",
      links: [
        { icon: "Mail", label: "imtiaznayim95@gmail.com", variant: "default" },
      ],
      availability: "Contact with me for full-stack development ",
      status: "Open for a position",
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

const TaskFlowCaseStudy = ({ params }) => {
  const { name } = params;
  const projects = [
    { name: "vestornet", data: vestornet },
    { name: "flourish", data: Flourish },
    { name: "conveyai", data: conveyai },
  ];
  const projectData =
    projects.find((project) => project.name === name)?.data || projectData;

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent || Target;
  };

  return (
    <div className="min-h-screen bg-[#101010]">
      {/* Hero Section */}
      <HeroSection data={projectData?.projectInfo} />

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
        </div>
        <div className="relative w-full overflow-hidden">
          {/* Shadow left */}
          <div className="pointer-events-none absolute left-0 top-0 h-[100%] w-40 bg-gradient-to-r from-black/60 to-transparent z-10" />

          {/* Shadow right */}
          <div className="pointer-events-none absolute right-0 top-0 h-[100%] w-40 bg-gradient-to-l from-black/60 to-transparent z-10" />

          <Marquee speed={120} gradient={false}>
            <div className="flex gap-0">
              {projectData?.mockups?.map((mockup, index) => (
                <div key={index} className="">
                  <Image
                    src={mockup}
                    alt={`mockup-${index}`}
                    width={800}
                    height={600}
                    className="h-[600px]"
                  />
                </div>
              ))}
            </div>
          </Marquee>
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#60A5FA"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-milestone-icon lucide-milestone"
                              >
                                <path d="M12 13v8" />
                                <path d="M12 3v3" />
                                <path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z" />
                              </svg>{" "}
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

                  {/* <div>
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
                  </div> */}
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
                      <a href="https://docs.google.com/document/d/1OkUC-uBpFHLvS_snV8p1VtwFmXLvihJZ/edit?usp=sharing&ouid=106823129058087044514&rtpof=true&sd=true" className="w-full flex items-center gap-2 mx-auto justify-center text-sm font-medium text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Resume
                      </a>
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
