"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weatherinfo_receiver_1 = require("./weatherinfo-receiver");
// API Keyを本ファイルの同階層に配置されている.envファイルからインポートする想定
var dotenv = require("dotenv");
// アクセス先URLの基本部分
var weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather";
function retrieve_api_key() {
    // 環境変数をロード
    // ※本ファイルの同階層に配置されている.envファイルを想定
    dotenv.config();
    var apiKey = process.env.API_KEY;
    console.log("API Key: ".concat(apiKey));
    // const safeApiKey: string = apiKey ?? "can not retrieve api key";
    return apiKey;
}
var api_key = retrieve_api_key();
if (api_key == undefined) {
    throw new Error("API_KEYが設定されていません。環境変数を確認してください。");
}
// クエリパラメータの元データとなるオブジェクトリテラル
var params = {
    // 言語設定のクエリパラメータ
    lang: "ja",
    // 都市名を表すクエリパラメータ
    q: "Himeji",
    // APIキーのクエリパラメータ
    appId: api_key
};
// クエリパラメータを生成
var queryParams = new URLSearchParams(params);
// 実際にアクセスするURL
var urlFull = "".concat(weatherinfoUrl, "?").concat(queryParams);
var promise = (0, weatherinfo_receiver_1.receiveWeatherInfo)(urlFull);
// 非同期処理が成功した場合
promise.then(function (weatherInfo) {
    // WeatherInfoオブジェクトから必要情報を取得して表示漏れつを生成
    var message = "\u73FE\u5728\u306E".concat(weatherInfo.cityName, "\u306E\u5929\u6C17\u306F\u3001").concat(weatherInfo.weatherDesc, "\u3067\u3059\u3002 \n \u7DEF\u5EA6\u306F").concat(weatherInfo.latitude, "\u3067\u7D4C\u5EA6\u306F").concat(weatherInfo.longitude, "\u3067\u3059\u3002");
    // 表示
    console.log(message);
});
// 非同期処理でエラーが発生した場合
promise.catch(function (error) {
    var message = "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002 \n \u30A8\u30E9\u30FC\u5185\u5BB9: ".concat(error);
    console.log(message);
});
// 非同期処理の成功、エラーに関わらず行う処理を定義
promise.finally(function () {
    console.log("全ての処理が終了しました");
});
