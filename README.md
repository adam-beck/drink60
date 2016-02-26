# Play60

Play60 is a Google Music interface for the drinking game [Power Hour](https://en.wikipedia.org/wiki/Power_hour). By harnessing the power of the
Google Music library, you will have access to a dynamic experience that is simple to use.


# PLEASE

Alcohol need not be involved. But if you do, please drink responsibly. And above all else, do not drive while under the influence. Self-driving cars
are on the horizon so until then we need to keep the roads safe.

# Development

This application is currently under development. It was created with the intentions of becoming familiar with the Google Music API only to find out
that it is very difficult and there is no public facing interface. This is all possible thanks to the [gmusicapi](https://github.com/simon-weber/gmusicapi) created
by [simon-weber](https://github.com/simon-weber). 

In order to get this very basic prototype working you must supply your Google Music account details via environment variables:
- GMUSIC_USERNAME: your Google Music username
- GMUSIC_PASSWORD: the password associated with the provided GMUSIC_USERNAME 

You must install all the node modules using `npm install` and start the server using `node server.js`. 
This starts a server at `localhost:3005` which when accessed via the browser gives a very basic front end.
The station has currenlty been chosen for you: 90's Alternative Rock. Also, the game doesn't end. It will continue to play songs even well past the 1 hour mark.

Lot's to be done yet!
