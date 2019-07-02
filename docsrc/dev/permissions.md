# The permission system

## Using permissions

Permissions are based around [`Permissible`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/perms/Permissible.html)
objects. `Player`, and `CommandSource` being the ones you'll most likely want
to use.

In permissible, there is the [`hasPermission(permission)`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/perms/Permissible.html#hasPermission-java.lang.String-)
method, which is how you should check if something has the neccesary permissions.

## Creating a permission plugin

To create your own permissions plugin, you'll need to implement a [`PermissionService`](https://okyanus-mc.github.io/api/club/issizler/okyanus/api/perms/PermissionService.html)

We use [Java SPI](https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html)
to get references to your permission service, here is an quick summary of how to
register your own permission service:

To register your permission service, create a file named `META-INF/services/club.issizler.okyanus.api.perms.PermissionService`
and put the full name (including the package name) of your permission service
implementation class in it.
