#!/bin/bash

REPO_DIR="/var/apache/portfolio"

cd $REPO_DIR || exit
whoami

sudo -E /usr/bin/git pull origin main
