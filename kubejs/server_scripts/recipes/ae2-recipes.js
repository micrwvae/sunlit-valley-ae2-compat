console.info("[micrwvae] AE2recipes.js loaded");

ServerEvents.recipes((e) => {
  e.remove({ not: { output: "ae2:facade" }, mod: "ae2" })
  e.remove({ mod: "ae2insertexportcard" });
  e.remove({ mod: "ae2wtlib" });
  e.remove({ mod: "aeinfinitybooster" });

/* Missing recipes
 * - ae2insertexportcard:insert_card
 * - ae2insertexportcard:export_card
 * - ae2:storage_monitor
 * - ae2:conversion_monitor
 */
  e.shaped(Item.of("ae2:charger"),
    [ "ABA",
      "A  ",
      "ABA"
    ],
    { A: "minecraft:iron_ingot",
      B: "minecraft:copper_ingot"
    }
  ),
  e.shaped(Item.of("ae2:advanced_card", 2),
    [ "AB ",
      "CDB",
      "AB "
    ],
    { A: "minecraft:glass",
      B: "etcetera:bismuth_ingot",
      C: "minecraft:redstone",
      D: "minecraft:diamond_block"
    }
  ),
  e.shaped(Item.of("ae2:basic_card", 2),
    [ "AB ",
      "CDB",
      "AB "
    ],
    { A: "minecraft:glass",
      B: "etcetera:bismuth_ingot",
      C: "minecraft:redstone",
      D: "minecraft:gold_block"
    }
  ),
  e.shaped(Item.of("ae2:view_cell", 2),
    [ "ABA",
      "BDB",
      "CCC"
    ],
    { A: "minecraft:glass",
      B: "minecraft:redstone",
      C: "minecraft:iron_ingot",
      D: "minecraft:quartz"
    }
  ),
  e.shapeless(Item.of("ae2:capacity_card"),
    [ "ae2:basic_card", "minecraft:quartz"]
  ),
  e.shapeless(Item.of("ae2:equal_distribution_card"),
    [ "ae2:advanced_card", "#functionalstorage:drawer"]
  ),
  e.shapeless(Item.of("ae2:void_card", 2),
    [ "ae2:basic_card", "functionalstorage:void_upgrade"]
  ),
  e.shapeless(Item.of("ae2:fuzzy_card"),
    [ "ae2:advanced_card", "#minecraft:wool"]
  ),
  e.shapeless(Item.of("ae2:inverter_card"),
    [ "ae2:advanced_card", "minecraft:redstone_torch"]
  ),
  e.shapeless(Item.of("ae2:redstone_card"),
    [ "ae2:basic_card", "minecraft:redstone_torch"]
  ),
  e.shaped(Item.of("ae2:speed_card"),
    [ "ABA",
      "BCB",
      "ADA"
    ],
    { A: "etcetera:bismuth_ingot",
      B: "moreminecarts:hard_light_lens",
      C: "ae2:advanced_card",
      D: "oreganized:electrum_block"
    }
  ),
  e.shaped(Item.of("ae2wtlib:magnet_card"),
    [ "AAA",
      "ABA",
      "ACA"
    ],
    { A: "minecraft:iron_ingot",
      B: "ae2:advanced_card",
      C: "simplemagnets:basicmagnet"
    }
  ),
  e.shapeless(Item.of("ae2:memory_card"),
    [ "ae2:advanced_card", "#forge:chests/wooden"]
  ),
  e.custom({
  type: 'farmersdelight:cutting',
    ingredients: [
      { item: 'minecraft:iron_ingot' }],
    tool:
      { tag: 'forge:tools/knives' },
    result: [
      { item: 'ae2:cable_anchor', count: 8 }]
  }),
  e.shaped(Item.of("ae2:wireless_booster"),
    [ "ABA",
      "CDC",
      "AEA"
    ],
    { A: "etcetera:bismuth_ingot",
      B: "numismatics:sun",
      C: "minecraft:ender_pearl",
      D: "ae2:advanced_card",
      E: "society:fire_quartz"
    }
  ),
  e.shaped(Item.of("aeinfinitybooster:infinity_card"),
    [ " A ",
      "ABA",
      " C "
    ],
    { A: "numismatics:sun",
      B: "ae2:wireless_booster",
      C: "minecraft:beacon"
    }
  ),
  e.shapeless(Item.of("aeinfinitybooster:dimension_card"),
    [ "aeinfinitybooster:infinity_card", "society:prismatic_shard"]
  ),
  e.shaped(Item.of("ae2:interface"),
    [ "ABA",
      "CDC",
      "AEA"
    ],
    { A: "etcetera:bismuth_ingot",
      B: "ae2:import_bus",
      C: "create:electron_tube",
      D: "oreganized:lead_block",
      E: "ae2:export_bus"
    }
  ),
  e.shapeless(Item.of("ae2:import_bus"),
    [ "ae2:fluix_covered_cable", "minecraft:hopper", "society:battery"]
  ),
  e.shapeless(Item.of("ae2:export_bus"),
    [ "ae2:fluix_covered_cable", "pipez:item_pipe", "society:battery"]
  ),
  e.shapeless(Item.of("ae2:item_storage_cell_1k"),
    ["ae2:item_cell_housing", "ae2:cell_component_1k"]
  ),
  e.shapeless(Item.of("ae2:item_storage_cell_4k"),
    ["ae2:item_cell_housing", "ae2:cell_component_4k"]
  ),
  e.shapeless(Item.of("ae2:item_storage_cell_16k"),
    ["ae2:item_cell_housing", "ae2:cell_component_16k"]
  ),
  e.shapeless(Item.of("ae2:item_storage_cell_64k"),
    ["ae2:item_cell_housing", "ae2:cell_component_64k"]
  ),
  e.shapeless(Item.of("ae2:item_storage_cell_256k"),
    ["ae2:item_cell_housing", "ae2:cell_component_256k"]
  ),
  e.shaped(Item.of("ae2:cell_workbench"),
    [ "ABA",
      "CDC",
      "CCC"
    ],
    { A: "#minecraft:wool",
      B: "minecraft:quartz",
      C: "minecraft:iron_ingot",
      D: "minecraft:crafting_table"
    }
  ),
  e.shaped(Item.of("ae2:quartz_fiber", 8),
    [ "AAA",
      "ABA",
      "AAA"
    ],
    { A: "ae2:cable_anchor",
      B: "minecraft:glass"
    }
  ),
  e.shaped(Item.of("ae2:level_emitter"),
    [ "ABA",
      "CDC",
      "AEA"
    ],
    { A: "etcetera:bismuth_ingot",
      B: "minecraft:redstone_torch",
      C: "minecraft:comparator",
      D: "oreganized:lead_block",
      E: "society:battery"
    }
  ),
  e.shapeless(Item.of("ae2:toggle_bus"),
    [ "ae2:quartz_fiber",
      "minecraft:glass"]
  ),
  e.shapeless(Item.of("ae2:toggle_bus"),
    [ "ae2:inverted_toggle_bus"]
  ),
  e.shapeless(Item.of("ae2:inverted_toggle_bus"),
    [ "ae2:toggle_bus"]
  ),
  e.shapeless(Item.of("ae2:interface"),
    [ "ae2:cable_interface"]
  ),
  e.shapeless(Item.of("ae2:cable_interface"),
    ["ae2:interface"]
  ),
  e.shaped(Item.of("ae2:drive"),
    [ "AAA",
      "ABA",
      "AAA"
    ],
    { A: "minecraft:iron_ingot",
      B: "#forge:chests/wooden"
    }
  )
  //,e.shapeless(Item.of("ae2:wireless_crafting_terminal", {internalCurrentPower: 100000000}),
  //  [ "ae2:wireless_crafting_terminal",
  //    "minecraft:glass"
  //  ]
  //)

 });
