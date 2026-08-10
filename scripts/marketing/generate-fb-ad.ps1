# Genera video publicitario para Facebook - Semilla Climatica
# Salida: public/marketing/semilla-climatica-facebook-ad.mp4

$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$OutDir = Join-Path $Root "public\marketing"
$TmpDir = Join-Path $OutDir "tmp"
$FontBold = "'C\:/Windows/Fonts/arialbd.ttf'"
$FontReg = "'C\:/Windows/Fonts/arial.ttf'"
$Final = Join-Path $OutDir "semilla-climatica-facebook-ad.mp4"

New-Item -ItemType Directory -Force -Path $OutDir, $TmpDir | Out-Null

$SolarUrl = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85"
$SolarPath = Join-Path $TmpDir "solar.jpg"
if (-not (Test-Path $SolarPath)) {
  Invoke-WebRequest -Uri $SolarUrl -OutFile $SolarPath
}

function New-Scene {
  param(
    [string]$InputImage,
    [string]$OutputVideo,
    [int]$DurationSec,
    [string[]]$DrawTexts
  )

  $frames = $DurationSec * 30
  $base = @(
    "scale=1080:1080:force_original_aspect_ratio=increase",
    "crop=1080:1080",
    "zoompan=z='min(zoom+0.0008,1.12)':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1080:fps=30"
  )
  $vf = ($base + $DrawTexts) -join ","

  & ffmpeg -y -loop 1 -i $InputImage -vf $vf -t $DurationSec -an -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p $OutputVideo
  if ($LASTEXITCODE -ne 0) { throw "ffmpeg failed: $OutputVideo" }
}

$planet = Join-Path $Root "public\images\thermometer-planet-lava.jpg"
$coast = Join-Path $Root "public\images\extreme-weather-coast.jpg"

$shadow = "shadowcolor=black@0.75:shadowx=3:shadowy=3"

New-Scene -InputImage $planet -OutputVideo (Join-Path $TmpDir "s1.mp4") -DurationSec 4 -DrawTexts @(
  "drawtext=fontfile=${FontBold}:text='MEXICO NO PUEDE ESPERAR':fontsize=48:fontcolor=white:${shadow}:x=(w-text_w)/2:y=h*0.30",
  "drawtext=fontfile=${FontBold}:text='OTRO VERANO RECORD':fontsize=56:fontcolor=0xF4A024:${shadow}:x=(w-text_w)/2:y=h*0.40",
  "drawtext=fontfile=${FontReg}:text='1.9C HOY en Mexico':fontsize=36:fontcolor=white:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.52",
  "drawtext=fontfile=${FontReg}:text='Mas caliente que el planeta entero':fontsize=30:fontcolor=white:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.62"
)

New-Scene -InputImage $coast -OutputVideo (Join-Path $TmpDir "s2.mp4") -DurationSec 5 -DrawTexts @(
  "drawtext=fontfile=${FontBold}:text='CADA GRADO CUENTA':fontsize=52:fontcolor=white:${shadow}:x=(w-text_w)/2:y=h*0.28",
  "drawtext=fontfile=${FontBold}:text='2C entre 2040 y 2050':fontsize=44:fontcolor=0xE53935:${shadow}:x=(w-text_w)/2:y=h*0.40",
  "drawtext=fontfile=${FontReg}:text='Olas de calor. Sequias. Huracanes.':fontsize=36:fontcolor=white:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.52",
  "drawtext=fontfile=${FontReg}:text='El planeta sigue temblando y ardiendo':fontsize=30:fontcolor=white:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.62"
)

New-Scene -InputImage $planet -OutputVideo (Join-Path $TmpDir "s3.mp4") -DurationSec 5 -DrawTexts @(
  "drawtext=fontfile=${FontBold}:text='CORPORACIONES ROMPIERON':fontsize=44:fontcolor=white:${shadow}:x=(w-text_w)/2:y=h*0.30",
  "drawtext=fontfile=${FontBold}:text='SUS PROMESAS DE NET ZERO':fontsize=44:fontcolor=white:${shadow}:x=(w-text_w)/2:y=h*0.40",
  "drawtext=fontfile=${FontReg}:text='32 empresas emiten la mitad del CO2':fontsize=34:fontcolor=0xF4A024:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.54",
  "drawtext=fontfile=${FontReg}:text='Los gobiernos incumplen Paris.':fontsize=36:fontcolor=white:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.64"
)

New-Scene -InputImage $SolarPath -OutputVideo (Join-Path $TmpDir "s4.mp4") -DurationSec 5 -DrawTexts @(
  "drawtext=fontfile=${FontBold}:text='SEMILLA CLIMATICA':fontsize=56:fontcolor=0x2E7D5A:${shadow}:x=(w-text_w)/2:y=h*0.30",
  "drawtext=fontfile=${FontReg}:text='Fondo permanente para crear soluciones hoy':fontsize=34:fontcolor=white:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.44",
  "drawtext=fontfile=${FontReg}:text='y cambiar el futuro.':fontsize=34:fontcolor=white:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.52",
  "drawtext=fontfile=${FontReg}:text='Accion. Influencia. Resultados.':fontsize=36:fontcolor=0xF4A024:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.64"
)

$ctaFilter = @(
  "drawtext=fontfile=${FontBold}:text='Cuanto gastaste en comida chatarra?':fontsize=40:fontcolor=white:${shadow}:x=(w-text_w)/2:y=h*0.32",
  "drawtext=fontfile=${FontBold}:text='20 PESOS VAN AL CLIMA':fontsize=64:fontcolor=0xF4A024:${shadow}:x=(w-text_w)/2:y=h*0.44",
  "drawtext=fontfile=${FontReg}:text='Badge verificado + Muro Digital':fontsize=32:fontcolor=white:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.58",
  "drawtext=fontfile=${FontBold}:text='DONA AHORA':fontsize=52:fontcolor=white:box=1:boxcolor=0xF4A024@0.95:boxborderw=18:${shadow}:x=(w-text_w)/2:y=h*0.70",
  "drawtext=fontfile=${FontReg}:text='semillaclimatica.com/donar':fontsize=34:fontcolor=0x8BA898:shadowcolor=black@0.75:shadowx=2:shadowy=2:x=(w-text_w)/2:y=h*0.82"
) -join ","

& ffmpeg -y -f lavfi -i "color=c=0x0a0f0d:s=1080x1080:d=6" -vf $ctaFilter -t 6 -an -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p (Join-Path $TmpDir "s5.mp4")
if ($LASTEXITCODE -ne 0) { throw "ffmpeg failed: cta scene" }

$concatList = Join-Path $TmpDir "concat.txt"
@"
file 's1.mp4'
file 's2.mp4'
file 's3.mp4'
file 's4.mp4'
file 's5.mp4'
"@ | Set-Content -Path $concatList -Encoding ASCII

Push-Location $TmpDir
& ffmpeg -y -f concat -safe 0 -i concat.txt -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -movflags +faststart $Final
Pop-Location

if ($LASTEXITCODE -ne 0) { throw "ffmpeg concat failed" }

$sizeMb = [math]::Round((Get-Item $Final).Length / 1MB, 1)
Write-Host ""
Write-Host "Video listo: $Final"
Write-Host "Tamanio: $sizeMb MB"
Write-Host "Duracion: 25 segundos | Formato: 1080x1080 (Facebook Feed/Reels)"
