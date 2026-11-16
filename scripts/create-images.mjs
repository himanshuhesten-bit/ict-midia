import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("public/images");
const SERVICES_DIR = path.resolve("public/images/services");

if (!fs.existsSync(SERVICES_DIR)) {
  fs.mkdirSync(SERVICES_DIR, { recursive: true });
}

// 1. Vector mascot in WebP format
const mascotSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480" fill="none">
  <defs>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#243C4B"/>
      <stop offset="100%" stop-color="#142129"/>
    </linearGradient>
    <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BEF264"/>
      <stop offset="100%" stop-color="#84CC16"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6"/>
      <stop offset="100%" stop-color="#0E7490"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#0B1319" flood-opacity="0.3"/>
    </filter>
  </defs>

  <ellipse cx="200" cy="445" rx="100" ry="14" fill="#182831" opacity="0.2"/>

  <g filter="url(#shadow)">
    <!-- Signal Antenna -->
    <path d="M200 135 L200 78" stroke="#182831" stroke-width="6" stroke-linecap="round"/>
    <circle cx="200" cy="70" r="14" fill="url(#limeGrad)"/>
    <circle cx="200" cy="70" r="23" stroke="url(#limeGrad)" stroke-width="3" stroke-dasharray="4 4" opacity="0.6"/>

    <!-- Main Character Body -->
    <rect x="90" y="120" width="220" height="280" rx="110" fill="url(#bodyGrad)"/>

    <!-- Acoustic Side Sensors -->
    <rect x="74" y="210" width="20" height="52" rx="10" fill="url(#tealGrad)"/>
    <rect x="306" y="210" width="20" height="52" rx="10" fill="url(#tealGrad)"/>

    <!-- Face Screen -->
    <rect x="114" y="148" width="172" height="150" rx="54" fill="#0D161C" stroke="#2A4351" stroke-width="4"/>

    <!-- Big Eyes -->
    <g>
      <circle cx="162" cy="214" r="30" fill="#FFFFFF"/>
      <circle cx="166" cy="214" r="18" fill="#182831"/>
      <circle cx="172" cy="208" r="7" fill="url(#limeGrad)"/>
      <circle cx="160" cy="221" r="3" fill="#FFFFFF"/>

      <circle cx="238" cy="214" r="30" fill="#FFFFFF"/>
      <circle cx="242" cy="214" r="18" fill="#182831"/>
      <circle cx="248" cy="208" r="7" fill="url(#limeGrad)"/>
      <circle cx="236" cy="221" r="3" fill="#FFFFFF"/>
    </g>

    <!-- Cheeks Blush -->
    <ellipse cx="138" cy="254" rx="11" ry="6" fill="url(#limeGrad)" opacity="0.65"/>
    <ellipse cx="262" cy="254" rx="11" ry="6" fill="url(#limeGrad)" opacity="0.65"/>

    <!-- Cheerful Smile -->
    <path d="M188 250 Q200 263 212 250" stroke="url(#limeGrad)" stroke-width="5" stroke-linecap="round" fill="none"/>

    <!-- Front Badge / Sound Wave Monogram -->
    <rect x="140" y="322" width="120" height="52" rx="26" fill="#182831" stroke="#2A4351" stroke-width="2"/>
    <path d="M166 348 L174 348 M180 342 L180 354 M187 337 L187 359 M194 343 L194 353 M201 335 L201 361 M208 339 L208 357 M215 343 L215 353 M222 348 L234 348" stroke="url(#limeGrad)" stroke-width="3" stroke-linecap="round"/>

    <!-- Little Feet -->
    <rect x="136" y="386" width="42" height="26" rx="13" fill="url(#tealGrad)"/>
    <rect x="222" y="386" width="42" height="26" rx="13" fill="url(#tealGrad)"/>

    <!-- Waving Arms -->
    <g transform="translate(288, 275) rotate(-15)">
      <rect x="0" y="0" width="30" height="48" rx="15" fill="url(#limeGrad)"/>
      <path d="M15 12 L15 36" stroke="#182831" stroke-width="3" stroke-linecap="round"/>
    </g>
    <g transform="translate(82, 275) rotate(15)">
      <rect x="0" y="0" width="30" height="48" rx="15" fill="url(#tealGrad)"/>
    </g>
  </g>
</svg>
`;

// List of photography images to fetch & optimize
const photoImages = [
  {
    target: "editorial-hero.jpg",
    width: 1600,
    height: 1100,
    url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
    title: "Strategic Public Communication",
    subtitle: "Connecting policy with people across communities"
  },
  {
    target: "community.jpg",
    width: 1400,
    height: 900,
    url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1400&q=80",
    title: "Citizen Engagement",
    subtitle: "Meaningful dialogues and public consultation"
  },
  {
    target: "media-coverage.jpg",
    width: 1400,
    height: 900,
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80",
    title: "Media Coverage & Public Relations",
    subtitle: "Institutional press and multi-channel reach"
  },
  {
    target: "governance-building.jpg",
    width: 1400,
    height: 900,
    url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1400&q=80",
    title: "Governance & Institutions",
    subtitle: "Building enduring public trust through credibility"
  },
  {
    target: "workshop-audience.jpg",
    width: 1400,
    height: 900,
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1400&q=80",
    title: "Workshops & Public Seminars",
    subtitle: "Interactive sessions turning information into action"
  },
  {
    target: "services/creative-services.jpg",
    width: 1200,
    height: 800,
    url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    title: "Creative Services",
    subtitle: "Visual storytelling, brand identities and campaigns"
  },
  {
    target: "services/publications.jpg",
    width: 1200,
    height: 800,
    url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    title: "Publications",
    subtitle: "Civic reports, magazines and official documentation"
  },
  {
    target: "services/media-management.jpg",
    width: 1200,
    height: 800,
    url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    title: "Media Management",
    subtitle: "Print, electronic and broadcast outreach"
  },
  {
    target: "services/digital-pr.jpg",
    width: 1200,
    height: 800,
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    title: "Digital PR",
    subtitle: "Social platforms, digital communities and online narratives"
  },
  {
    target: "services/it-solutions.jpg",
    width: 1200,
    height: 800,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "IT Solutions",
    subtitle: "Portals, civic tech platforms and digital systems"
  }
];

function generateFallbackSvg(width, height, title, subtitle) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#182831"/>
        <stop offset="60%" stop-color="#142129"/>
        <stop offset="100%" stop-color="#0B1319"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#A3E635"/>
        <stop offset="100%" stop-color="#0E7490"/>
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#243C4B" stroke-width="1" opacity="0.35"/>
      </pattern>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)"/>
    <rect width="${width}" height="${height}" fill="url(#grid)"/>

    <circle cx="${width * 0.8}" cy="${height * 0.3}" r="${Math.min(width, height) * 0.4}" fill="#0E7490" opacity="0.15" filter="blur(60px)"/>
    <circle cx="${width * 0.2}" cy="${height * 0.7}" r="${Math.min(width, height) * 0.35}" fill="#A3E635" opacity="0.1" filter="blur(50px)"/>

    <g transform="translate(80, ${height / 2 - 50})">
      <rect x="0" y="-30" width="60" height="4" fill="url(#accent)"/>
      <text x="0" y="20" font-family="system-ui, sans-serif" font-size="38" font-weight="700" fill="#FFFFFF">${title}</text>
      <text x="0" y="60" font-family="system-ui, sans-serif" font-size="20" font-weight="400" fill="#94A3B8">${subtitle}</text>
    </g>
  </svg>
  `;
}

async function run() {
  console.log("Generating mascot.webp...");
  const mascotPath = path.join(IMAGES_DIR, "mascot.webp");
  await sharp(Buffer.from(mascotSvg))
    .webp({ quality: 95 })
    .toFile(mascotPath);
  console.log("✓ Created mascot.webp:", fs.statSync(mascotPath).size, "bytes");

  for (const item of photoImages) {
    const dest = path.join(IMAGES_DIR, item.target);
    const parentDir = path.dirname(dest);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }

    console.log(`Processing ${item.target}...`);
    try {
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      await sharp(buffer)
        .resize(item.width, item.height, { fit: "cover", position: "centre" })
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(dest);
      console.log(`✓ Fetched & saved ${item.target} (${fs.statSync(dest).size} bytes)`);
    } catch (err) {
      console.warn(`Failed fetching ${item.url}: ${err.message}. Generating styled vector fallback.`);
      const svg = generateFallbackSvg(item.width, item.height, item.title, item.subtitle);
      await sharp(Buffer.from(svg))
        .jpeg({ quality: 90 })
        .toFile(dest);
      console.log(`✓ Created fallback for ${item.target}`);
    }
  }

  console.log("\nAll images generated successfully!");
}

run().catch((err) => {
  console.error("Execution failed:", err);
  process.exit(1);
});

