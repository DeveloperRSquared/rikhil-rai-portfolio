'use client';

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';

const links = [
  {
    title: 'Github',
    icon: <IconBrandGithub />,
    href: 'https://github.com/rikhilrai',
  },
  {
    title: 'Instagram',
    icon: <IconBrandInstagram />,
    href: 'https://www.instagram.com/bansuriboy/',
  },
  {
    title: 'Linked in',
    icon: <IconBrandLinkedin />,
    href: 'https://www.linkedin.com/in/rikhilrai/',
  },
  {
    title: 'Twitter',
    icon: <IconBrandTwitter />,
    href: 'https://www.linkedin.com/in/rikhilrai/',
  },
];

const NavigationDock = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'white' : 'dark');
  };

  return (
    <motion.div className="fixed md:hidden bottom-5 flex bg-zinc-0 p-2 gap-3 rounded-2xl z-[1000] shadow-md left-1/2 -translate-x-1/2 backdrop-blur-md">
      {links.map((link) => (
        <motion.a
          href={link.href}
          target="_blank"
          key={`navigation-link-` + link.title}
          whileHover={{ scale: 1.4, type: 'spring' }}
          className="cursor-pointer dark:text-white"
        >
          {link.icon}
        </motion.a>
      ))}
      <SunMoon
        size={25}
        onClick={switchTheme}
        className="cursor-pointer ml-3"
      />
    </motion.div>
  );
};

export default NavigationDock;
