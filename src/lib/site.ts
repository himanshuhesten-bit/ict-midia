// Company details and navigation live here once, so the header, footer and
// contact page can never drift apart.

const addressLines = ["Bhagyashree Apartment,", "Rahate Colony Square,", "Nagpur, Maharashtra 440022"];

export const site = {
  name: "ICT Media Pvt. Ltd.",
  shortName: "ICT Media",
  expansion: "Innovating Communication Techniques",
  tagline: "Value Your Brand, Brand Your Values",
  phone: { display: "+91 74101 07181", href: "tel:+917410107181" },
  email: "connect@ictmedia.in",
  addressLines,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLines.join(" "))}`,
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/government-pr", label: "Government PR" },
  { href: "/blogs", label: "Blogs" },
];
