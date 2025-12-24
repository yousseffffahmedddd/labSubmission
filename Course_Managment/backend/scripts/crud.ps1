<#
PowerShell CRUD helper for courses API
Usage examples (PowerShell):
  .\crud.ps1 -Action list
  .\crud.ps1 -Action create -Body '{"title":"Intro","description":"...","instructor":"Jane","price":49.99,"duration":10}'
  .\crud.ps1 -Action get -Id <id>
  .\crud.ps1 -Action update -Id <id> -Body '{"title":"Updated"}'
  .\crud.ps1 -Action delete -Id <id>
#>

param(
  [Parameter(Mandatory=$true)] [ValidateSet('list','create','get','update','delete')] [string]$Action,
  [string]$Id,
  [string]$Body,
  [string]$ApiBase = $(if ($env:NEXT_PUBLIC_API_URL) { $env:NEXT_PUBLIC_API_URL } else { 'http://localhost:2000' })
)

function Show-Usage {
  Write-Host "Usage: crud.ps1 -Action <list|create|get|update|delete> [-Id <id>] [-Body <json>] [-ApiBase <url>]"
}

switch ($Action) {
  'list' {
    Invoke-RestMethod -Method Get -Uri "$ApiBase/api/courses" | ConvertTo-Json -Depth 5
  }
  'create' {
    if (-not $Body) { Write-Error 'Missing -Body'; Show-Usage; break }
    $json = $Body | ConvertFrom-Json
    Invoke-RestMethod -Method Post -Uri "$ApiBase/api/courses" -Body ($json | ConvertTo-Json -Depth 5) -ContentType 'application/json' | ConvertTo-Json -Depth 5
  }
  'get' {
    if (-not $Id) { Write-Error 'Missing -Id'; Show-Usage; break }
    Invoke-RestMethod -Method Get -Uri "$ApiBase/api/courses/$Id" | ConvertTo-Json -Depth 5
  }
  'update' {
    if (-not $Id -or -not $Body) { Write-Error 'Missing -Id or -Body'; Show-Usage; break }
    $json = $Body | ConvertFrom-Json
    Invoke-RestMethod -Method Put -Uri "$ApiBase/api/courses/$Id" -Body ($json | ConvertTo-Json -Depth 5) -ContentType 'application/json' | ConvertTo-Json -Depth 5
  }
  'delete' {
    if (-not $Id) { Write-Error 'Missing -Id'; Show-Usage; break }
    Invoke-RestMethod -Method Delete -Uri "$ApiBase/api/courses/$Id" | ConvertTo-Json -Depth 5
  }
  default {
    Show-Usage
  }
}
