import * as React from "react";
import clsx from "clsx";

type DevIconOptions = {
  colored?: boolean;
  wordmark?: boolean;
};

const renderDevIcon = (
  icon: string,
  options: DevIconOptions = { colored: true }
) => (
  <div
    className={clsx(
      `devicon-${icon}-plain${options.wordmark ? "-wordmark" : ""}`,
      options.colored ? "colored" : undefined
    )}
  />
);

export default [
  { name: "React", icon: renderDevIcon("react"), href: "https://reactjs.org/" },
  {
    name: "Javascript",
    icon: renderDevIcon("javascript"),
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    icon: renderDevIcon("typescript"),
    href: "https://www.typescriptlang.org/"
  },
  {
    name: "NodeJS",
    icon: renderDevIcon("nodejs"),
    href: "https://nodejs.org/en/"
  },
  {
    name: "CSS",
    icon: renderDevIcon("css3"),
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "Less",
    icon: renderDevIcon("less", { wordmark: true }),
    href: "http://lesscss.org/"
  },
  {
    name: "webpack",
    icon: renderDevIcon("webpack"),
    href: "https://webpack.js.org/"
  },
  {
    name: "Ruby",
    icon: renderDevIcon("ruby"),
    href: "https://www.ruby-lang.org/en/"
  },
  {
    name: "Rails",
    icon: renderDevIcon("rails"),
    href: "https://rubyonrails.org/"
  },
  {
    name: "Python",
    icon: renderDevIcon("python"),
    href: "https://www.python.org/"
  },
  {
    name: "Django",
    icon: renderDevIcon("django"),
    href: "https://www.djangoproject.com/"
  },
  { name: "Git", icon: renderDevIcon("git"), href: "https://git-scm.com/" },
  {
    name: "Linux",
    icon: renderDevIcon("linux"),
    href: "https://wiki.archlinux.org/"
  },
  {
    name: "nginx",
    icon: renderDevIcon("nginx"),
    href: "https://www.nginx.com/"
  },
  {
    name: "PostgreSql",
    icon: renderDevIcon("postgresql"),
    href: "https://www.postgresql.org/"
  },
  {
    name: "Docker",
    icon: renderDevIcon("docker"),
    href: "https://www.docker.com/"
  },
  {
    name: "Heroku",
    icon: renderDevIcon("heroku"),
    href: "https://www.heroku.com/"
  }
];
