# Video v10 — Basado en v8, texto centrado en escenas finales (no tapa montañas)
# Salida: public/marketing/semilla-climatica-facebook-ad-v10.mp4

$ErrorActionPreference = "Stop"
$Root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$OutDir = Join-Path $Root "public\marketing"
$TmpDir = Join-Path $OutDir "tmp-v10"
$ImgDir = Join-Path $TmpDir "images"
$VideoOnly = Join-Path $TmpDir "video-no-audio.mp4"
$Final = Join-Path $OutDir "semilla-climatica-facebook-ad-v10.mp4"
$FontMono = "C\:/Windows/Fonts/consolab.ttf"
$D = 4.0
$X = 0.5

New-Item -ItemType Directory -Force -Path $OutDir, $TmpDir, $ImgDir | Out-Null

$SharedImg = Join-Path $OutDir "tmp-v8\images"
if (-not (Test-Path (Join-Path $ImgDir "artemis-earth-moon.jpg"))) {
  Copy-Item (Join-Path $SharedImg "*") -Destination $ImgDir -Force -ErrorAction SilentlyContinue
  Copy-Item (Join-Path $OutDir "tmp-v5\images\*") -Destination $ImgDir -Force -ErrorAction SilentlyContinue
  Copy-Item (Join-Path $OutDir "tmp-v4\images\*") -Destination $ImgDir -Force -ErrorAction SilentlyContinue
  $assets = "C:\Users\julio\.cursor\projects\c-Proyectos-misitio\assets"
  Copy-Item "$assets\palestina-guerra-2026.jpg","$assets\sequia-calor-extremo.jpg","$assets\ucrania-rusia-guerra.jpg" -Destination $ImgDir -Force -ErrorAction SilentlyContinue
}

if (-not (Test-Path (Join-Path $ImgDir "ucrania-rusia-guerra.jpg"))) {
  Copy-Item (Join-Path $OutDir "tmp-v10\images\ucrania-rusia-guerra.jpg") -Destination (Join-Path $ImgDir "ucrania-rusia-guerra.jpg") -Force -ErrorAction SilentlyContinue
}

$PathImage = Join-Path $ImgDir "vertedero-camino-basura-v7.jpg"
$PathClip = Join-Path $TmpDir "landfill-road-forward-v10.mp4"

if (-not (Test-Path $PathImage)) {
  $candidates = @(
    "C:\Users\julio\.cursor\projects\c-Proyectos-misitio\assets\vertedero-camino-basura-v7.jpg",
    (Join-Path $OutDir "tmp-v7\images\vertedero-camino-basura-v7.jpg")
  )
  foreach ($c in $candidates) {
    if (Test-Path $c) { Copy-Item $c -Destination $PathImage -Force; break }
  }
}

Write-Host "Creando clip vuelo hacia adelante por el camino..."
$flyFrames = 540
# Zoom fijo suave + avance lineal hacia el horizonte (sin efecto tunel)
$flyVf = @(
  "scale=3200:3200:force_original_aspect_ratio=increase",
  "zoompan=z='1.07':d=${flyFrames}:x='iw/2-(iw/zoom/2)':y='(ih*0.72-on*0.00050)-(ih/zoom/2)':s=1080x1080:fps=30",
  "eq=contrast=1.06:saturation=1.05"
) -join ","
& ffmpeg -y -loop 1 -i $PathImage -vf $flyVf -t 18 -an -c:v libx264 -preset slow -crf 15 -pix_fmt yuv420p $PathClip
if ($LASTEXITCODE -ne 0) { throw "Path forward clip failed" }

$MusicPath = Join-Path $TmpDir "music-modern.mp3"
if (-not (Test-Path $MusicPath)) {
  $sharedMusic = Join-Path $OutDir "tmp-v5\music-modern.mp3"
  if (Test-Path $sharedMusic) { Copy-Item $sharedMusic $MusicPath -Force }
  else { Invoke-WebRequest -Uri "https://assets.mixkit.co/music/871/871.mp3" -OutFile $MusicPath -TimeoutSec 120 }
}

function Escape-FfText {
  param([string]$t)
  return ($t -replace "'", "" -replace ":", "\:" -replace "\\", "\\\\")
}

function Get-TopBadge {
  param([string]$Line1, [string]$Line2 = "")
  $l1 = Escape-FfText $Line1
  $l2 = if ($Line2) { Escape-FfText $Line2 } else { "" }
  $filters = @(
    "drawbox=x=0:y=0:w=iw:h=54:color=0xB71C1C@0.93:t=fill",
    "drawbox=x=0:y=54:w=5:h=44:color=0xF4A024:t=fill",
    "drawtext=fontfile='$FontMono':text='$l1':fontsize=26:fontcolor=white:x=20:y=12:enable='between(t,0.1,10)'"
  )
  if ($Line2) {
    $filters += "drawtext=fontfile='C\:/Windows/Fonts/arial.ttf':text='$l2':fontsize=22:fontcolor=0xFFCC80:x=20:y=34:enable='between(t,0.15,10)'"
  }
  return $filters
}

function New-StoryImage {
  param(
    [string]$Image, [string]$Out, [double]$Dur = $D,
    [string[]]$Texts, [string[]]$Sizes = @(), [string[]]$Colors = @(), [string[]]$Ypos = @(),
    [string]$TopLine1 = "", [string]$TopLine2 = "", [switch]$Static
  )
  $frames = [int]($Dur * 30)
  if ($Static) {
    $base = @("scale=1080:1080:force_original_aspect_ratio=increase","crop=1080:1080","fps=30","eq=contrast=1.06:saturation=1.06","vignette=PI/6")
  } else {
    $z = "min(zoom+0.00025,1.035)"
    $base = @(
      "scale=1400:1400:force_original_aspect_ratio=increase",
      "zoompan=z='$z':d=${frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1080:fps=30",
      "eq=contrast=1.06:saturation=1.06","vignette=PI/6"
    )
  }
  if ($TopLine1) { $base += Get-TopBadge -Line1 $TopLine1 -Line2 $TopLine2 }
  $fontPath = "C\:/Windows/Fonts/arial.ttf"
  $fontBoldPath = "C\:/Windows/Fonts/arialbd.ttf"
  $textFilters = @()
  for ($i = 0; $i -lt $Texts.Count; $i++) {
    $t = Escape-FfText $Texts[$i]
    $fs = if ($Sizes.Count -gt $i -and $Sizes[$i]) { $Sizes[$i] } else { "36" }
    $fc = if ($Colors.Count -gt $i -and $Colors[$i]) { $Colors[$i] } else { "white" }
    $defaultY = if ($Texts.Count -eq 1) { "h*0.92" } elseif ($i -eq 0) { "h*0.86" } else { "h*0.94" }
    $y = if ($Ypos.Count -gt $i -and $Ypos[$i]) { $Ypos[$i] } else { $defaultY }
    $font = if ([int]$fs -ge 44) { $fontBoldPath } else { $fontPath }
    $delay = 0.2 + ($i * 0.12)
    $textFilters += "drawtext=fontfile='$font':text='$t':fontsize=${fs}:fontcolor=${fc}:x=(w-text_w)/2:y='$y':enable='between(t,${delay},$($Dur-0.1))'"
  }
  $vf = ($base + $textFilters) -join ","
  & ffmpeg -y -loop 1 -i $Image -vf $vf -t $Dur -an -c:v libx264 -preset slow -crf 15 -pix_fmt yuv420p $Out
  if ($LASTEXITCODE -ne 0) { throw "Scene failed: $Out" }
}

function New-StoryVideo {
  param(
    [string]$InputVideo, [double]$Start, [string]$Out, [double]$Dur = $D,
    [string[]]$Texts, [string[]]$Sizes = @(), [string[]]$Colors = @(), [string[]]$Ypos = @(),
    [string]$TopLine1 = "", [string]$TopLine2 = "",
    [switch]$Bright
  )
  $base = @(
    "scale=1280:1280:force_original_aspect_ratio=increase",
    "crop=1280:1280:x='(iw-1280)/2':y='(ih-1280)/2'",
    "scale=1080:1080","fps=30","eq=contrast=1.06:saturation=1.06"
  )
  if (-not $Bright) { $base += "vignette=PI/6" }
  if ($TopLine1) { $base += Get-TopBadge -Line1 $TopLine1 -Line2 $TopLine2 }
  $fontPath = "C\:/Windows/Fonts/arial.ttf"
  $fontBoldPath = "C\:/Windows/Fonts/arialbd.ttf"
  $textFilters = @()
  for ($i = 0; $i -lt $Texts.Count; $i++) {
    $t = Escape-FfText $Texts[$i]
    $fs = if ($Sizes.Count -gt $i -and $Sizes[$i]) { $Sizes[$i] } else { "36" }
    $fc = if ($Colors.Count -gt $i -and $Colors[$i]) { $Colors[$i] } else { "white" }
    $defaultY = if ($Texts.Count -eq 1) { "h*0.92" } elseif ($i -eq 0) { "h*0.86" } else { "h*0.94" }
    $y = if ($Ypos.Count -gt $i -and $Ypos[$i]) { $Ypos[$i] } else { $defaultY }
    $font = if ([int]$fs -ge 44) { $fontBoldPath } else { $fontPath }
    $delay = 0.2 + ($i * 0.12)
    $textFilters += "drawtext=fontfile='$font':text='$t':fontsize=${fs}:fontcolor=${fc}:x=(w-text_w)/2:y='$y':enable='between(t,${delay},$($Dur-0.1))'"
  }
  $vf = ($base + $textFilters) -join ","
  & ffmpeg -y -ss $Start -i $InputVideo -t $Dur -vf $vf -an -c:v libx264 -preset slow -crf 15 -pix_fmt yuv420p $Out
  if ($LASTEXITCODE -ne 0) { throw "Video scene failed: $Out" }
}

Write-Host "Renderizando v10 (texto centrado en vertedero)..."

New-StoryImage -Image (Join-Path $ImgDir "iran-guerra-2026.jpg") -Out (Join-Path $TmpDir "s01.mp4") -Static `
  -Texts @("En medio de guerras y conflictos","geopoliticos que parecen nunca acabar") -Sizes @("40","40")
New-StoryImage -Image (Join-Path $ImgDir "palestina-guerra-2026.jpg") -Out (Join-Path $TmpDir "s02.mp4") -Static `
  -Texts @("existe algo que todos pasan por alto") -Sizes @("42")
New-StoryImage -Image (Join-Path $ImgDir "ucrania-rusia-guerra.jpg") -Out (Join-Path $TmpDir "s03.mp4") -Static `
  -Texts @("un impacto irreversible","si no hacemos algo") -Sizes @("44","44") -Colors @("0xF4A024","white")
New-StoryImage -Image (Join-Path $ImgDir "artemis-earth-moon.jpg") -Out (Join-Path $TmpDir "s04.mp4") -Static `
  -TopLine1 "ABR 2026  ARTEMIS II" -TopLine2 "Foto real Artemis II - Tierra desde la Luna" `
  -Texts @("EL PLANETA TIERRA NOS AVISA!") -Sizes @("48") -Colors @("0xF4A024")
New-StoryImage -Image (Join-Path $ImgDir "venezuela-terremoto-2026.jpg") -Out (Join-Path $TmpDir "s05.mp4") -Static `
  -TopLine1 "24 JUN 2026  VENEZUELA" -TopLine2 "Terremoto M 7.5 - Caracas y La Guaira" `
  -Texts @("Terremotos mas frecuentes") -Sizes @("44")
New-StoryImage -Image (Join-Path $ImgDir "guatemala-volcano-news.jpg") -Out (Join-Path $TmpDir "s06.mp4") -Static `
  -TopLine1 "AGO 2026  GUATEMALA" -TopLine2 "Volcan de Fuego - mas de 50 horas ardiendo - foto real" `
  -Texts @("Volcanes en erupcion","como nunca se habia visto") -Sizes @("44","36")
New-StoryImage -Image (Join-Path $ImgDir "otis-acapulco-devastacion.jpg") -Out (Join-Path $TmpDir "s07.mp4") -Static `
  -TopLine1 "OTIS  ACAPULCO 2023" -TopLine2 "Cat. 5 en pocas horas - dato real SMN/NOAA" `
  -Texts @("Huracanes") -Sizes @("48")
New-StoryImage -Image (Join-Path $ImgDir "inundaciones-agosto.jpg") -Out (Join-Path $TmpDir "s08.mp4") -Static `
  -TopLine1 "AGO 2026  INUNDACIONES" -TopLine2 "Lluvias historicas - ciudades bajo el agua" `
  -Texts @("Lluvias torrenciales") -Sizes @("44")
New-StoryImage -Image (Join-Path $ImgDir "sequia-calor-extremo.jpg") -Out (Join-Path $TmpDir "s09.mp4") -Static `
  -TopLine1 "MEXICO  2026" -TopLine2 "Sequias y temperaturas fuera de lo normal" `
  -Texts @("Sequias y calor extremo") -Sizes @("44")

New-StoryVideo -InputVideo $PathClip -Start 0 -Out (Join-Path $TmpDir "s10.mp4") -Dur 5.0 -Bright `
  -Texts @("Solo hay una guerra que no podremos ganar","Y existe una fecha de no retorno","Actua hoy") `
  -Sizes @("42","38","50") -Colors @("0xFF5252","0xF4A024","0x66BB6A") `
  -Ypos @("h*0.38","h*0.46","h*0.54")

$cta = @(
  "scale=1280:1280:force_original_aspect_ratio=increase","crop=1280:1280","scale=1080:1080","fps=30",
  "eq=contrast=1.06:saturation=1.06",
  "drawtext=fontfile='C\:/Windows/Fonts/arial.ttf':text='Cuanto gastaste hoy en comida chatarra?':fontsize=40:fontcolor=white:x=(w-text_w)/2:y=h*0.36:enable='between(t,0.2,5.2)'",
  "drawtext=fontfile='C\:/Windows/Fonts/arialbd.ttf':text='20 PESOS VAN AL CLIMA':fontsize=72:fontcolor=0xF4A024:x=(w-text_w)/2:y=h*0.44:enable='between(t,0.4,5.2)'",
  "drawtext=fontfile='C\:/Windows/Fonts/arialbd.ttf':text='DONA AHORA':fontsize=58:fontcolor=white:x=(w-text_w)/2:y=h*0.52:enable='between(t,0.65,5.2)'",
  "drawtext=fontfile='C\:/Windows/Fonts/arial.ttf':text='semillaclimatica.com/donar':fontsize=34:fontcolor=0xA5D6A7:x=(w-text_w)/2:y=h*0.58:enable='between(t,0.85,5.2)'"
) -join ","
& ffmpeg -y -ss 6 -i $PathClip -t 5.5 -vf $cta -an -c:v libx264 -preset slow -crf 15 -pix_fmt yuv420p (Join-Path $TmpDir "s11.mp4")

$o = $D - $X; $o9 = $o * 9; $o10 = $o9 + 5.0 - $X
$xf = @"
[0:v][1:v]xfade=transition=fadeblack:duration=${X}:offset=$o[v01];
[v01][2:v]xfade=transition=fade:duration=${X}:offset=$($o*2)[v02];
[v02][3:v]xfade=transition=fadeblack:duration=${X}:offset=$($o*3)[v03];
[v03][4:v]xfade=transition=fade:duration=${X}:offset=$($o*4)[v04];
[v04][5:v]xfade=transition=fadeblack:duration=${X}:offset=$($o*5)[v05];
[v05][6:v]xfade=transition=fadeblack:duration=${X}:offset=$($o*6)[v06];
[v06][7:v]xfade=transition=fadeblack:duration=${X}:offset=$($o*7)[v07];
[v07][8:v]xfade=transition=fade:duration=${X}:offset=$($o*8)[v08];
[v08][9:v]xfade=transition=fadeblack:duration=${X}:offset=$o9[v09];
[v09][10:v]xfade=transition=fade:duration=${X}:offset=$o10[vout]
"@
$inputs = 1..11 | ForEach-Object { Join-Path $TmpDir ("s{0:D2}.mp4" -f $_) }
$ffmpegArgs = @("-y") + ($inputs | ForEach-Object { "-i"; $_ }) + @("-filter_complex", $xf, "-map", "[vout]", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "15", "-pix_fmt", "yuv420p", "-movflags", "+faststart", $VideoOnly)
Write-Host "Uniendo escenas..."
& ffmpeg @ffmpegArgs
if ($LASTEXITCODE -ne 0) { throw "xfade failed" }

$vidDur = [double](ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 $VideoOnly)
$fadeOut = [math]::Max(0, $vidDur - 2.5)
& ffmpeg -y -ss 5 -i $MusicPath -t ($vidDur + 3) `
  -af "afade=t=in:st=0:d=1.8,afade=t=out:st=${fadeOut}:d=2.8,volume=0.92,highpass=f=100,lowpass=f=15000,dynaudnorm=f=100:g=10" `
  -c:a libmp3lame -b:a 192k (Join-Path $TmpDir "music-bed.mp3")
& ffmpeg -y -i $VideoOnly -i (Join-Path $TmpDir "music-bed.mp3") `
  -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart $Final

$mb = [math]::Round((Get-Item $Final).Length / 1MB, 1)
$dur = ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 $Final
Write-Host ""
Write-Host "VIDEO v10: $Final"
Write-Host "$([math]::Round([double]$dur,1)) s | $mb MB"
