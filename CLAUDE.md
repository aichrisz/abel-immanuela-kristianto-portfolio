# Project Brief

Create a modern, dark-themed, single-page portfolio website using React and Tailwind CSS. The design must be a strict 1:1 replication of the provided design reference. Do NOT add any extra forbidden lighting effects, pulse animations, unrequested colors, or stylistic embellishments. Keep it clean and minimal.
Set the background to a solid dark color (#050505).
Set the maximum width for all content sections (excluding the Hero and Footer) to exactly 1440px.

## Required sections and behaviors

1. Global Styles & Behaviors
- Add a custom white circular mouse dot cursor that uses mix-blend-difference. Hide the default cursor.
- Implement smooth scrolling.
- Remove all references to the forbidden animation-library name from visible text.

2. Fixed Hero Section
- The Hero section must stay completely fixed in the background while the rest of the page content slides smoothly over the top of it as the user scrolls down.
- Background Image: Use exactly https://cdn.sceneai.art/Hero%20section%20image/aae9fa10-5214-46ed-b9ef-39f2bed11ac1.avif. Apply a subtle dark overlay so text is readable.
- Navbar: transparent background. Left logo text "PASSION" bold. Center nav links Home, About, Projects, Contact me. Right "Book a call" button.
- Hero bottom content: left heading "EXPERIENCED UI/UX DESIGNER PASSIONATE ABOUT USER NEEDS" with font-size exactly 42px and one small red dot at the end. Right "Contact me" button bottom right.

3. Stats Section
- Split left and right. Left: outlined badge "Selected Work", large heading "My best work", dark grey "Check all projects ->" button. Right: two dark grey chamfered cards side-by-side: "17 Projects", "15 Clients".

4. Projects Section
- Four large project cards stacked vertically. Each card fixed height exactly 800px. Sticky stacked scrolling: each card locks to top and next card slides over it.
- Images in order:
  1. https://cdn.sceneai.art/Image%20for%20any%20section/15e7a8dc-1a1e-4852-b773-0a301a2976b1.webp Finance Dashboard
  2. https://cdn.sceneai.art/Image%20for%20any%20section/c7148f9a-b581-448b-a302-20d534028374.webp SafeRide App
  3. https://cdn.sceneai.art/Image%20for%20any%20section/b778c6ff-c598-49f1-9882-ce4ea3a6b729.webp E-Commerce Platform
  4. https://cdn.sceneai.art/Image%20for%20any%20section/f23ea357-810b-4d57-8a6f-42e14ee5e32c.webp AI Virtual Assistant
- Per card: top-left 2 small category badges. Bottom-left dark tab with project title. No hover scales.

5. About Section
- Top badge with lightning bolt icon reading "About me". Heading "Who I am".
- Split two columns. Left portrait image exactly https://cdn.sceneai.art/Image%20for%20any%20section/221a4527-acd0-49cd-bdcf-71f2819ce5b0.jpg. Do NOT add CSS lighting effects.
- Right text exactly: "With over 3 years of experience in digital product design, I specialise in building scalable design systems and crafting responsive web experiences. I've had the privilege of working with teams from early-stage startups to established tech giants."
- Below: row of 4 pill-shaped dark buttons with white outlines and icons/text: Contra, Email, Behance, Twitter.
- Bottom dark button "Know more" with diagonal top-right arrow.

6. Trusted Brands Section
- Heading exactly "TRUSTED BRANDS I'VE PARTNERED WITH" font-size exactly 36px. Subtext exactly "I've worked with amazing brands like...".
- Static flush 2-row grid, 6 columns desktop. Dark grey square boxes, 1px gap/borders. Center simple white/light grey brand logo in each square.

7. FAQ Section
- Split left/right. Left: badge with square-question-mark icon reading "FAQ'S". Heading "Have a project in mind? Let's make it real." Button "Book a call" with diagonal top-right arrow.
- Right: 6 collapsible accordion items. Each dark grey box with chamfered top-right and bottom-right corners. Question left, + icon far right.

8. Footer
- Top row: left 3 outlined square icon buttons (Email, Sparkle/Dribbble, Twitter), center links Home, Work, About, right pill "Book a call" with diagonal top-right arrow.
- Bottom: massive edge-to-edge white text "SURAJ KALE" using SVG viewBox so it scales from extreme left to extreme right without wrapping.

## Implementation notes
- Use Tailwind CSS classes. Tailwind v3/PostCSS is installed.
- Use Phosphor icons only for icons.
- Do not use the forbidden animation-library word anywhere in source or visible text.
- Do not add forbidden lighting effects, pulse animations, gradients beyond specified subtle dark overlay, unrequested colors, or hover scales.
- Body background must be exactly #050505.
- Section wrapper max width for all non-hero, non-footer content must be exactly max-w-[1440px].
- Must pass npm run build.
