export const Moves: {[k: string]: ModdedMoveData} = {
	blastpuke: {
		num: -1,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Blast Puke",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Lava Plume", target);
		},
		condition: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Blast Puke');
			},
			onResidualOrder: 13,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / (pokemon.hasType(['Stellar']) ? 4 : 8));
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Blast Puke');
			},
		},
		secondary: {
			chance: 100,
			volatileStatus: 'saltcure',
		},
		target: "normal",
		type: "Fire",
	},
	froststomp: {
		num: -2,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Frost Stomp",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Icicle Crash", target);
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
	},
	electricpiercer: {
		num: 922,
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		name: "Flying Press",
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nonsky: 1, metronome: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Thunderbolt", source);
			this.add('-anim', source, "X-Scissor", target);
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness('Bug', type);
		},
		priority: 0,
		secondary: null,
		target: "any",
		type: "Electric",
	},
}
