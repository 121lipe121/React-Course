import Section from "../section";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConceptsJSX() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
