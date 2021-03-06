import React from "react";
import { Menu } from "semantic-ui-react";

const items = [
  { href: "#sobre", key: "SOBRE", name: "SOBRE" },
  { href: "#lika", key: "lika", name: "LIKA" },
  { href: "#spg", key: "spg", name: "SPG" },
  { href: "#voxar", key: "voxar", name: "VOXAR" },
  { href: "#relatos", key: "relatos", name: "RELATOS" },
  { href: "#pet", key: "pet", name: "PET" },
  { href: "#edital", key: "edital", name: "EDITAL" },
  { href: "#inscricoes", key: "inscricoes", name: "INSCRIÇÕES" }
];

const Navbar = () => (
  <Menu inverted borderless items={items} widths={5} stackable />
);

export default Navbar;
