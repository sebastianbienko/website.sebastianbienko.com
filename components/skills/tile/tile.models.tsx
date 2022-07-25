export interface TileProps {
    title: string,
    subtitle: string,
    icon: any,
    skills: TileSkillData[]
}

export interface TileSkillData {
    factor: number,
    margins: TileMargins,
    value: any
}

export interface TileMargins {
    marginTop: number | string,
    marginRight: number | string,
    marginBottom: number | string,
    marginLeft: number | string
}

export interface TileSkillsProps {
    factor: number,
    style: any,
    children: any[]
}

export interface TilePositioningProps {
    top?: boolean,
    right?: boolean,
    bottom?: boolean,
    left?: boolean
}