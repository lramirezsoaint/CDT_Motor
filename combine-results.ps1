$files = @(
    "test-results-bloque3-upload-part1.json",
    "test-results-bloque3-upload-part2.json",
    "test-results-bloque3-upload-part3.json",
    "test-results-bloque3-upload-part4.json",
    "test-results-bloque3-upload-part5.json"
)

$combinedResults = @{
    config = $null
    suites = @()
    errors = @()
    stats = @{
        startTime = $null
        duration = 0
        expected = 0
        skipped = 0
        unexpected = 0
        flaky = 0
    }
}

foreach ($file in $files) {
    if (Test-Path $file) {
        $json = Get-Content $file -Raw | ConvertFrom-Json
        
        if ($json.config -and -not $combinedResults.config) {
            $combinedResults.config = $json.config
        }
        
        $combinedResults.suites += $json.suites
        $combinedResults.errors += $json.errors
        
        # Update stats
        if (-not $combinedResults.stats.startTime) {
            $combinedResults.stats.startTime = $json.stats.startTime
        }
        
        $combinedResults.stats.duration += [double]$json.stats.duration
        $combinedResults.stats.expected += [int]$json.stats.expected
        $combinedResults.stats.skipped += [int]$json.stats.skipped
        $combinedResults.stats.unexpected += [int]$json.stats.unexpected
        $combinedResults.stats.flaky += [int]$json.stats.flaky
    }
}

$combinedResults | ConvertTo-Json -Depth 10 | Set-Content "test-results-bloque3-upload-combined.json"
Write-Host "Combined results saved to test-results-bloque3-upload-combined.json"