type SocialLinkProps = {
  name: string;
  linkText: string;
  linkhref: string;
};

const socialLinks = [
  {
    name: "Github",
    linkText: "@benpjenkins",
    linkHref: "https://github.com/benpjenkins",
  },
  {
    name: "LinkedIn",
    linkText: "@benpjenkins",
    linkHref: "https://www.linkedin.com/in/benpjenkins/",
  },
  {
    name: "Twitter",
    linkText: "@benjenkinsdev",
    linkHref: "https://twitter.com/benjenkinsdev",
  },
  {
    name: "Email",
    linkText: "ben@benjenkins.dev",
    linkHref: "mailto:ben@benjenkins.dev",
  },
];

const SocialLink = (props: SocialLinkProps) => {
  return (
    <p>
      {props.name}&nbsp;
      <a className="text-blue-700 dark:text-blue-300" href={props.linkhref}>
        {props.linkText}
      </a>
    </p>
  );
};

const SocialLinks = () => {
  return (
    <div className="mt-8">
      {socialLinks.map((link) => (
        <SocialLink
          name={link.name}
          linkText={link.linkText}
          linkhref={link.linkHref}
          key={link.name}
        />
      ))}
      <br />
    </div>
  );
};

export default SocialLinks;
