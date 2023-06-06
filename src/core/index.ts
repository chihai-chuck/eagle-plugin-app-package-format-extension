import AppInfoParser from "app-info-parser";

export const THEME_COLOR = {
    light: ["#f8f9fb", "#e3e5e7", "#a0a1a4", "#323339"],
    lightgray: ["#e2e4e6", "#c6c8c9", "#8b8d8e", "#191d1e"],
    gray: ["#353639", "#2a2b2f", "#707173", "#d7d7d7"],
    dark: ["#242528", "#1d1e21", "#646567", "#d3d3d4"],
    "dark-blue": ["#343848", "#2a2d3b", "#70737e", "#d6d7da"],
    purple: ["#393547", "#2e2a3a", "#73707d", "#d7d7da"]
}

export class Core {
    public async parseFile(path: string) {
        const parser = new AppInfoParser(path);
        return await parser.parse();
    }
}
