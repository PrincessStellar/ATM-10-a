// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // input[], input_fluid, processing_time, output, outputfluid
    let dissolution_chamber = allthemods.recipes.industrialforegoing.dissolution_chamber

    dissolution_chamber([
        '#c:glass_blocks/colorless'
    ],
        "2700x industrialforegoing:pink_slime", 
        200,
        "industrialforegoing:pink_slime_block"
    )

    dissolution_chamber([
        'minecraft:glass_bottle'
    ],
        "250x #c:experience",
        5,
        "minecraft:experience_bottle"
    ).id("industrialforegoing:dissolution_chamber/xp_bottles")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.