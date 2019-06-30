# Compatibility

This page lists compatibility with different APIs

## Fabric mods in Okyanus

Okyanus can load Fabric mods out of the box. Just put the mod in `mods`, and run
your server.

## Okyanus mods in Fabric

To run Okyanus mods in Fabric, you'll need to patch them first.  
Use the (unofficially official) [okyanus2fabric](https://github.com/Admicos/okyanus2fabric)
jar to patch all the mods you need (including the Runtime), and you should now
be able to put them in mods, and they should work just fine.

## Bukkit plugins in Okyanus

::: warning
Bukkit implementation is **HEAVILY** in development, don't use this until we
tell you to do so.
:::

Install [orkide](https://github.com/okyanus-mods/orkide), and put your Bukkit
plugins in the newly created `plugins` folder.
