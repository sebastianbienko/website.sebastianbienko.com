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
          subtitle="High-concurrency storage engines, schema design, and query optimization for transactional and analytical workloads."
          skills={operationalAndAnalyticalDatabasesSkillList}
        />
        <Tile
          icon={<RiCodeSSlashLine size="4em" />}
          title="High-Performance Data APIs"
          subtitle="Production-grade API patterns, gRPC/REST endpoints, and microservices engineered for low-latency data access."
          skills={highPerformanceDataApisSkillList}
        />
        <Tile
          icon={<RiFlowChart size="4em" />}
          title="Workflow Automation & Data Pipelines"
          subtitle="Production orchestration and pipeline design connecting operational systems to analytical destinations."
          skills={streamingAndDataPipelinesSkillList}
        />
      </Root>
    </>
  );
};

export default Skills;
