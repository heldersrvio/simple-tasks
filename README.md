# Simple Tasks

An assignment from my Security class. We were tasked to write two websites, one of which was supposed to be naïvely implemented (with no concerns for security) and the other one was supposed to be the secure version of it. This is the vulnerable version.

The app was implemented with ReactJS and with it users can create and edit their tasks when they login (which is mediated with Google Firebase). This version relies exclusively on client-side validation to match a user to its password and, thus, can easily be bypassed. The [secure version](https://github.com/heldersrvio/secure-simple-tasks), instead, lets Firebase manage password and adds proper security rules, which make the app secure.

[Check out the live version](https://heldersrvio.github.io/simple-tasks/).
