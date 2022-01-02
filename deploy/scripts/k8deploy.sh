#!/bin/bash

if [ -z "$1" ]
then
    echo "Must input a correct short git sha"
    exit 1
fi


if [ -z "$2" ]
then
    echo "Must input a correct deployment id"
    exit 1
fi

if [ -z "$3" ]
then
    echo "Must input a correct environment"
    exit 1
fi

SHORT_GIT_SHA="$1"
FOLDER_ID="$2"
ENV="$3"

cd /deployments/work/$FOLDER_ID

export TAG="$ENV$SHORT_GIT_SHA"

envsubst < deploy/base/deployment.yaml > tempbase
cat tempbase > deploy/base/deployment.yaml
rm tempbase

microk8s kubectl apply -k "deploy/$ENV" -n "$ENV"

sleep 10s

microk8s kubectl wait --for=condition=ready pod -l app=zusui -n "$ENV" --timeout=10m

cd /deployments
