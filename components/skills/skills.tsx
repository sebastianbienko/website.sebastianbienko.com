import React from "react";
import { RiCodeSSlashLine, RiFlowChart, RiDatabase2Fill } from "react-icons/ri";
import {
  highPerformanceDataApisSkillList,
  operationalAndAnalyticalDatabasesSkillList,
  streamingAndDataPipelinesSkillList,
} from "./skills.data";
import { Intro, Root } from "./skills.styles";
import Tile from "./tile/tile";

const Skills = () => {
  return (
    <>
      <Intro>
        A decade of backend engineering meets deep database expertise to build lean, performant data layers.
      </Intro>
      <Root>
        <Tile
          icon={<RiDatabase2Fill size="4em" />}
          title="Operational & Analytical Databases"
          subtitle="Storage engines and query layers for transactional and analytical workloads."
          skills={operationalAndAnalyticalDatabasesSkillList}
        />
        <Tile
          icon={<RiCodeSSlashLine size="4em" />}
          title="High-Performance Data APIs"
          subtitle="API and service patterns for low-latency, production-ready data access."
          skills={highPerformanceDataApisSkillList}
        />
        <Tile
          icon={<RiFlowChart size="4em" />}
          title="Streaming & Data Pipelines"
          subtitle="Realtime ingestion and delivery flows for event-driven platforms."
          skills={streamingAndDataPipelinesSkillList}
        />
      </Root>
    </>
  );
};

export default Skills;
