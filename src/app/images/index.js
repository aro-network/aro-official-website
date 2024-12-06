import IconEfficiency from "./IconEfficiency";
import IconMatch from "./IconMatch";
import IconReliability from "./IconReliability";
import IconStack from "./IconStack";
import IconTeam from "./IconTeam";
import IconProtocol from "./IconProtocol";
import IconCloud from "./IconCloud";
import IconEcosystem from "./IconEcosystem";

export const base = {
  IconTeam,
  IconEfficiency,
  IconStack,
  IconMatch,
  IconReliability,
  IconProtocol,
  IconCloud,
  IconEcosystem,
};

const Icon = ({ name, ...otherProps }) => {
  const I = base[name];
  return I ? <I {...otherProps} /> : null;
};

export default Icon;
