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
            first: "If first: 🚀 to 12 🛑 from all enemies, and woods/cover from most enemies",
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
            first: "If first: 🚀 to 8 🛑 from all enemies, and woods/cover from most enemies",
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
    }
];

export default cards;