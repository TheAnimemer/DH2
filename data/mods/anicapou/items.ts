export const Items: {[k: string]: ModdedItemData} = {
    powersash: {
        name: "Power Sash",
        spritenum: 151,
        onSourceTryPrimaryHit(target, source, move) {
            if (target === source || move.category === 'Status') return;
            if (move.type === 'Bug' && source.useItem()) {
                source.addVolatile('gem');
            }
        },
        num: 808,
        gen: 9,
    },
    radioantenna: {
        name: "Radio Antenna",
        spritenum: 305,
        onSourceTryPrimaryHit(target, source, move) {
            if (target === source || move.category === 'Status') return;
            if (move.type === 'Bug' && source.useItem()) {
                source.addVolatile('gem');
            }
        },
        num: 809,
        gen: 9,
    },
    deciduite: {
        name: "Deciduite",
        spritenum: 620,
        megaStone: "Decidueye-Mega",
        megaEvolves: "Decidueye",
        itemUser: ["Decidueye"],
        onTakeItem(item, source) {
            if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
            return true;
        },
        num: 810,
        gen: 9,
    },
};
