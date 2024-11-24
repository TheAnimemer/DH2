/*
Ratings and how they work:
-1: Detrimental
	  An ability that severely harms the user.
	ex. Defeatist, Slow Start
 0: Useless
	  An ability with no overall benefit in a singles battle.
	ex. Color Change, Plus
 1: Ineffective
	  An ability that has minimal effect or is only useful in niche situations.
	ex. Light Metal, Suction Cups
 2: Useful
	  An ability that can be generally useful.
	ex. Flame Body, Overcoat
 3: Effective
	  An ability with a strong effect on the user or foe.
	ex. Chlorophyll, Sturdy
 4: Very useful
	  One of the more popular abilities. It requires minimal support to be effective.
	ex. Adaptability, Magic Bounce
 5: Essential
	  The sort of ability that defines metagames.
	ex. Imposter, Shadow Tag
*/

export const Abilities: {[abilityid: string]: AbilityData} = {
	ironshooter: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bullet']) {
				return this.chainModify(1.3);
			}
		},
		flags: {},
		name: "Iron Shooter",
		rating: 3,
		num: -5,
	},
	soothingstarlight: {
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Soothing Starlight');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Soothing Starlight');
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Soothing Starlight');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
		},
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Soothing Starlight', '[of] ' + target);
			}
		},
		flags: {},
		name: "Soothing Starlight",
		rating: 3,
		num: -6,
	},
};
