const fetch = require("node-fetch");
const boom = require("boom");

const options = {
    method: 'get',
    headers: {
        "Connection": "keep-alive",
        "Cache-Control": "max-age=0",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "Sec-Fetch-Site": "none",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Cookie": "y2018-2-cohort=77; _ga=GA1.3.1546996820.1542988707; __gads=ID=1031000904d8550c:T=1542988710:S=ALNI_Ma4Aei1mRalaHzZz1ihKBx7DZGGtw; y2018-2-cohort=74; fitracking_12=no; use_elastic_search=1; abTestKey=22; _gid=GA1.3.1806595963.1570555252; _hjid=31433504-1325-439d-8d11-bffa7ded399e; SPSI=037cb1b785abd1ad06c83d0506492137; UTGv2=h4769e5442cca30b2e146e7000f52a896b29; yad2_session=payvFuvKkdZTtuLE8Iem2pPmVHZ9ZIuOP2EoG55e; favorites_userid=hcj9135269667; adOtr=bcJ1L778ba5; PRLST=; yad2upload=520093706.38005.0000; spcsrf=340cf24bc68c6bb8216ac615be868b47,y2018-2-cohort=77; _ga=GA1.3.1546996820.1542988707; __gads=ID=1031000904d8550c:T=1542988710:S=ALNI_Ma4Aei1mRalaHzZz1ihKBx7DZGGtw; y2018-2-cohort=74; fitracking_12=no; use_elastic_search=1; abTestKey=22; _gid=GA1.3.1806595963.1570555252; _hjid=31433504-1325-439d-8d11-bffa7ded399e; SPSI=037cb1b785abd1ad06c83d0506492137; UTGv2=h4769e5442cca30b2e146e7000f52a896b29; yad2_session=payvFuvKkdZTtuLE8Iem2pPmVHZ9ZIuOP2EoG55e; favorites_userid=hcj9135269667; adOtr=bcJ1L778ba5; PRLST=; yad2upload=520093706.38005.0000; spcsrf=340cf24bc68c6bb8216ac615be868b47; UTGv2=D-h444c1da8df1cc5eaeea50c8a9cfc7efb470",
        "Postman-Token": "50fff6d6-6ce0-4cfc-b268-57b7bd00af5e,8b7cc4a5-46fb-40d5-86d1-b123871748a6",
        "Host": "www.yad2.co.il",
        "cache-control": "no-cache"
    },
};

async function scrape(alert) {
    const YAD2_URL = `https://www.yad2.co.il/api/pre-load/getFeedIndex/vehicles/private-cars?manufacturer=${alert.manufacturer}&price=${alert.price}&km=${alert.km}&hand=${alert.hand}&engineval=${alert.engineval}&compact-req=1&forceLdLoad=true`;

    let data = await getData(YAD2_URL);
    try {
        return data.feed.feed_items.map(item => item.id);
    } catch (error) {
        throw boom.boomify(err);
    }
}

const getData = async (url) => {
    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    scrape
};
