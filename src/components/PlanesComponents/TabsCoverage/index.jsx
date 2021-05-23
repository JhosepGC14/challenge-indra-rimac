import React, { useState } from "react";
import "./TabsCoverage.scss";
import { Accordion, Tab, Tabs, useAccordionToggle } from "react-bootstrap";

//images
import StolenTire from "../../../assets/images/planes/icon_stolen_tire.svg";
import Damage from "../../../assets/images/planes/icon_damage.svg";
import LossTotal from "../../../assets/images/planes/icon_loss_total.svg";
import IconAdd from "../../../assets/images/planes/icon_add.svg";
import IconRemove from "../../../assets/images/planes/icon_remove.svg";
import ArrowUp from "../../../assets/images/planes/arrow_up.svg";

const CustomHeader = ({
  eventKey,
  title,
  image,
  handleAddPlan,
  handleRemovePlan,
  addListItem,
  removeListItem,
  typePlan,
  amount,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [prevEventKey, setPrevEventKey] = useState("");
  const [addedPlan, setAddedPlan] = useState(false);

  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    setPrevEventKey(eventKey);
    setExpanded(!expanded);
  });

  const addAmountByPlan = () => {
    if (!addedPlan) {
      handleAddPlan(amount);
      setAddedPlan(!addedPlan);
      addListItem(typePlan);
    } else if (addedPlan) {
      handleRemovePlan(amount);
      setAddedPlan(!addedPlan);
      removeListItem(typePlan);
    }
  };

  return (
    <div className="headerAccordion">
      <div className="headerAccordion__imgSection">
        <img src={image} alt="icon section" />
      </div>
      <div className="headerAccordion__content">
        <span className="headerAccordion__content__title">{title}</span>
        <div className="button_add_remove" onClick={addAmountByPlan}>
          <img src={!addedPlan ? IconAdd : IconRemove} alt="icon" />
          <span>{!addedPlan ? "Agregar" : "Quitar"}</span>
        </div>
      </div>
      <div className="headerAccordion__boxArrow">
        <img
          onClick={decoratedOnClick}
          className={
            eventKey === prevEventKey && expanded
              ? "headerAccordion__expanded"
              : "headerAccordion__notexpanded"
          }
          src={ArrowUp}
          alt="arrow"
        />
      </div>
    </div>
  );
};

const TabsCoverage = ({
  handleAddPlan,
  handleRemovePlan,
  addListItem,
  removeListItem,
}) => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Protege a tu auto">
        <div className="containerAccordion">
          <Accordion>
            <CustomHeader
              eventKey="0"
              title="Llanta robada"
              image={StolenTire}
              handleAddPlan={handleAddPlan}
              handleRemovePlan={handleRemovePlan}
              addListItem={addListItem}
              removeListItem={removeListItem}
              typePlan={1}
              amount={15}
            />
            <Accordion.Collapse eventKey="0" className="accordion_body">
              <p className="textDescriptionItem">
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </p>
            </Accordion.Collapse>
            <hr className="containerPlans__divider" />
            <CustomHeader
              eventKey="1"
              title="Choque y/o pasarte la luz roja"
              image={Damage}
              handleAddPlan={handleAddPlan}
              handleRemovePlan={handleRemovePlan}
              addListItem={addListItem}
              removeListItem={removeListItem}
              typePlan={2}
              amount={20}
            />
            <Accordion.Collapse eventKey="1" className="accordion_body">
              <p className="textDescriptionItem">
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </p>
            </Accordion.Collapse>
            <hr className="containerPlans__divider" />
            <CustomHeader
              eventKey="2"
              title="Atropello en la vía Evitamiento"
              image={LossTotal}
              handleAddPlan={handleAddPlan}
              handleRemovePlan={handleRemovePlan}
              addListItem={addListItem}
              removeListItem={removeListItem}
              typePlan={3}
              amount={50}
            />
            <Accordion.Collapse eventKey="2" className="accordion_body">
              <p className="textDescriptionItem">
                He salido de casa a las cuatro menos cinco para ir a la academia
                de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                bici, na llego a la academia que está en el centro del pueblo en
                una plaza medio-grande y dejo donde siempre la bici atada con
                una pitón a un sitio de esos de poner las bicis y mucho más
              </p>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Protege a los que te rodean">
        <h1>Tabs 2</h1>
      </Tab>
      <Tab eventKey="contact" title="mejora tu plan">
        <h1>Tabs 3</h1>
      </Tab>
    </Tabs>
  );
};

export default TabsCoverage;
