import { TileSkillData } from "./tile/tile.models";

const defaultMargins = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
};

export const operationalAndAnalyticalDatabasesSkillList: TileSkillData[] = [
  {
    value: "MongoDB",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "ClickHouse",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "Iceberg",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "Trino",
    factor: 1,
    margins: defaultMargins,
  },
];

export const highPerformanceDataApisSkillList: TileSkillData[] = [
  {
    value: "Microservices",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "Cloud Services",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "Composable Architecture",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "CI / CD",
    factor: 1,
    margins: defaultMargins,
  },
];

export const streamingAndDataPipelinesSkillList: TileSkillData[] = [
  {
    value: "Apache Kafka",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "Apache Flink",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "Dedicated Delivery Networks",
    factor: 1,
    margins: defaultMargins,
  },
  {
    value: "Release / Deployment Processes",
    factor: 1,
    margins: defaultMargins,
  },
];
