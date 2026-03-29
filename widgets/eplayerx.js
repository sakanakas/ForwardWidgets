const BASE_URL = "https://tmdb.eplayerx.com";
const HEADERS = {
    "accept": "*/*",
    "accept-language": "zh-CN,zh-Hans;q=0.9",
    "content-type": "application/json",
    "user-agent": "EplayerX/41 CFNetwork/3860.500.112 Darwin/25.4.0"
};
WidgetMetadata = {
    id: "nathalie.eplayerx",
    title: "𝑬𝒑𝒍𝒂𝒚𝒆𝒓𝑿",
    version: "1.0.0",
    requiredVersion: "0.0.1",
    description: "获取 EplayerX 主页的榜单数据",
    author: "𝑵𝒂𝒕𝒉𝒂𝒍𝒊𝒆",
    site: "https://tmdb.eplayerx.com",
    modules: [
        {
            title: "今日热门电视剧",
            functionName: "trendingTv",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "语言",
                    type: "input",
                    value: "zh-Hans"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    startPage: 1
                }
            ]
        },
        {
            title: "今日热门电影",
            functionName: "trendingMovie",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "语言",
                    type: "input",
                    value: "zh-Hans"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    startPage: 1
                }
            ]
        },
        {
            title: "今日热门动漫",
            functionName: "doubanAnimation",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "今日热门番剧",
            functionName: "bangumiAnimation",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "正在热播",
            functionName: "tvOnTheAir",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "语言",
                    type: "input",
                    value: "zh-Hans"
                },
                {
                    name: "timezone",
                    title: "时区",
                    type: "input",
                    value: "Asia/Shanghai"
                }
            ]
        },
        {
            title: "实时热门电视剧",
            functionName: "doubanTv",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "实时热门电影",
            functionName: "doubanMovie",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "实时热门综艺",
            functionName: "doubanVariety",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "按分类浏览",
            functionName: "discoverWithGenre",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "语言",
                    type: "input",
                    value: "zh-Hans"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    startPage: 1
                },
                {
                    name: "with_genres",
                    title: "分类",
                    type: "enumeration",
                    value: "18",
                    enumOptions: [
                        {
                            title: "剧情",
                            value: "18"
                        },
                        {
                            title: "喜剧",
                            value: "35"
                        },
                        {
                            title: "悬疑惊悚",
                            value: "9648%2C53"
                        },
                        {
                            title: "动作",
                            value: "28"
                        },
                        {
                            title: "动画",
                            value: "16"
                        },
                        {
                            title: "犯罪",
                            value: "80"
                        },
                        {
                            title: "纪录片",
                            value: "99"
                        },
                        {
                            title: "合家欢",
                            value: "10751"
                        }
                    ]
                },
                {
                    name: "sort_by",
                    title: "类型",
                    type: "enumeration",
                    value: "movie",
                    enumOptions: [
                        { title: "电影", value: "movie" },
                        { title: "电视剧", value: "tv" }
                    ]
                }
            ]
        },
        {
            title: "按语言浏览",
            functionName: "discoverWithLanguage",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "元数据语言",
                    type: "input",
                    value: "zh-Hans"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    startPage: 1
                },
                {
                    name: "with_original_language",
                    title: "原始语言",
                    type: "enumeration",
                    value: "en",
                    enumOptions: [
                        {
                            title: "英语",
                            value: "en"
                        },
                        {
                            title: "中文",
                            value: "zh"
                        },
                        {
                            title: "日语",
                            value: "ja"
                        },
                        {
                            title: "韩语",
                            value: "ko"
                        },
                        {
                            title: "西班牙语",
                            value: "es"
                        },
                        {
                            title: "泰语",
                            value: "th"
                        },
                        {
                            title: "印度语",
                            value: "hi",
                        },
                    ]
                },
                {
                    name: "sort_by",
                    title: "类型",
                    type: "enumeration",
                    value: "movie",
                    enumOptions: [
                        { title: "电影", value: "movie" },
                        { title: "电视剧", value: "tv" }
                    ]
                }
            ]
        },
        {
            title: "按平台浏览",
            functionName: "discoverTv",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "语言",
                    type: "input",
                    value: "zh-Hans"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    startPage: 1
                },
                {
                    name: "with_networks",
                    title: "播出平台",
                    type: "enumeration",
                    value: "213",
                    enumOptions: [
                        {
                            title: "Netflix",
                            value: "213"
                        },
                        {
                            title: "Hulu",
                            value: "453"
                        },
                        {
                            title: "Apple TV+",
                            value: "2552"
                        },
                        {
                            title: "Disney+",
                            value: "2739"
                        },
                        {
                            title: "HBO Max",
                            value: "3186"
                        },
                        {
                            title: "Peacock",
                            value: "3353"
                        },
                        {
                            title: "Prime Video",
                            value: "1024"
                        },
                        {
                            title: "腾讯视频",
                            value: "2007"
                        },
                        {
                            title: "爱奇艺",
                            value: "1330"
                        },
                        {
                            title: "优酷",
                            value: "1419"
                        },
                        {
                            title: "芒果tv",
                            value: "1631"
                        },
                        {
                            title: "哔哩哔哩",
                            value: "1605"
                        }
                    ]
                }
            ]
        },
        {
            title: "高分电影",
            functionName: "movieTopRated",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "语言",
                    type: "input",
                    value: "zh-Hans"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    startPage: 1
                }
            ]
        },
        {
            title: "高分电视剧",
            functionName: "tvTopRated",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "语言",
                    type: "input",
                    value: "zh-Hans"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    startPage: 1
                }
            ]
        }
    ]
}

// https://tmdb.eplayerx.com/tmdb/trending/tv?language=zh-Hans&page=1
async function trendingTv(params) {
    try {
        const url = `/tmdb/trending/tv?language=${params.language}&page=${params.page}`;
        return await fetchData(url);
    } catch (error) {
        console.error("获取今日热门电视剧失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/tmdb/trending/movie?language=zh-Hans&page=1
async function trendingMovie(params) {
    try {
        const url = `/tmdb/trending/movie?language=${params.language}&page=${params.page}`;
        return await fetchData(url);
    } catch (error) {
        console.error("获取今日热门电影失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/crawler/popular/douban/animation
async function doubanAnimation() {
    try {
        return await fetchData("/crawler/popular/douban/animation");
    } catch (error) {
        console.error("获取今日热门动漫失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/crawler/popular/bangumi/animation
async function bangumiAnimation() {
    try {
        return await fetchData("/crawler/popular/bangumi/animation");
    } catch (error) {
        console.error("获取今日热门番剧失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/tmdb/tv/on_the_air?language=zh-Hans&timezone=Asia/Shanghai
async function tvOnTheAir(params) {
    try {
        const url = `/tmdb/tv/on_the_air?language=${params.language}&timezone=${params.timezone}`;
        return await fetchData(url);
    } catch (error) {
        console.error("获取正在热播数据失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/crawler/popular/douban/tv
async function doubanTv() {
    try {
        return await fetchData("/crawler/popular/douban/tv");
    } catch (error) {
        console.error("获取实时热门电视剧失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/crawler/popular/douban/movies
async function doubanMovie() {
    try {
        return await fetchData("/crawler/popular/douban/movies");
    } catch (error) {
        console.error("获取实时热门电影失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/crawler/popular/douban/hot-variety-shows
async function doubanVariety() {
    try {
        return await fetchData("/crawler/popular/douban/hot-variety-shows");
    } catch (error) {
        console.error("获取实时热门综艺失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/tmdb/discover/movie?language=zh-Hans&page=1&with_genres=18
async function discoverWithGenre(params) {
    try {
        const url = `/tmdb/discover/${params.sort_by}?language=${params.language}&page=${params.page}&with_genres=${params.with_genres}`;
        return await fetchData(url);
    } catch (error) {
        console.error("获取按分类浏览数据失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/tmdb/discover/movie?language=zh-Hans&page=1&with_original_language=en
async function discoverWithLanguage(params) {
    try {

        const url = `/tmdb/discover/${params.sort_by}?language=${params.language}&page=${params.page}&with_original_language=${params.with_original_language}`;
        return await fetchData(url);
    } catch (error) {
        console.error("获取按语言浏览数据失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/tmdb/discover/tv?language=zh-Hans&page=1&with_networks=213
async function discoverTv(params) {
    try {
        const url = `/tmdb/discover/tv?language=${params.language}&page=${params.page}&with_networks=${params.with_networks}`;
        return await fetchData(url);
    } catch (error) {
        console.error("获取按平台浏览数据失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/tmdb/movie/top_rated?language=zh-Hans&page=1
async function movieTopRated(params) {
    try {
        const url = `/tmdb/movie/top_rated?language=${params.language}&page=${params.page}`;
        return await fetchData(url);
    } catch (error) {
        console.error("获取高分电影失败:", error);
        throw error;
    }
}

// https://tmdb.eplayerx.com/tmdb/tv/top_rated?language=zh-Hans&page=1
async function tvTopRated(params) {
    try {
        const url = `/tmdb/tv/top_rated?language=${params.language}&page=${params.page}`;
        return await fetchData(url);
    } catch (error) {
        console.error("获取高分电视剧失败:", error);
        throw error;
    }
}

async function fetchData(api) {
    const response = await Widget.http.get(`${BASE_URL}${api}`, { headers: HEADERS });
    if (!response || !response.data) {
        throw new Error("获取 EplayerX 数据失败");
    }

    const payload = response.data;
    const fallbackMediaType = inferMediaTypeFromApi(api);
    // 兼容不同接口返回：[]、{ data: [] }、{ results: [] }、{ items: [] }
    let selectedField = "none";
    let data = [];

    if (Array.isArray(payload)) {
        selectedField = "root";
        data = payload;
    } else if (Array.isArray(payload?.results)) {
        selectedField = "results";
        data = payload.results;
    } else if (Array.isArray(payload?.data)) {
        selectedField = "data";
        data = payload.data;
    } else if (Array.isArray(payload?.items)) {
        selectedField = "items";
        data = payload.items;
    }

    console.log("[EplayerX] 响应解析:", {
        api,
        payloadType: Array.isArray(payload) ? "array" : typeof payload,
        selectedField,
        listLength: data.length,
        fallbackMediaType
    });

    return data.map((item) => normalizeItem(item, fallbackMediaType)).filter(Boolean);
}

function normalizeItem(item, fallbackMediaType) {
    if (!item || typeof item !== "object") {
        return null;
    }

    const title = item.name || item.title;
    const id = item.id || item.tmdbId;
    if (!title || !id) {
        return null;
    }
    const mediaType = item.media_type === "movie" || item.media_type === "tv"
        ? item.media_type
        : (fallbackMediaType || "tv");

    return {
        id,
        type: "tmdb",
        title,
        description: item.overview,
        releaseDate: item.release_date || item.first_air_date,
        posterPath: item.poster_path,
        backdropPath: item.backdrop_path,
        rating: item.vote_average,
        mediaType,
        genreTitle: genreTitleWith(item.genre_ids)
    };
}

function inferMediaTypeFromApi(api) {
    const path = api.toLowerCase();

    if (
        path.includes("/movie/") ||
        path.includes("/trending/movie") ||
        path.includes("/discover/movie")
    ) {
        return "movie";
    }

    if (
        path.includes("/tv/") ||
        path.includes("/trending/tv") ||
        path.includes("/discover/tv")
    ) {
        return "tv";
    }

    return null;
}

function genreTitleWith(genreIds) {
    if (!Array.isArray(genreIds) || genreIds.length === 0) {
        return null;
    }

    const genreMap = {
        10759: "动作冒险",
        16: "动画",
        35: "喜剧",
        80: "犯罪",
        99: "纪录",
        18: "剧情",
        10751: "家庭",
        10762: "儿童",
        9648: "悬疑",
        10763: "新闻",
        10764: "真人秀",
        10765: "科幻奇幻",  // Sci-Fi & Fantasy
        10766: "肥皂剧",
        10767: "脱口秀",
        10768: "战争政治",  // War & Politics
        37: "西部",
        28: "动作",
        12: "冒险",
        14: "奇幻",
        36: "历史",
        27: "恐怖",
        10402: "音乐",
        10749: "爱情",
        878: "科幻",
        10770: "电视电影",
        53: "惊悚",
        10752: "战争"
    };

    return genreIds
        .slice(0, 2)
        .map((id) => genreMap[id])
        .filter(Boolean)
        .join("|");
}