#!/bin/bash
#!/usr/local/bin/npm
NAME_IMG=wallet-app
VERSION=1.4.3

ng build --prod
docker image build -t ${NAME_IMG} .
