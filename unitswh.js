class Unit {
    constructor(Name, Unitsize, Wounds, Move, Bravery, Saves) {
        this.Name = Name;
        this.Unitsize = Unitsize;
        this.Wounds = Wounds;
        this.Move = Move;
        this.Bravery = Bravery;
        this.Saves = Saves;
        this._Weapons = [];
        this._SpecialAbilities = [];
        this._Magic = [];
        this._Shooting = [];
        this._Hero = [];
        this._Ward = [];
        this._Class = [];
        this._Prayer =[];
    }

    get Name() {
        return this._Name;
    }
    set Name(newName) {
        if (typeof newName !== 'string' || newName.trim() === '') {
            console.error('This unit needs a valid name');
        } else {
            this._Name = newName;
        }
    }

    get Unitsize() {
        return this._Unitsize;
    }
    get Wounds() {
        return this._Wounds;
    }
    get Move() {
        return this._Move;
    }
    get Bravery() {
        return this._Bravery;
    }
    get Saves() {
        return this._Saves;
    }

    set Unitsize(newUnitsize) {
        if (newUnitsize <= 0) {
            console.error('Unitsize cannot be negative.');
            alert(`DUDE, YOU F**D UP ${this._Name} This unit has no units my dude`);
        } else {
            this._Unitsize = newUnitsize;
        }
    }
    set Wounds(newWounds) {
        if (newWounds < 0) {
            console.error('Wounds cannot be negative.');
        } else {
            this._Wounds = newWounds;
        }
    }
    get Move() {
        return this._Move;
    }
    set Move(newMove) {
        if (typeof newMove === 'number' && newMove >= 0) {
            this._Move = newMove;
        } else {
            console.error('Move must be a non-negative number.');
        }
    }
    
    set Bravery(newBravery) {
        if (newBravery < 0) {
            console.error('Bravery cannot be negative.');
        } else {
            this._Bravery = newBravery;
        }
    }
    set Saves(newSaves) {
        if (newSaves < 0) {
            console.error('Saves cannot be negative.');
        } else {
            this._Saves = newSaves;
        }
    }


    addClass(clas) { this._Class.push(clas); }
    addWeapon(weapon) { this._Weapons.push(weapon); }
    addMagic(magic) { this._Magic.push(magic); }
    addSpecial(special) { this._SpecialAbilities.push(special); }
    addHero(hero) { this._Hero.push(hero); }
    addWard(ward) { this._Ward.push(ward); }
    addShooting(shooting) { this._Shooting.push(shooting); }
    addPrayer(prayer) {this._Prayer.push(prayer)}

    info() {
        let baseInfo = `<p class="unitName">${this._Name}</p>
        <p class="Move">Move: ${this._Move}</p>
        <p class="Unitsize">Unitsize: ${this._Unitsize}</p>
        <p class="Bravery">Bravery: ${this._Bravery}</p>
        <p class="Wounds">Wounds: ${this._Wounds}</p>
        <p class="Save">Save: ${this._Saves}+</p>`;

        if (this._Class.length > 0) {
            this._Class.forEach((clas) => {
                baseInfo += `\n\n${clas.Cname}`;
                if (clas.Cname === "Wizard") {
                    baseInfo += `\n This unit can attempt to cast ${clas.Ccast} spells in your hero phase and attempt to unbind ${clas.Cunbind} spells in the enemy hero phase.`;
                }
                if (clas.Cname === "Priest") {
                    baseInfo += `\n This unit can attempt to chant ${clas.Cpray} prayers each hero phase or attempt to banish 1 invocation within 48" of this unit that is visible to them. Then make a banishment roll by rolling a dice. If the roll is greater than the answer value of that invocation, it is banished and removed from play. An invocation cannot be summoned again in the turn that it is removed from play.`;
                }
            });
        }
        
         

         if (this._Hero.length > 0) {
            baseInfo += "\n\n HEROIC ACTIONS\n";
            this._Hero.forEach((hero) => {
                baseInfo += `\n${hero.Heroname}
\n${hero.Herodesc}`;
            });
        }
        if (this._Ward.length > 0) {
            baseInfo += "\n\n WARD";
            this._Ward.forEach((ward) => {
                baseInfo += `\n${ward.Wardname}
${ward.Warddesc} You get a ${ward.Wardvalue}+ wardsave`;
            });
        }         
        if (this._Shooting.length > 0) {
            baseInfo += "\n\n It has the following ranged weapons\n";
            this._Shooting.forEach((shooting) => {
                baseInfo += `\n${shooting.name} \nIt's range is ${shooting.range}".
It has ${shooting.attacks} attacks, and you need a ${shooting.hit}+ to hit and a ${shooting.wound}+ to wound.
It grants a ${shooting.rend} to rend, and ${shooting.damage} damage per successful attack.\n`;
            });
        }         
        if (this._Weapons.length > 0) {
            baseInfo += '<p class="meleeweapons">\nMELEE WEAPONS</p>';;
            this._Weapons.forEach((weapon) => {
                baseInfo += `\n${weapon.name} \nIt's range is ${weapon.range}".
It has ${weapon.attacks} attacks, and you need a ${weapon.hit}+ to hit and a ${weapon.wound}+ to wound.
It grants a ${weapon.rend} to rend, and ${weapon.damage} damage per successful attack.\n`;
            });
        }
        if (this._Magic.length > 0) {
            baseInfo += '<p class="magicjunk">\nSPELLS</p>';
            this._Magic.forEach((magic) => {
                baseInfo += `<p><span class="magic-name">${magic.name}</span>: \nWith a range of ${magic.range}".
It has a casting value of ${magic.value} and if successfully cast, ${magic.desc}</p>\n`;
            });
        }
        if (this._SpecialAbilities.length > 0) {
            baseInfo += '<p class="specialabs">\nSPECIAL ABILITIES</p>';
            this._SpecialAbilities.forEach(ability => {
                baseInfo += `<p><span class="ability-name">${ability.name}</span>: \n${ability.desc}</p>\n`;
            });
        }
        if (this._Prayer.length > 0) {
            baseInfo += '<p class="prayers">\nPRAYERS</p>';
            this._Prayer.forEach(prayer => {
                baseInfo += `<p><span class="prayer-name">${prayer.name}</span>: \n${prayer.desc}</p>\n` `is a prayer with an answer value of ${prayer.Answer} and a range of ${prayer.range}".\n`;
            });
        }
        return baseInfo;
    }
    
}

function createWeapon(name, range, attacks, hit, wound, rend, damage) {
    return { name, range, attacks, hit, wound, rend, damage };
}
function createShooting(name, range, attacks, hit, wound, rend, damage) {
    return { name, range, attacks, hit, wound, rend, damage };
}
function createMagic(name, range, value, desc) {
    return { name, range, value, desc };
}

function createSpecial(name, desc) {
    return { name, desc };
}

function createHero(Heroname, Herodesc){
    return {Heroname, Herodesc};
}

function createWard(Wardname, Warddesc, Wardvalue){
    return {Wardname, Warddesc, Wardvalue};
}

function createClass(Cname,Ccast,Cunbind,Cpray){
    return {Cname,Ccast,Cunbind,Cpray};
}

function createPrayer(name,Answer,range,desc){
    return {name,Answer,range,desc};
}


let units = [];

let unit1 = new Unit("Clanrats", 20, 1, 6, 5, 5);
let unit2 = new Unit("Stormvermin", 10, 1, 6, 6, 4);
let unit3 = new Unit("Grey Seer on Screaming Bell", 1, 15, 6 , 6, 4);
let unit4 = new Unit("Lord Screech Verminking", 1, 13, 12, 10, 4);
let unit5 = new Unit("Debug",-1,0,0,0,0);
let unit6 = new Unit("Plague Priest on Plague Furnace",1,15,6,10,4);

units.push(unit1, unit2, unit3, unit4,unit5,unit6);


//Weapons
let rustyblade = createWeapon("Rusty Blades",1,1,4,4,0,1);
let rustyspears = createWeapon("Rusty Spears",2,1,5,5,0,1);
let rusthal = createWeapon("Rusty Halberd",1,2,3,3,-1,1);
let Warpstonebell = createWeapon("Warpstone Staff",2,3,4,4,-1,"(" + Math.floor(Math.random() * 3) + 1 +")damage this is actually a D3*");
let ClawandFang = createWeapon("Tearing Claws and Fangs",1,4,4,3,-1,2);
let Rustyspike = createWeapon("Rusty Spikes",1,6+"*",3,3,-1,1);
let Doomgl = createWeapon("Doom Glaive",3,6,3,3,-2,2);
let Plaguer = createWeapon("Plaguereaper",1,8,3,3,-1,2);
let GrPlagueC = createWeapon("Great Plague Censer",3,"D3+4",1,1,1,1);
let WarpstoneS = createWeapon("Warpstone-tipped Staff",2,3,3,3,-1,1);
let foeBlade = createWeapon("Foetide Blades",1,6,3,4,0,1);

//Shooting attacks
let Pretail = createShooting("Prehensile Tails",6,4,3,3,-1,1);

//Magic
let MysticShield = createMagic("Mystic Shield", 18, 4, "An aura of protection surrounds the user, granting them an additional +1 to their saves.");
let Crackscall = createMagic("Cracks Call",13,6,"Harnessing the thunderous peals of the Screaming Bell, the Grey Seer channels a reverberating sorcerous blast into the ground beneath the enemy’s feet. Gaping chasms and fume-gouting rents yawn wide, sending screaming victims vanishing into the depths. \n\nIf successfully cast, pick 1 enemy unit within range and visible to the caster and roll 2D6. If the roll is greater than that unit\’s Move characteristic, that unit suffers a number of mortal wounds equal to the difference between its Move characteristic and the roll (rounding up). This spell has no effect on units that can fly.")
let Dthirteen = createMagic("The Dreaded Thirteenth Spell",13,8,"With a sickening lurch, the fabric of reality is torn open by the twisting, mutating power of the Great Horned Rat.\n\n If successfully cast, pick 1 enemy unit within range and visible to the caster and roll 13 dice. For each 4+, that unit suffers 1 mortal wound.\n\nYou can then summon 1 unit of CLANRATS to the battlefield and add it to your army. The summoned unit can have up to 1 model for each mortal wound that was caused by this spell. The summoned unit must be set up wholly within range of the caster and more than 9\" from all enemy units. The summoned unit cannot move in the following movement phase.")


//Abilities
let Alwaysmore = createSpecial("Seething Swarm", "Sweeping forward in a chittering mass, Clanrats overwhelm their enemies with their seemingly endless numbers, biting, stabbing, screeching and trampling their own fallen beneath their bloody claws. At the end of the battleshock phase, you can return D3 slain models to this unit.");
let Champ = createSpecial("Champion","1 model in this unit can be a Fangleader. Add 1 to the Attacks characteristic of that models Rusty Halberd");
let StandB = createSpecial("Standard Bearer","1 in every 10 models in this unit can be a Stormvermin Standard Bearer. This unit can retreat and still charge later in the turn if it includes any Stormvermin Standard Bearers.");
let StormMusic = createSpecial("Musician","1 in every 10 models in this unit can be a Stormvermin Drummer. Add 2 to run rolls for this unit if it includes any Stormvermin Drummers.");
let EliteBody = createSpecial("Elite Bodyguard", "Stormvermin are especially popular as bodyguards, with every ratman of rank hiring their own pack of arrogant, bullying Stormvermin to show off their might and importance. If a friendly SKAVEN HERO is within 3\" of this unit, before you allocate a wound or mortal wound to that HERO, or instead of making a ward roll for a wound or mortal wound that would be allocated to that HERO, roll a dice. Add 2 to the roll if the HERO has the CLANS VERMINUS keyword. On a 4+, that wound or mortal wound is allocated to this unit instead of that HERO and cannot be negated.");
let ChampRat = createSpecial("Champion","1 model in this unit can be a Clawleader. Add 1 to the Attacks characteristic of that model\’s melee weapon.");
let StandardRat = createSpecial("Standard Bearer","1 in every 10 models in this unit can be a Clanrat Standard Bearer. This unit can retreat and still charge later in the turn if it includes any Clanrat Standard Bearers.");
let Musicalrat = createSpecial("Musician", "1 in every 10 models in this unit can be a Clanrat Bellringer. Add 2 to run rolls for this unit if it includes any Clanrat Bellringers.");
let PoisonFume = createSpecial("Poisonous Fumes","Plague censers emit huge clouds of noxious gas. Subtract 1 from wound rolls for attacks made with melee weapons that target this unit.");

//Wards
let Ward5 = createWard("Altar of the Horned Rat","An eerie sense of watchfulness surrounds this war engine, and an unholy warding protects it from harm. At the start of your hero phase, you can say that this unit will beseech the Horned Rat instead of attempting to cast spells in that phase. If you do so, in that phase, this unit is treated as having the Priest keyword instead of the Wizard keyword.",5);


//Class
let Wizard22 = createClass("Wizard",2,2,0);
let Priest1 = createClass("Priest",0,0,1);

//Hero
let Peal = createHero("Peal of Doom","The ominous tolling of a Screaming Bell resounds above the clamour of battle, crying out \‘Doom! Doom! Doom!\’.At the start of your hero phase, you can say that this unit will ring its Screaming Bell. If you do so, roll a dice and look up the result on the table below: \n\n1.Magical Backlash: This unit suffers D3 mortal wounds that cannot be negated. \n\n2.Unholy Clamour: Add 6\" to this unit\’s Move characteristic until your next hero phase.\n\n3.Wall of Unholy Sound: Until your next hero phase, subtract 1 from hit rolls for attacks made by enemy units within 13\" of any friendly SCREAMING BELLS for which you rolled this result in this phase.\n\n4.Deafening Peals: Until your next hero phase, roll a dice each time an enemy model is picked to issue a command while it is within 13\" of any friendly SCREAMING BELLS for which you rolled this result in this phase. On a 5+, that command cannot be issued.\n\n5.Screaming Crescendo: Until your next hero phase, after this unit makes a charge move, you can pick 1 enemy unit within 1\" of this unit and roll a dice. On a 2+, that unit suffers D6 mortal wounds.\n\n6.Apocalyptic Doom: At the end of this hero phase, roll a dice for each enemy unit within 13\" of any friendly SCREAMING BELLS for which you rolled this result in this phase. On a 4+, that unit suffers D3 mortal wounds.");
let Beyond = createHero("A Stirring Beyond the Veil"," In times of desperate need, a Screaming Bell can be shattered in order to call forth a Verminlord.\nOnce per battle, at the start of your hero phase, if 7 or more wounds are allocated to this unit, you can say that the Grey Seer will shatter the Screaming Bell. If you do so, roll a dice. On a 1, this unit is destroyed. On any other roll, add the number of wounds allocated to this unit to the roll. \nIf the modified roll is 12 or less, the Screaming Bell is shattered (see below). If the modified roll is 13 or more, the Screaming Bell is shattered and you can summon 1 VERMINLORD to the battlefield and add it to your army. The Verminlord must be set up wholly within 13\" of this unit. It can be set up within 3\" of an enemy unit if this unit is within 3\" of that enemy unit, otherwise it must be set up more than 9\" from all enemy units. If this unit\’s Screaming Bell is shattered, it can no longer attempt to cast Cracks Call and it can no longer use its Peal of Doom ability.")
let Thirteen = createHero("The Thirteen-headed One","Lord Verminking can call upon his knowledge of the shadowslinking of Eshin, the fleshcrafting of Moulder, the plaguebrewing of Pestilens, the warp-tech of Skryre, the warrior skill of Verminus or the arcane lore of the Masterclan. At the start of your hero phase, pick 1 of the following areas of knowledge for this unit to draw upon. The effect of that area of knowledge applies to this unit until your next hero phase. You cannot pick the same area of knowledge more than once per battle.\n\nKnowledge of the Arcane: Add 1 to casting, unbinding and dispelling rolls for this unit.\n\nKnowledge of Fleshcrafting: When you pick this area of knowledge, heal D3 wounds allocated to this unit.\n\nKnowledge of Plague-brewing: If the unmodified hit roll for an attack made with this unit’s Plaguereaper is 6, that attack causes 1 mortal wound to the target in addition to any damage it inflicts.\n\nKnowledge of Shadowslinking: Subtract 1 from hit rolls for attacks that target this unit.\n\nKnowledge of Warp-tech: This unit’s Doom Glaive has a Rend characteristic of -3 and a Damage characteristic of 3.\n\nKnowledge of the Warrior: Add 1 to wound rolls for attacks made by this unit.")
let ratking = createHero("The Rat King","The Rat King: The warriors of the skaven fight with rabid fury at Lord Skreech\’s command, in a futile attempt to curry his favour.\n\n You can use this command ability when you pick a friendly SKAVEN unit to fight in the combat phase. That unit must receive the command. Add 1 to hit rolls and wound rolls for attacks made by that unit until the end of that phase.")

//Prayer
let PestPest = createPrayer("Pestilence-Pestilence",3,13,"With a warpstone tainted glow, the Plague Priest beseeches the Horned Rat to unleash rampant poxes on the battlefield. ");

unit1.addWeapon(rustyspears);
unit1.addSpecial(Alwaysmore);
unit1.addSpecial(ChampRat);
unit1.addSpecial(StandardRat);
unit1.addSpecial(Musicalrat);
unit2.addWeapon(rusthal);
unit2.addSpecial(Champ);
unit2.addSpecial(StandB);
unit2.addSpecial(StormMusic);
unit2.addSpecial(EliteBody);
unit3.addWeapon(Warpstonebell);
unit3.addWeapon(ClawandFang);
unit3.addWeapon(Rustyspike);
unit3.addWard(Ward5);
unit3.addClass(Wizard22);
unit3.addHero(Peal);
unit3.addHero(Beyond);
unit3.addMagic(Crackscall);
unit4.addShooting(Pretail);
unit4.addWeapon(Doomgl);
unit4.addWeapon(Plaguer);
unit4.addClass(Wizard22);
unit4.addWard(Ward5);
unit4.addHero(Thirteen);
unit4.addHero(ratking);
unit4.addMagic(Dthirteen);
unit6.addWeapon(GrPlagueC);
unit6.addWeapon(foeBlade);
unit6.addWeapon(WarpstoneS);
unit6.addWeapon(Rustyspike);

// units.forEach(unit => {
//     console.log(unit.info());
// });

