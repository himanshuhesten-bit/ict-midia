// Company details and navigation live here once, so the header, footer and
// contact page can never drift apart.

const addressLines = [
  "Bhagyashree Apartment,",
  "Rahate Colony Square,",
  "Nagpur, Maharashtra 440022",
];

export const site = {
  name: "ICT Media Pvt. Ltd.",
  shortName: "ICT Media",
  expansion: "Innovating Communication Techniques",
  tagline: "Bridging Government & People Through Strategic Communication",
  phone: { display: "+91 74101 07181", href: "tel:+917410107181" },
  email: "connect@ictmedia.in",
  workingHours: "Mon - Sat: 9:30 AM - 6:30 PM",
  addressLines,
  fullAddress: "Bhagyashree Apartment, Rahate Colony Square, Nagpur, Maharashtra 440022",
  city: "Nagpur",
  state: "Maharashtra",
  country: "India",
  yearEstablished: "2013",
  experienceYears: "13+",
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLines.join(" "))}`,
  social: {
    facebook: "https://facebook.com/ictmedia",
    linkedin: "https://linkedin.com/company/ictmedia",
    instagram: "https://instagram.com/ictmedia",
    youtube: "https://youtube.com/@ictmedia",
  },
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/government-pr", label: "Government PR" },
  { href: "/clients", label: "Clients & Impact" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];
