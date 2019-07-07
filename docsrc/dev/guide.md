# Your first Okyanus mod

By the end of this page, you'll have a very basic mod in your hands.

## Installation

Check out the [Developing Okyanus mods](getting-started.md) page for preparing
a development environment.

## Main class

The template has an example command at `club.issizler.template.TemplateMod`
but we'll create our own for learning purposes. Delete that file and start
fresh.

Your mod needs a "main class". To create it, you'll have to do two things:

- Extend the [`Mod`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/Mod.html)
  class.
- Add your class to `entrypoints.server` on `fabric.mod.json` like how the
  template does it.

::: tip
A mod can have multiple main classes.
:::

We can now start adding commands.

## First command

Create another class, call it something like `HelloCommand` and implement
[`CommandRunnable`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/cmd/CommandRunnable.html)
on it. Now you can put a couple `System.out.println`s to the created method.

You'll need to register this class now. Go to your main class' `init` method
and register your command like so:

##### Suggestion
import static to CommandOptions.* to easy create commands.

```java
registerCommand(
    new CommandOf(
        "hello-command-id",
        CommandOptions.label("hello"),
        CommandOptions.run(new HelloCommand())
    )
);
```

The first 'CommandOf' have to has a label, but not necessary for subCommands of the command.

Now compile your mod, and add it to your `mods/` folder.

You should now be able to use the `/hello` command on your server.

## Command arguments

To add an argument to your command, first define it in your registration:

```java
registerCommand(
    new CommandOf(
        "hello-command-id",
        label("hello"),
        run(new HelloCommand()),
        subCommands(
            new CommandOf(
                "person",
                type(ArgumentType.PLAYER),
                run(new SendHello())
            )
        )
    )
);
```

#### Explation
"hello-command-id" is id of the main command.

label("hello") is /<label>
  
subCommands is /<label> <sub-commands> <..> <..>

If you don't give a label to subCommand, it will be a non-literal argument so,

you can use the command like that /hello playerName or /hello Jack

"person" is a tip to write the argument, if the label didn't set.

type(ArgumentType.PLAYER) is make the argument as player argument, it will suggest you

online players or @a or @e etc.

If there is run method of before the subCommand, the subCommand will be a optional so,

if you use '/hello' command, the system runs 'HelloCommand' so,

if you use '/hello <person>' command, the system runs 'SendHello'

Now go to your command class, and get the value of that argument like so:

```java
Player p = source.getArgPlayer();
```

#### Important
If the player isn't is the server getArgPlayer returns MckPlayer which is a mock.

Try printing it out!

## Events

Now let's edit some chat messages, why not?

Create another class, and implement
[`EventHandler`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/event/EventHandler.html)[`<ChatEvent>`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/event/ChatEvent.html)
on it.

You should now be able to use [`setMessage`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/event/ChatEvent.html#setMessage-java.lang.String-)
on the generated method to edit chat messages, try it out.

You'll also need to register this class, so do it like this on your main class:

```java
registerEvent(new ChatListener()); // ChatListener is your class' name
```

Now, if you were to test your mod, your chat messages should be modified.

## Event list?

You can find all of Okyanus' events [here](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/event/package-summary.html).  
Check the description for `This event fires whenever ...` to see if it's an event or not

## Configuration?

We're bundling [Night Config](https://github.com/TheElectronWill/Night-Config)
with the API, so you can check out their documentation for more info.

::: tip NOTE
Please put all your configuration inside `<server folder>/config/` so all mod
settings can be in a single place.
:::
