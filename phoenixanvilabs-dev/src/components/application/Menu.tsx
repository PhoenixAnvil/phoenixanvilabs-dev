import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  const menuItems = [
    { caption: "Home", route: "/", external: false },
    { caption: "About Me", route: "/about", external: false },
    { caption: "Mission", route: "/mission", external: false },
    { caption: "Vision", route: "/vision", external: false },
    { caption: "Resume", route: "https://example.com/resume.pdf", external: true },
    { caption: "LinkedIn", route: "https://www.linkedin.com/in/jason-alan-smith", external: true },
    { caption: "Facebook", route: "https://www.facebook.com/profile.php?id=61574893426532", external: true },
    { caption: "X", route: "https://x.com/PhoenixAnvil", external: true },
    { caption: "Dev Workflow", route: "/devworkflow", external: false },
    { caption: "Tools", route: "/tools", external: false },
    { caption: "GitHub", route: "https://github.com/PhoenixAnvil", external: true },
    { caption: "Jira", route: "https://www.atlassian.com/software/jira", external: true },
    { caption: "Confluence", route: "https://www.atlassian.com/software/confluence", external: true },
    { caption: "Aha!", route: "https://www.aha.io/roadmaps/overview/", external: true },
    { caption: "RFC Editor", route: "https://www.rfc-editor.org", external: true },
    { caption: "Docs", route: "/docs", external: false },
    { caption: "Favorites", route: "/favorites", external: false },
    { caption: "CS Library", route: "/cslib", external: false },
    { caption: "FLOSS Network", route: "https://flossnet.io", external: true },
    { caption: "FLOSS Developer Network", route: "https://flossdn.io", external: true },
  ];

  return (
      <ul className={styles.ul}>
        {menuItems.map((item, index) => (
          <li className={styles.li} key={index}>
            {item.external ? (
              <a className={styles.a} href={item.route} target="_blank" rel="noopener noreferrer">
                {item.caption}
              </a>
            ) : (
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                {item.caption}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
  );
};

export default Menu
