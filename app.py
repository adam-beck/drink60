import re
import os
from gmusicapi import Mobileclient

username = os.environ.get( 'GMUSIC_USERNAME' )
password = os.environ.get( 'GMUSIC_PASSWORD' )

api = Mobileclient()
api.login(GMUSIC_USERNAME, GMUSIC_PASSWORD, Mobileclient.FROM_MAC_ADDRESS)

tracks = api.get_station_tracks('44b0d91f-1696-303b-ade0-3f67767a47da', 1)

track_urls = []

for track in tracks:
    track_id = track.get('storeId').encode('utf8')
    track_urls.append(api.get_stream_url(track_id))


print 'FOOBAR'.join(track_urls)
