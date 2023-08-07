export interface AcesCard{
    id: string;
    type: string;
    sequence: number;
    movePhase: {
        first: string;
        moveActions: Array<string>;
    }
    combatPhase: {
        instruction?: string;
        combatActions: Array<
            {
                order: number;
                combatType: string;
                modifier: string;
            }
        >
    }
}
const cards: Array<AcesCard> = [
    {
        id: "020",
        type: "Brawler",
        sequence: 1,
        movePhase: {
            first: "If first: 🚀 to 24” from all enemies, and woods/cover from most enemies",
            moveActions: [
                "1. 🚀 into woods/cover from most enemies",
                "2. 🚀 toward lowest TMM enemy",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "4, 🚶‍♂️ toward highest PV enemy",
                "5. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 1,
                    combatType: "Health",
                    modifier: "+",
                },
                {
                    order: 2,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 3,
                    combatType: "Near",
                    modifier: "check",
                }
            ]
        }
    },
    {
        id: "065",
        type: "Brawler",
        sequence: 2,
        movePhase: {
            first: "If first: 🚀 to 16” from all enemies, and woods/cover from most enemies",
            moveActions: [
                "1. 🚶‍♂️ into woods/cover from most enemies",
                "2. 🚶‍♂️ toward highest health enemy",
                "3. 🚶‍♂️ toward lowest TMM enemy",
                "4. 🚶‍♂️ toward highest PV enemy",
                "5. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "Check",
                },
                {
                    order: 2,
                    combatType: "Health",
                    modifier: "+",
                },
                {
                    order: 3,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 4,
                    combatType: "Near",
                    modifier: "check",
                }
            ]
        }
    },
    {
        id: "135",
        type: "Brawler",
        sequence: 3,
        movePhase: {
            first: "If first: 🚀 to 24” from all enemies, and no LOS or most cover.",
            moveActions: [
                "1. 🚶‍♂️ If lowest health enemy is further than 24”, toward lowest health enemy",
                "2. 🚀 toward fewest enemies in LOS (min.1)",
                "3. 🚀 into woods/cover from most enemies",
                "4. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            instruction: "Use OV",
            combatActions: [
                {
                    order: 0,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "Can Crit",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "Near",
                    modifier: "check",
                }
            ]
        }
    },
    {
        id: "195",
        type: "Brawler",
        sequence: 4,
        movePhase: {
            first: "If first: 🚀 to 16” from nearest enemy, and no enemies in LOS or woods/cover from most enemies.",
            moveActions: [
                "1. 🚀 into woods/cover from most enemies",
                "2. 🚀 toward highest health enemy",
                "3. 🚶‍♂️ toward lowest MV enemy",
                "4. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            instruction: "Use OV",
            combatActions: [
                {
                    order: 0,
                    combatType: "Range",
                    modifier: "-",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 4,
                    combatType: "Near",
                    modifier: "check",
                }
            ]
        }
    },
    {
        id: "256",
        type: "Brawler",
        sequence: 5,
        movePhase: {
            first: "If first: 🚀 to 12” from nearest enemy, and no enemies in LOS or woods/cover from most enemies.",
            moveActions: [
                "1. 🚶‍♂️ toward highest health enemy",
                "2. 🚶‍♂️ toward biggest threat enemy",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "4. 🚶‍♂️ toward highest PV enemy",
                "5. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "Near",
                    modifier: "check",
                }
            ]
        }
    },
    {
        id: "410",
        type: "Brawler",
        sequence: 6,
        movePhase: {
            first: "If first: 🚀 to most enemies in LOS, and woods/cover from most enemies",
            moveActions: [
                "1. 🚶‍♂️ to most enemies in LOS",
                "2. 🚶‍♂️ into woods/cover from most enemies",
                "3. 🚶‍♂️ toward lowest TMM enemy",
                "4. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "Range",
                    modifier: "-",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 3,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 4,
                    combatType: "Near",
                    modifier: "check",
                }
            ]
        }
    },
    {
        id: "575",
        type: "Brawler",
        sequence: 7,
        movePhase: {
            first: "If first: 🚀 to most enemies in LOS, and woods/cover from most enemies",
            moveActions: [
                "1. 💨 If no enemies within 16” and at least 1 enemy in LOS with TMM 1 or less",
                "2. 🚶‍♂️ into woods/cover from most enemies",
                "3. 🚶‍♂️ toward biggest threat enemy",
                "4. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 1,
                    combatType: "Range",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 3,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 4,
                    combatType: "Near",
                    modifier: "check",
                }
            ]
        }
    },
    {
        id: "798",
        type: "Brawler",
        sequence: 8,
        movePhase: {
            first: "If first: 🚀 to 12” from nearest enemy, and no enemies in LOS or woods/cover from most enemies.",
            moveActions: [
                "1. 💨 If no enemies within 16” and at least 1 enemy in LOS with TMM 1 or less",
                "2. 🚶‍♂️ into woods/cover from most enemies",
                "3. 🚶‍♂️ toward biggest threat enemy",
                "4. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "5. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            instruction: "Use OV",
            combatActions: [
                {
                    order: 0,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 1,
                    combatType: "TMM",
                    modifier: "+",
                },
                {
                    order: 2,
                    combatType: "Near",
                    modifier: "Check",
                },
            ]
        }
    },
];

export default cards;