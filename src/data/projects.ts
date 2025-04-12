interface Project {
  id: string;
  title: string;
  description: string;
  size: string;
  url: string;
}

export const projects: Record<string, Project> = {
  urFitChild: {
    id: 'urFitChild',
    title: 'urFit-child',
    description:
      'The main website of Prof. Andrew Agbaje — a world-renowned expert in arterial stiffness and ranked among the top three globally — and his urFit-child research group. \n\nThe site features 14 in-depth pages with over 160 scientific publications, press releases, additional resources, and more than 15 research-focused videos, all highlighting impactful work in the field.',
    size: 'Large',
    url: 'https://www.urfit-child.com',
  },
  flameTheFreeze: {
    id: 'flameTheFreeze',
    title: 'Flame the Freeze',
    description:
      'An in-depth online hub for the ministry’s message and mission. The site spans eight thoughtfully designed pages with extensive content on topics like prayer, the Word of God, true churches, and the five-fold ministry. It features six videos, bilingual support in English and Finnish, and both light and dark mode for an adaptable user experience.',
    size: 'Medium',
    url: 'https://www.flamethefreeze.com',
  },
  prayerChurch: {
    id: 'prayerChurch',
    title: 'Prayer Church',
    description:
      'The official website of Prayer Church — a small, local gathering with a big impact. The site highlights powerful testimonies of lives transformed by the work of God through the Holy Spirit. It presents the church’s core values, introduces its community, and offers access to over 15 testimonies and a growing number of podcasts.',
    size: 'Small',
    url: 'https://www.rukouksenseurakunta.fi',
  },
};
