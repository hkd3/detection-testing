try {
  var sh  = new ActiveXObject("WScript.Shell");
  var env = sh.Environment("PROCESS");
  var calc = '%SystemRoot%\\system32\\calc.exe';
  if (env("PROCESSOR_ARCHITECTURE") === "x86" && env("PROCESSOR_ARCHITEW6432") !== "") {
    calc = '%SystemRoot%\\SysNative\\calc.exe'; // 32bitホスト→64bit実体
  }
  sh.Run('"' + calc + '"', 1, false);
} catch (e) {
  // 失敗時の処理（ログなど）
}
