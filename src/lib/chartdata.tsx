"use server";

export async function getCandlestickData() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/candlestick-data");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getBarData() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/bar-chart-data");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getLineData() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/line-chart-data");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getPieData() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/pie-chart-data");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
