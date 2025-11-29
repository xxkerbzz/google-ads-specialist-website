const fs = require('fs');
const path = require('path');

// Pages to update
const pages = [
  'app/case-studies/page.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/resources/page.tsx',
  'app/google-ads-for-hvac/page.tsx',
  'app/google-ads-for-plumbing/page.tsx',
  'app/resources/hvac/hvac-lead-generation-strategies/page.tsx'
];

const projectRoot = path.join(__dirname, '..');

pages.forEach(pagePath => {
  const fullPath = path.join(projectRoot, pagePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${pagePath} - file not found`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');

  // Check if already updated
  if (content.includes('@/components/Navigation')) {
    console.log(`Skipping ${pagePath} - already updated`);
    return;
  }

  // Add imports after the first import statement
  const importRegex = /^(import\s+.*from\s+['"].*['"];?\n)/m;
  if (importRegex.test(content)) {
    content = content.replace(importRegex, '$1import Navigation from "@/components/Navigation";\nimport Footer from "@/components/Footer";\n');
  }

  // Replace navigation section
  const navRegex = /\s*\{\/\*\s*Navigation\s*\*\/\}\s*<nav className="border-b border-gray-200">[\s\S]*?<\/nav>/;
  content = content.replace(navRegex, '\n      <Navigation />');

  // Replace footer section
  const footerRegex = /\s*\{\/\*\s*Footer\s*\*\/\}\s*<footer className="bg-gray-900[\s\S]*?<\/footer>/;
  content = content.replace(footerRegex, '\n      <Footer />');

  // Write back the file
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✓ Updated ${pagePath}`);
});

console.log('\nDone!');
