"use client";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const links = [
  {
    title: "Github",
    icon: <IconBrandGithub />,
    href: "#",
  },
  {
    title: "Instagram",
    icon: <IconBrandInstagram />,
    href: "#",
  },
  {
    title: "Linked in",
    icon: <IconBrandLinkedin />,
    href: "#",
  },
  {
    title: "Twitter",
    icon: <IconBrandTwitter />,
    href: "#",
  },
];

const NavigationDock = () => {
  return (
    <motion.div className="fixed md:hidden bottom-5 flex bg-zinc-0 p-2 gap-3 rounded-2xl z-[1000] shadow-md left-1/2 -translate-x-1/2 backdrop-blur-md">
      {links.map((link) => (
        <motion.a
          whileHover={{ scale: 1.4, type: "spring" }}
          className="cursor-pointer"
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default NavigationDock;
