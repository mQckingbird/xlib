#!/bin/bash
sudo mkdir /var/run/couchdb
sudo chown -R couchdb:couchdb /var/run/couchdb/
couchdb start