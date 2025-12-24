#!/usr/bin/env bash
# Simple CRUD helper for the courses API
# Usage examples:
# ./crud.sh list
# ./crud.sh create '{"title":"A","description":"B","instructor":"C","price":10,"duration":5}'
# ./crud.sh get <id>
# ./crud.sh update <id> '{"title":"New title"}'
# ./crud.sh delete <id>

API_BASE=${API_BASE:-http://localhost:2000}

function usage() {
  cat <<'USAGE'
Usage: crud.sh <command> [args]

Commands:
  list                          GET  /api/courses
  create <json>                 POST /api/courses  -> JSON body as single argument
  get <id>                      GET  /api/courses/:id
  update <id> <json>            PUT  /api/courses/:id -> JSON body as single argument
  delete <id>                   DELETE /api/courses/:id

Examples:
  ./crud.sh list
  ./crud.sh create '{"title":"Intro","description":"...","instructor":"Jane","price":49.99,"duration":10}'
  ./crud.sh get 650c1a2b3d4f5a6b7c8d9e0f
  ./crud.sh update 650c1a2b3d4f5a6b7c8d9e0f '{"title":"Updated"}'
  ./crud.sh delete 650c1a2b3d4f5a6b7c8d9e0f
USAGE
}

if [ $# -lt 1 ]; then
  usage
  exit 1
fi

CMD=$1; shift

case "$CMD" in
  list)
    curl -sS "$API_BASE/api/courses" | jq '.' || curl -sS "$API_BASE/api/courses"
    ;;

  create)
    if [ $# -lt 1 ]; then echo "Missing JSON body"; usage; exit 1; fi
    BODY=$1
    curl -sS -X POST "$API_BASE/api/courses" -H "Content-Type: application/json" -d "$BODY" | jq '.' || echo
    ;;

  get)
    if [ $# -lt 1 ]; then echo "Missing id"; usage; exit 1; fi
    ID=$1
    curl -sS "$API_BASE/api/courses/$ID" | jq '.' || echo
    ;;

  update)
    if [ $# -lt 2 ]; then echo "Missing id or JSON body"; usage; exit 1; fi
    ID=$1; BODY=$2
    curl -sS -X PUT "$API_BASE/api/courses/$ID" -H "Content-Type: application/json" -d "$BODY" | jq '.' || echo
    ;;

  delete)
    if [ $# -lt 1 ]; then echo "Missing id"; usage; exit 1; fi
    ID=$1
    curl -sS -X DELETE "$API_BASE/api/courses/$ID" | jq '.' || echo
    ;;

  *)
    usage
    exit 1
    ;;
esac
