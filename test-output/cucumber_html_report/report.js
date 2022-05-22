$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/BarCabinets.feature");
formatter.feature({
  "name": "Bar Cabinets",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Land on Bar Cabinets Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user on website",
  "keyword": "Given "
});
formatter.match({
  "location": "MainClass.user_on_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Bar Cabinets",
  "keyword": "When "
});
formatter.match({
  "location": "MainClass.click_on_Bar_Cabinets()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"content\"]/div[1]/div/h1\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MINDC1D277\u0027, ip: \u0027172.16.97.192\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\MINDSD~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53778}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f4618ff0806507ed77bb035cc7c2291b\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"content\"]/div[1]/div/h1}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.mindtree.reusablecomponents.WebDriverHelper.getText(WebDriverHelper.java:22)\r\n\tat com.mindtree.pageobject.BarCabinetPage.getBarCabinetTitle(BarCabinetPage.java:21)\r\n\tat com.stepDefinitions.MainClass.click_on_Bar_Cabinets(MainClass.java:111)\r\n\tat ✽.click on Bar Cabinets(file:Features/BarCabinets.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close the page",
  "keyword": "Then "
});
formatter.match({
  "location": "MainClass.close_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:Features/BeanBag.feature");
formatter.feature({
  "name": "Bean Bag",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Land on Bean Bag Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user on website",
  "keyword": "Given "
});
formatter.match({
  "location": "MainClass.user_on_website()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MINDC1D277\u0027, ip: \u0027172.16.97.192\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\MINDSD~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53837}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2568a5b6fb808ede24893a6a31c8a40d\n*** Element info: {Using\u003dxpath, value\u003d//input[@class\u003d\u0027button primary\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.mindtree.reusablecomponents.WebDriverHelper.clickOn(WebDriverHelper.java:9)\r\n\tat com.mindtree.pageobject.LoginPage.clickOnSub(LoginPage.java:32)\r\n\tat com.stepDefinitions.MainClass.user_on_website(MainClass.java:44)\r\n\tat ✽.user on website(file:Features/BeanBag.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on Bean Page",
  "keyword": "When "
});
formatter.match({
  "location": "MainClass.click_on_Bean_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the page",
  "keyword": "Then "
});
formatter.match({
  "location": "MainClass.close_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:Features/Gift.feature");
formatter.feature({
  "name": "Gift",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Land on Gift Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user on website",
  "keyword": "Given "
});
formatter.match({
  "location": "MainClass.user_on_website()"
});
