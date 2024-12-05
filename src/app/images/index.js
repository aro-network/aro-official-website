import IconEfficiency from "./IconEfficiency";
import IconMatch from "./IconMatch";
import IconReliability from "./IconReliability";
import IconStack from "./IconStack";
import IconTeam from "./IconTeam";
import IconProtocol from "./IconProtocol";

export const base = {
  IconTeam,
  IconEfficiency,
  IconStack,
  IconMatch,
  IconReliability,
  IconProtocol,
};

const Icon = ({ name, ...otherProps }) => {
  const I = base[name];
  return I ? <I {...otherProps} /> : null;
};

export default Icon;
