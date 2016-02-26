# Make sure to not use any print statements as the node server
# is communicating with this script based on the output of prints
#
# It might make sense to implement a messaging service that will handle
# the communication in a much cleaner manner

import re
import os
import json
from gmusicapi import Mobileclient

username = os.environ.get( 'GMUSIC_USERNAME' )
password = os.environ.get( 'GMUSIC_PASSWORD' )

api = Mobileclient()
logged_in = api.login(username, password, Mobileclient.FROM_MAC_ADDRESS)

tracks = api.get_station_tracks('44b0d91f-1696-303b-ade0-3f67767a47da', 1)

track_urls = []

class Track(object):
    id = ""
    title = ""
    artist = ""
    url = ""

    def __init__(self, id, title, artist, url):
        self.id = id
        self.title = title
        self.artist = artist
        self.url = url

for track in tracks:
    track_id = track.get('storeId').encode('utf8')
    track_title = track.get('title').encode('utf8')
    track_artist = track.get('artist').encode('utf8')
    track_url = api.get_stream_url(track_id)

    new_track = Track(track_id, track_title, track_artist, track_url)

print json.dumps(new_track.__dict__)
