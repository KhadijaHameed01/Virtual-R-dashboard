// Importing images
import user1 from './user1.jpg';
import user2 from './user2.jpg';
import user3 from './user3.jpg';
import CodingPhoto from './CodingPhoto.png'
import logo from './logo.jpeg.webp';
import video1 from './video1.mp4';
import video2 from './video2.mp4';
import video3 from './video3.mp4'; 
import video4 from './video4.mp4'
import { BotMessageSquare, Code, Cpu, Monitor, Cloud, LayoutDashboard } from "lucide-react";
// Navigation items
export const navItems = [
     {label:'Home',href:'/'},
    { label: 'Features', href: '/features' },
    { label: 'WorkFlow', href: '/workflow' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonials' },
];

// Testimonials data
export const testimonials = [
    { id: 1, photo: user1, company: 'Company 1', name: 'John Doe', text: 'This is a testimonial Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a quisquam aut vero nesciunt omnis rem illo eum quidem temporibus cupiditate dolor ' },
    { id: 2, photo: user2, company: 'Company 2', name: 'Jan Frame', text: 'This is another testimonial Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a quisquam aut vero nesciunt omnis rem illo eum quidem temporibus cupiditate dolor ' },
    { id: 3, photo: user3, company: 'Company 3', name: 'Allison', text: 'This is a third testimonial Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a quisquam aut vero nesciunt omnis rem illo eum quidem temporibus cupiditate dolor ' },
    { id: 1, photo: user1, company: 'Company 4', name: 'David Jon', text: 'This is a testimonial Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a quisquam aut vero nesciunt omnis rem illo eum quidem temporibus cupiditate dolor ' },
    { id: 2, photo: user2, company: 'Company 5', name: 'Jane Doe', text: 'This is another testimonial Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a quisquam aut vero nesciunt omnis rem illo eum quidem temporibus cupiditate dolor ' },
    { id: 3, photo: user3, company: 'Company 6', name: 'Dang Doe', text: 'This is a third testimonial Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a quisquam aut vero nesciunt omnis rem illo eum quidem temporibus cupiditate dolor ' }
];
// Logo for the Navbar
export const NavaBarlogo = logo;

export const workFlowPhoto= CodingPhoto;

export const videos = [
    video1,video2,video3,video4
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description: "Drag and drop interface for easy workflow creation.",
  },
  {
    icon: <Code />,
    text: "Code Generation",
    description: "Automatically generate optimized code for various frameworks.",
  },
  {
    icon: <Cpu />,
    text: "AI-Powered Suggestions",
    description: "Receive intelligent recommendations to improve your workflow.",
  },
  {
    icon: <Monitor />,
    text: "Cross-Platform Compatibility",
    description: "Seamlessly integrate across multiple devices and platforms.",
  },
  {
    icon: <Cloud />,
    text: "Cloud Integration",
    description: "Store and manage your projects securely in the cloud.",
  },
  {
    icon: <LayoutDashboard />,
    text: "Customizable Dashboards",
    description: "Personalize your workspace with customizable layouts and widgets.",
  },
];

export const checklistItems = [
  {
    title: "Code Merge Made Easy",
    description: "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Real-Time Collaboration",
    description: "Work seamlessly with your team on the same project from anywhere in the world.",
  },
  {
    title: "Powerful Analytics Tools",
    description: "Analyze and optimize your app's performance with comprehensive analytics.",
  },
  {
    title: "Customizable User Interface",
    description: "Design the UI that fits your app's unique requirements with our flexible tools.",
  },
  {
    title: "Secure Data Management",
    description: "Protect your app and user data with our advanced security measures.",
  },
  {
    title: "Scalable Solutions",
    description: "Easily scale your app to handle increased demand without compromising performance.",
  },
];

 export const pricingOptions = [
  {
    id: 1,
    name: "Basic",
    price: "$99",
    description: "A simple and professional landing page to establish your online presence.",
    features: [
      "1-page design",
      "Responsive layout",
      "Basic animations",
      "SEO-friendly structure",
    ],
    recommended: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "$199",
    description: "An advanced landing page with additional features for growing businesses.",
    features: [
      "Up to 3 pages",
      "Custom animations",
      "Integration with contact forms",
      "SEO and performance optimization",
    ],
    recommended: true, // Highlight this as the best value option
  },
  {
    id: 3,
    name: "Premium",
    price: "$399",
    description: "A fully customized landing page tailored to your brand's unique needs.",
    features: [
      "Unlimited pages",
      "Premium animations and transitions",
      "Advanced integrations (e.g., analytics, email marketing)",
      "Priority support and maintenance for 3 months",
    ],
    recommended: false,
  },
];

 export const resourcesLinks = [
  { text: "Documentation", link: "#" },
  { text: "Tutorials", link: "#" },
  { text: "Guides", link: "#" },
  { text: "FAQ", link: "#" },
  { text: "API Reference", link: "#" },
];

 export const platformLinks = [
  { text: "Dashboard", link: "#" },
  { text: "Features", link: "#" },
  { text: "Pricing", link: "#" },
  { text: "Integrations", link: "#" },
  { text: "Analytics", link: "#" },
];

export const communityLinks = [
  { text: "Forum", link: "#" },
  { text: "Slack Channel", link: "#" },
  { text: "Discord Server", link: "#" },
  { text: "GitHub", link: "#" },
  { text: "Meetups", link: "#" },
];
