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
                    modifier: "check",
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
                "1. STAND STILL If no enemies within 16” and at least 1 enemy in LOS with TMM 1 or less",
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
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "212",
        type: "Sniper",
        sequence: 1,
        movePhase: {
            first: "If first: 💨 to 42” from all enemies, and fewest enemies in LOS (min.0)",
            moveActions: [
                "1. 🚀 If any enemies within 12”: to 18” from all enemies",
                "2. 🚀 onto highest elevation",
                "3. 🚶‍♂️ toward most allies in LOS, facing most enemies",
                "4. 🚶‍♂️ into LOS to lowest TMM enemy",
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
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "Range",
                    modifier: "-",
                },
                {
                    order: 4,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "236",
        type: "Sniper",
        sequence: 2,
        movePhase: {
            first: "If first: 🚶‍♂️ to 30” and LOS to most enemies, and woods/cover from most enemies",
            moveActions: [
                "1. 🚀 If any enemies within 12”: to 18” from all enemies",
                "2. 🚀 onto highest elevation",
                "3. 🚶‍♂️ toward most allies in LOS, facing most enemies",
                "4. 🚶‍♂️ into LOS to lowest TMM enemy",
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
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "Threat",
                    modifier: "+",
                },
                {
                    order: 4,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "243",
        type: "Sniper",
        sequence: 3,
        movePhase: {
            first: "If first: 🚶‍♂️ to 24” and LOS to most enemies, and woods/cover from most enemies",
            moveActions: [
                "1. 🚶‍♂️ to 24” from nearest enemy",
                "2. 🚶‍♂️ into woods/cover from most enemies",
                "3. 🚶‍♂️ into LOS to lowest TMM enemy",
                "4. 🚶‍♂️ into LOS to nearest enemy within 24”",
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
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "Range",
                    modifier: "-",
                },
                {
                    order: 4,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "387",
        type: "Sniper",
        sequence: 4,
        movePhase: {
            first: "If first: 🚶‍♂️ to 30” and LOS to most enemies, and woods/cover from most enemies",
            moveActions: [
                "1. 🚶‍♂️ into woods/cover from most enemies",
                "2. 🚶‍♂️ to LOS to enemy with lowest health",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "4. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "Health",
                    modifier: "-",
                },
                {
                    order: 1,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "Range",
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
        id: "617",
        type: "Sniper",
        sequence: 5,
        movePhase: {
            first: "If first: 🚀 to 24” and LOS to most enemies, and woods/cover from most enemies",
            moveActions: [
                "1. STAND STILL If you have woods/cover from all enemies, and at least 1 enemy within LOS.",
                "2. 🚀 into woods/cover from most enemies",
                "3. 🚶‍♂️ into LOS to lowest health enemy",
                "4. 🚶‍♂️ toward nearest enemy"
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
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "Range",
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
        id: "779",
        type: "Sniper",
        sequence: 6,
        movePhase: {
            first: "If first: 🚶‍♂️ to 36” and LOS to most enemies, and woods/cover from most enemies",
            moveActions: [
                "1. STAND STILL If no enemies within 12” and at least 1 enemy in LOS.",
                "2. 🚶‍♂️ into LOS to enemy with lowest health",
                "3. 🚀 into woods/cover from most enemies",
                "4. 🚀 toward enemy with lowest health",
                "5. 🚀 toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "Health",
                    modifier: "-",
                },
                {
                    order: 1,
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "Range",
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
        id: "848",
        type: "Sniper",
        sequence: 7,
        movePhase: {
            first: "If first: 🚶‍♂️ to 42” and LOS to most enemies, and woods/cover from most enemies",
            moveActions: [
                "1. STAND STILL If no enemies within 18” and at least 1 enemy in LOS.",
                "2. 🚶‍♂️ toward 18” from all enemies",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
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
                    combatType: "TMM",
                    modifier: "+",
                },
                {
                    order: 2,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "Health",
                    modifier: "-",
                },
                {
                    order: 4,
                    combatType: "Near",
                    modifier: "check"
                }

            ]
        }
    },
    {
        id: "952",
        type: "Sniper",
        sequence: 8,
        movePhase: {
            first: "If first: 🚶‍♂️ to 30” and LOS to most enemies, and woods/cover from most enemies",
            moveActions: [
                "1. STAND STILL If only 1 enemy in LOS",
                "2. STAND STILL If you have woods/cover from all enemies",
                "3. 🚶‍♂️ into woods/cover from most enemies",
                "4. 🚶‍♂️ toward M from all enemies",
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
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "Range",
                    modifier: "-",
                },
                {
                    order: 3,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "051",
        type: "Skirmisher",
        sequence: 1,
        movePhase: {
            first: "If first: 🚀 to 12” from nearest enemy, and woods/cover from most enemies",
            moveActions: [
                "1. 🚀  toward lowest TMM enemy",
                "2. 🚀  toward biggest threat enemy",
                "3. 🚀  toward fewest enemies in LOS (min.1)",
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
                    combatType: "Threat",
                    modifier: "+",
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
                },
            ]
        }
    },
    {
        id: "166",
        type: "Skirmisher",
        sequence: 2,
        movePhase: {
            first: "If first: 🚶‍♂️ to 18” and LOS to nearest enemy, and woods/cover from most enemies",
            moveActions: [
                "1. 🚶‍♂️ to 18” from nearest enemy",
                "2. 🚶‍♂️ into woods/cover from most enemies",
                "3. 🚶‍♂️ into LOS to lowest TMM enemy",
                "4. 🚶‍♂️ into LOS to nearest enemy within 24”",
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
                    combatType: "Range",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "222",
        type: "Skirmisher",
        sequence: 3,
        movePhase: {
            first: "If first: 🚀 to most enemies in LOS, and woods/cover from most enemies",
            moveActions: [
                "1. 🚶‍♂️ where most enemies in LOS",
                "2. 🚶‍♂️ into woods/cover from most enemies",
                "3. 🚶‍♂️ toward lowest TMM enemy",
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
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "318",
        type: "Skirmisher",
        sequence: 4,
        movePhase: {
            first: "If first: 🚶‍♂️ to most enemies in LOS, and woods/cover from most enemies",
            moveActions: [
                "1. STAND STILL If any enemies within 24” and LOS with TMM 1 or less",
                "2. 🚶‍♂️ into woods/cover from most enemies",
                "3. 🚶‍♂️ toward biggest threat enemy",
                "4. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
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
                    combatType: "TMM",
                    modifier: "+",
                },
                {
                    order: 2,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "459",
        type: "Skirmisher",
        sequence: 5,
        movePhase: {
            first: "If first: 🚀 toward furthest enemy, and no other enemies LOS or woods/cover from most enemies",
            moveActions: [
                "1. 🚶‍♂️ toward furthest enemy you can get behind",
                "2. 🚀 toward furthest enemy",
                "3. 🚀 into woods/cover from most enemies",
                "4. 🚀 toward fewest enemies in LOS (min.1)"
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
                    combatType: "Threat",
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
                },
            ]
        }
    },
    {
        id: "561",
        type: "Skirmisher",
        sequence: 6,
        movePhase: {
            first: "If first: 🚀 toward furthest enemy, and no other enemies LOS or woods/cover from most enemies",
            moveActions: [
                "1. 🚶‍♂️ toward furthest enemy you can get behind",
                "2. 🚀 toward furthest enemy",
                "3. 🚀 into woods/cover from most enemies",
                "4. 🚀 toward fewest enemies in LOS (min.1)"
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
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "Threat",
                    modifier: "+",
                },
                {
                    order: 3,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "584",
        type: "Skirmisher",
        sequence: 7,
        movePhase: {
            first: "If first: 🚀 to 18” from nearest enemy, and no other enemies LOS or woods/cover from most enemies",
            moveActions: [
                "1. 🚀 If the lowest health enemy has not yet moved, into woods/cover from most enemies",
                "2. 🚶‍♂️ toward lowest health enemy",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "4. 🚶‍♂️ into woods/cover from most enemies",
                "5. 🚶‍♂️ toward furthest enemy"
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
                    combatType: "Health",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "Range",
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
        id: "913",
        type: "Skirmisher",
        sequence: 8,
        movePhase: {
            first: "If first: 🚀 to 18” from all enemies, and woods/cover from most enemies",
            moveActions: [
                "1. 🚀 If the highest MV enemy has not yet moved, into woods/cover from most enemies",
                "2. 🚶‍♂️ toward highest MV enemy",
                "3. 🚶‍♂️ into woods/cover from most enemies",
                "4. 🚶‍♂️ toward lowest health enemy you can get behind",
                "5. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            instruction: "Use OV",
            combatActions: [
                {
                    order: 0,
                    combatType: "MV",
                    modifier: "+",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "Threat",
                    modifier: "+",
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
        id: "505",
        type: "Striker",
        sequence: 1,
        movePhase: {
            first: "If first: 💨 to 30” from all enemies, toward fewest enemies in LOS (min.0)",
            moveActions: [
                "1. 💨 If no enemies within 24”, to where fewest enemies in LOS (min.0)",
                "2. 🚶‍♂️ toward nearest enemy you can get behind",
                "3. 🚶‍♂️ toward lowest health enemy",
                "4. 🚶‍♂️ into woods/cover from most enemies",
                "5. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "TMM",
                    modifier: "+",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "Range",
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
        id: "701",
        type: "Striker",
        sequence: 2,
        movePhase: {
            first: "If first: 🚀 to 24” from all enemies, and no LOS or most cover.",
            moveActions: [
                "1. 💨 If no enemies within 24”, to where fewest enemies in LOS (min.0)",
                "2. 🚀 toward furthest enemy you can get behind",
                "3. 🚶‍♂️ toward lowest TMM enemy",
                "4. 🚶‍♂️ into woods/cover from most enemies",
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
                    combatType: "TMM",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "No Cover",
                    modifier: "check",
                },
                {
                    order: 3,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
    {
        id: "585",
        type: "Striker",
        sequence: 3,
        movePhase: {
            first: "If first: 🚀 to 24” from all enemies, and no LOS or most cover.",
            moveActions: [
                "1. 💨 If no enemies within 24”, to where fewest enemies in LOS (min.0)",
                "2. 🚶‍♂️ toward highest TMM enemy",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "4. 🚶‍♂️ into woods/cover from most enemies",
                "5. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "TMM",
                    modifier: "+",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "Range",
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
                },
            ]
        }
    },
    {
        id: "725",
        type: "Striker",
        sequence: 4,
        movePhase: {
            first: "If first: 🚀 to 18” from all enemies, and no LOS or most cover.",
            moveActions: [
                "1. 🚀 If the lowest health enemy has not yet moved, to where woods/cover from most enemies",
                "2. 🚶‍♂️ toward highest health enemy you can destroy",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "4. 🚶‍♂️ into woods/cover from most enemies",
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
                    combatType: "Health",
                    modifier: "+",
                },
                {
                    order: 2,
                    combatType: "Range",
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
                },
            ]
        }
    },
    {
        id: "781",
        type: "Striker",
        sequence: 5,
        movePhase: {
            first: "If first: 🚀 to 30” from all enemies, and no LOS or most cover.",
            moveActions: [
                "1. 🚀 If the lowest health enemy has not yet moved, to where woods/cover from most enemies",
                "2. 🚶‍♂️ toward lowest health enemy",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "4. 🚶‍♂️ into woods/cover from most enemies",
                "5. 🚶‍♂️ toward furthest enemy"
            ]
        },
        combatPhase: {
            instruction: "Use OV",
            combatActions: [
                {
                    order: 0,
                    combatType: "Health",
                    modifier: "-",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "Range",
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
                },
            ]
        }
    },
    {
        id: "890",
        type: "Striker",
        sequence: 6,
        movePhase: {
            first: "If first: 🚀 to 24” from all enemies, and fewest enemies in LOS (min.1) or most cover.",
            moveActions: [
                "1. 🚀 If the lowest health enemy has not yet moved, to where woods/cover from most enemies",
                "2. 🚶‍♂️ toward lowest health enemy",
                "3. 🚶‍♂️ toward fewest enemies in LOS (min.1)",
                "4. 🚶‍♂️ into woods/cover from most enemies",
                "5. 🚶‍♂️ toward furthest enemy"
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
                    combatType: "Health",
                    modifier: "-",
                },
                {
                    order: 2,
                    combatType: "Range",
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
                },
            ]
        }
    },
    {
        id: "966",
        type: "Striker",
        sequence: 7,
        movePhase: {
            first: "If first: 🚀 to 18” from all enemies, and woods/cover from most enemies",
            moveActions: [
                "1. 🚀 If the highest MV enemy has not yet moved, to where woods/cover from most enemies",
                "2. 🚶‍♂️ toward highest MV enemy",
                "3. 🚶‍♂️ into woods/cover from most enemies",
                "4. 🚶‍♂️ toward lowest health enemy you can get behind",
                "5. 🚶‍♂️ toward furthest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "MV",
                    modifier: "+",
                },
                {
                    order: 1,
                    combatType: "Threat",
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
                },
            ]
        }
    },
    {
        id: "977",
        type: "Striker",
        sequence: 8,
        movePhase: {
            first: "If first: 🚀 to 18” from all enemies, and woods/cover from most enemies",
            moveActions: [
                "1. 🚀 If the highest MV enemy has not yet moved, to where woods/cover from most enemies",
                "2. 🚶‍♂️ toward highest MV enemy",
                "3. 🚶‍♂️ toward lowest TMM enemy you can get behind",
                "4. 🚶‍♂️ into woods/cover from most enemies",
                "5. 🚶‍♂️ toward nearest enemy"
            ]
        },
        combatPhase: {
            combatActions: [
                {
                    order: 0,
                    combatType: "MV",
                    modifier: "+",
                },
                {
                    order: 1,
                    combatType: "Can Destroy",
                    modifier: "check",
                },
                {
                    order: 2,
                    combatType: "Threat",
                    modifier: "+",
                },
                {
                    order: 3,
                    combatType: "Near",
                    modifier: "check",
                },
            ]
        }
    },
];

export default cards;