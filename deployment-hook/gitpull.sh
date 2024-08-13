#!/bin/bash

REPO_DIR="/var/apache/portfolio"

cd $REPO_DIR || exit

/usr/bin/git pull origin main
