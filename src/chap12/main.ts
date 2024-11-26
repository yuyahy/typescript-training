// receiveWeatherInfo関数をインポート
import { WeatherInfo } from "./WeatherInfo";
import { receiveWeatherInfo } from "./weatherinfo-receiver";
// API Keyを本ファイルの同階層に配置されている.envファイルからインポートする想定
import * as dotenv from "dotenv";

// アクセス先URLの基本部分
const weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather";

function retrieve_api_key(): string | undefined {
    // 環境変数をロード
    // ※本ファイルの同階層に配置されている.envファイルを想定
    dotenv.config();

    const apiKey: string | undefined = process.env.API_KEY;
    console.log(`API Key: ${apiKey}`);
    // const safeApiKey: string = apiKey ?? "can not retrieve api key";

    return apiKey;
}

const api_key = retrieve_api_key();
if (api_key == undefined) {
    throw new Error("API_KEYが設定されていません。環境変数を確認してください。");
}

// クエリパラメータの元データとなるオブジェクトリテラル
const params: {
    lang: string,
    q: string,
    appId: string
} =
{
    // 言語設定のクエリパラメータ
    lang: "ja",
    // 都市名を表すクエリパラメータ
    q: "Himeji",
    // APIキーのクエリパラメータ
    appId: api_key
}

// クエリパラメータを生成
const queryParams = new URLSearchParams(params);
// 実際にアクセスするURL
const urlFull = `${weatherinfoUrl}?${queryParams}`;

const promise = receiveWeatherInfo(urlFull);
// 非同期処理が成功した場合
promise.then(
    function (weatherInfo: WeatherInfo) {
        // WeatherInfoオブジェクトから必要情報を取得して表示漏れつを生成
        const message = `現在の${weatherInfo.cityName}の天気は、${weatherInfo.weatherDesc}です。 \n 緯度は${weatherInfo.latitude}で経度は${weatherInfo.longitude}です。`;
        // 表示
        console.log(message);
    }
);

// 非同期処理でエラーが発生した場合
promise.catch(
    function (error) {
        const message = `エラーが発生しました。 \n エラー内容: ${error}`;
        console.log(message);
    }
);

// 非同期処理の成功、エラーに関わらず行う処理を定義
promise.finally(
    function () {
        console.log("全ての処理が終了しました");
    }
)

