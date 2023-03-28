import "../../styles/utils/CardHome.css";
import "bulma/css/bulma.min.css";
import { Card, Media, Content, Heading, Image } from "react-bulma-components";
import { topRealEstate } from "../../datas/topRealEstate";
import { agentList } from "../../datas/agentList";

function CardHome() {
  // Fonction permettant de trouver les informations liées à l'identité des agents (stockés dans la liste agentList) à partir de leur nom renseigné dans la liste topRealEstate

  const agentInfos = (agentName) =>
    agentList.find((agent) => agent.agentName === agentName);

  return (
    <div style={{ display: "flex" }}>
      {topRealEstate.map(
        ({ id, name, picture, address, amountRange, agentName }) => (
          <Card key={id} style={{ width: 300 }}>
            <Card.Image size="4by3" src={picture} alt={`${name} picture`} />
            <Card.Content>
              <Content>
                <h3>{name}</h3>
                <span>{address}</span>
                <br />
                <span>{amountRange}</span>
              </Content>
              <Media key={id}>
                <Media.Item renderAs="figure" align="left">
                  <Image
                    size={64}
                    alt="64x64"
                    src={agentInfos(agentName).photo}
                  />
                </Media.Item>
                <Media.Item>
                  <Heading size={4}>{agentInfos(agentName).agentName}</Heading>
                  <Heading subtitle size={6}>
                    Estate Agent - {agentInfos(agentName).statutAgent}
                  </Heading>
                </Media.Item>
              </Media>
            </Card.Content>
          </Card>
        )
      )}
    </div>
  );
}

export default CardHome;
