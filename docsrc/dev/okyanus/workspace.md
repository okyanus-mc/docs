# Getting your workspace ready for contributing to Okyanus

The Okyanus build scripts expect a certain directory structure if you want to
use your modifications without having to release to our Maven.

To create that structure, first create an empty folder. Inside that,
run these three `git` commands to clone everything you'll need

```
$ git clone https://github.com/okyanus-mc/api
$ git clone https://github.com/okyanus-mc/runtime
```

::: warning
Please make sure you do **NOT** rename any cloned folder, as it looks for these
specific names.
:::

## Contributing to Okyanus mods alongside Okyanus

::: tip
If you want to fix a small bug, or add a feature that uses anything existing in
current Okyanus releases, you don't need this. Just doing your regular clone
should be fine.

This is only for people who want to use their Okyanus modifications inside our
mod development environment.
:::

First, get your workspace ready (only cloning `api` should be enough for
mods, but you'll most likely want `runtime` as well)

Then, create a new folder inside that. Call it `plugins`, or `mods` or anything.
The name doesn't matter, creating a new folder does.

Run your `git clone` command inside that folder, and start hacking away!
