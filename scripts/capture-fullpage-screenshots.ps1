$ErrorActionPreference = "Stop"

$root = "E:\BosonSmart\boson-smart-phase1-site"
Set-Location $root

$baseUrl = "http://localhost:5173/ismart"

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$outDir = Join-Path $root "screenshots\$timestamp"

New-Item -ItemType Directory -Force $outDir | Out-Null

Write-Host "`nChecking local dev server..." -ForegroundColor Cyan

try {
  Invoke-WebRequest -Uri "$baseUrl/" -UseBasicParsing -TimeoutSec 5 | Out-Null
} catch {
  Write-Host "`nLocal site is not running." -ForegroundColor Red
  Write-Host "Open another PowerShell window and run:" -ForegroundColor Yellow
  Write-Host "cd `"E:\BosonSmart\boson-smart-phase1-site`""
  Write-Host "npm run dev"
  Write-Host "`nThen run this screenshot script again." -ForegroundColor Yellow
  exit 1
}

$pages = @(
  @{ Name = "home";      Url = "$baseUrl/" },
  @{ Name = "scenarios"; Url = "$baseUrl/#scenarios" },
  @{ Name = "solutions"; Url = "$baseUrl/#solutions" },
  @{ Name = "services";  Url = "$baseUrl/#services" },
  @{ Name = "estimate";  Url = "$baseUrl/#estimate" },
  @{ Name = "contact";   Url = "$baseUrl/#contact" }
)

$viewports = @(
  @{ Name = "desktop"; Size = "1440,1400" },
  @{ Name = "mobile";  Size = "390,1200" }
)

foreach ($viewport in $viewports) {
  $viewportDir = Join-Path $outDir $viewport.Name
  New-Item -ItemType Directory -Force $viewportDir | Out-Null

  foreach ($page in $pages) {
    $file = Join-Path $viewportDir "$($page.Name)-$($viewport.Name).png"

    Write-Host "Capturing $($page.Name) / $($viewport.Name)..." -ForegroundColor Cyan

    npx -y playwright@latest screenshot `
      --browser=chromium `
      --full-page `
      --viewport-size=$($viewport.Size) `
      --wait-for-timeout=1200 `
      "$($page.Url)" `
      "$file"
  }
}

Write-Host "`nDone." -ForegroundColor Green
Write-Host "Screenshots saved to:" -ForegroundColor Cyan
Write-Host $outDir
