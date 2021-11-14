from hashlib import sha1
import hmac
from wsgiref.handlers import format_date_time
from datetime import datetime
from time import mktime
import base64
from pprint import pprint
import asyncio
import aiohttp
from get_docker_secret import get_docker_secret

import urllib.parse as urlparse
from urllib.parse import urlencode

app_id = get_docker_secret('app_id', "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF")
app_key = get_docker_secret('app_key', "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF")


class Auth():

    def __init__(self, app_id, app_key):
        self.app_id = app_id
        self.app_key = app_key

    def get_auth_header(self):
        xdate = format_date_time(mktime(datetime.now().timetuple()))
        hashed = hmac.new(self.app_key.encode('utf8'),
                          ('x-date: ' + xdate).encode('utf8'), sha1)
        signature = base64.b64encode(hashed.digest()).decode()
        authorization = 'hmac username="' + self.app_id + '", ' + \
                        'algorithm="hmac-sha1", ' + \
                        'headers="x-date", ' + \
                        'signature="' + signature + '"'
        return {
            'Authorization': authorization,
            'x-date': format_date_time(mktime(datetime.now().timetuple())),
            'Accept - Encoding': 'gzip'
        }


async def getTdxApiData(url, query=None):
    if query:
        url += '?'+urlencode(query)
    a = Auth(app_id, app_key)
    print(url)
    async with aiohttp.ClientSession(headers=a.get_auth_header()) as session:
        async with session.get(url) as r:
            return await r.json()


if __name__ == '__main__':
    query = {'$top': 30, '$format': 'JSON'}
    url = 'https://ptx.transportdata.tw/MOTC/v2/Bus/Stop/City/Taipei'
    pprint(asyncio.run(getTdxApiData(url, query)))
