import fetch from "node-fetch";
import { WeatherInfo } from "./WeatherInfo";

// 非同期で天気情報を取得
export async function receiveWeatherInfo(url: string): Promise<WeatherInfo> {
    // URLに非同期でアクセスしてデータを取得
    const response = await fetch(url);
    // 取得データを非同期でJSONに変換
    const weatherInfoJSON = await response.json();
    // WeatherInfoオブジェクトを生成
    const weatherInfo = new WeatherInfo(weatherInfoJSON);
    return weatherInfo;
}