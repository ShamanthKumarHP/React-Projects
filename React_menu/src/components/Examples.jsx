import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(x=>{
      console.log("previous", x)
      return selectedButton;
    });
    // setSelectedTopic(selectedButton)
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      />
      {/* <menu>
      <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
      <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton  isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
      <TabButton  isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton> */}
      {/* <TabButton label="Components" /> */}
      {/* </menu> */}
      {!selectedTopic && <p>Please select a topic</p>}
      {selectedTopic ? (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ) : null}
    </Section>
  );
}
