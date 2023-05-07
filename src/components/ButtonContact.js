import { Button, Box } from "react-bulma-components";
import { agentList } from "../datas/agentList";
import { annonceList } from "../datas/annonceList";

function ButtonContact() {
  const agentInfos = (agentName) =>
    agentList.find((agent) => agent.agentName === agentName);

  return (
    <div>
      {annonceList.map(({ id, agentName }) => (
        <Box key={id}>
          <a href={`tel:${agentInfos(agentName).phoneNumber}`}>Contact</a>
        </Box>
      ))}
    </div>
  );
}

export default ButtonContact;
