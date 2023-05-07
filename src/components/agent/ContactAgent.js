import "../../styles/agent/ContactAgent.css";
import { agentList } from "../../datas/agentList";
import { annonceList } from "../../datas/annonceList";

function ContactAgent() {
  const agentInfos = (agentName) =>
    agentList.find((agent) => agent.agentName === agentName);

  return (
    <div>
      <h3>Agent</h3>
      {annonceList.map(({ id, agentName }) => (
        <div key={id}>
          <div className="headingBanner">
            <img src={agentInfos(agentName).photo1} alt="Agent profile pic" />
          </div>

          <div>
            <h5>{agentInfos(agentName).agentName}</h5>
            <span>Estate Agent - {agentInfos(agentName).statutAgent}</span>
          </div>

          <div>
            <h5>Details</h5>
            <p>{agentInfos(agentName).details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactAgent;
