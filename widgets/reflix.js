const BASE_URL = "https://api.reflix.top/discover/v2";
const HEADERS = {
    "accept": "*/*",
    "accept-language": "zh-Hans-US;q=1.0, en-US;q=0.9",
    "user-agent": "ReflixiOS/2.2.1 (com.magicgroot.gooby; build:1; iOS 26.4.0) Alamofire/5.9.1"
};
WidgetMetadata = {
    id: "nathalie.reflix",
    title: "𝑹𝒆𝒇𝒍𝒊𝒙",
    version: "2.3.0",
    requiredVersion: "0.0.1",
    description: "获取 Reflix 主页的榜单数据",
    author: "𝑵𝒂𝒕𝒉𝒂𝒍𝒊𝒆",
    site: "https://api.reflix.top",
    globalParams: [
        {
            name: "language",
            title: "语言",
            type: "enumeration",
            value: "zh-CN",
            enumOptions: [
                {
                    title: "中文",
                    value: "zh-CN"
                },
                {
                    title: "英文",
                    value: "en-US"
                }
            ]
        }
    ],
    modules: [
        {
            title: "海报轮播图",
            functionName: "recommendations",
            type: "video",
            cacheDuration: 60,
            params: [
                {
                    name: "type",
                    title: "类型",
                    type: "enumeration",
                    value: "ordered",
                    enumOptions: [
                        { title: "顺序", value: "ordered" },
                        { title: "随机", value: "random" }
                    ]
                }
            ]
        },
        {
            title: "今日热门剧集",
            functionName: "trendingSeries",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "type",
                    title: "类型",
                    type: "enumeration",
                    value: "homepage",
                    enumOptions: [
                        { title: "首页", value: "homepage" },
                        { title: "详情页", value: "detailpage" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    belongTo: {
                        paramName: "type",
                        value: ["detailpage"]
                    },
                    startPage: 1
                },
                {
                    name: "sort_by",
                    title: "类型排序",
                    type: "enumeration",
                    value: "tv:popularity.desc",
                    belongTo: {
                        paramName: "type",
                        value: ["detailpage"]
                    },
                    enumOptions: [
                        { title: "热门降序", value: "tv:popularity.desc" },
                        { title: "热门升序", value: "tv:popularity.asc" },
                        { title: "评分降序", value: "tv:vote_average.desc" },
                        { title: "评分升序", value: "tv:vote_average.asc" },
                        { title: "上映时间降序", value: "tv:first_air_date.desc" },
                        { title: "上映时间升序", value: "tv:first_air_date.asc" }
                    ]
                }
            ]
        },
        {
            title: "今日热门电影",
            functionName: "trendingMovies",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "type",
                    title: "类型",
                    type: "enumeration",
                    value: "homepage",
                    enumOptions: [
                        { title: "首页", value: "homepage" },
                        { title: "详情页", value: "detailpage" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    belongTo: {
                        paramName: "type",
                        value: ["detailpage"]
                    },
                    startPage: 1
                },
                {
                    name: "sort_by",
                    title: "类型排序",
                    type: "enumeration",
                    value: "movie:popularity.desc",
                    belongTo: {
                        paramName: "type",
                        value: ["detailpage"]
                    },
                    enumOptions: [
                        { title: "热门降序", value: "movie:popularity.desc" },
                        { title: "热门升序", value: "movie:popularity.asc" },
                        { title: "评分降序", value: "movie:vote_average.desc" },
                        { title: "评分升序", value: "movie:vote_average.asc" },
                        { title: "上映时间降序", value: "movie:first_air_date.desc" },
                        { title: "上映时间升序", value: "movie:first_air_date.asc" }
                    ]
                }
            ]
        },
        {
            title: "今日热门动漫",
            functionName: "trendingAnimes",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "实时热门电视",
            functionName: "realTimeTrendingSeries",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "实时热门电影",
            functionName: "realTimeTrendingMovies",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "按分类浏览",
            functionName: "lookupWithGenres",
            type: "video",
            cacheDuration: 3600,
            params: [
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
                            title: "Drama",  // 剧情
                            value: "18"
                        },
                        {
                            title: "Comedy",  // 喜剧 
                            value: "35"
                        },
                        {
                            title: "Thriller & Mystery",  // 悬疑惊悚
                            value: "9648"
                        },
                        {
                            title: "Animation",  // 动画
                            value: "16"
                        },
                        {
                            title: "Crime",  // 犯罪
                            value: "80"
                        },
                        {
                            title: "Documentary",  // 纪录片
                            value: "99"
                        },
                        {
                            title: "Kids & Family",  // 合家欢
                            value: "10751"
                        }
                    ]
                },
                {
                    name: "sort_by",
                    title: "类型排序",
                    type: "enumeration",
                    value: "tv:popularity.desc",
                    enumOptions: [
                        { title: "剧集:热门降序", value: "tv:popularity.desc" },
                        { title: "剧集:热门升序", value: "tv:popularity.asc" },
                        { title: "剧集:评分降序", value: "tv:vote_average.desc" },
                        { title: "剧集:评分升序", value: "tv:vote_average.asc" },
                        { title: "剧集:上映时间降序", value: "tv:first_air_date.desc" },
                        { title: "剧集:上映时间升序", value: "tv:first_air_date.asc" },
                        { title: "电影:热门降序", value: "movie:popularity.desc" },
                        { title: "电影:热门升序", value: "movie:popularity.asc" },
                        { title: "电影:评分降序", value: "movie:vote_average.desc" },
                        { title: "电影:评分升序", value: "movie:vote_average.asc" },
                        { title: "电影:上映时间降序", value: "movie:first_air_date.desc" },
                        { title: "电影:上映时间升序", value: "movie:first_air_date.asc" }
                    ]
                }
            ]
        },
        {
            title: "本周最受欢迎Top10",
            functionName: "topTenThisWeek",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "大家都在看",
            functionName: "peopleAllLikes",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "高分动漫精选",
            functionName: "highRateAnimes",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "按工作室浏览",
            functionName: "lookupWithNetworks",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    startPage: 1
                },
                {
                    name: "with_networks",
                    title: "工作室",
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
                            title: "Paramount+",
                            value: "4330"
                        },
                        {
                            title: "Max",
                            value: "3186"
                        },
                        {
                            title: "Peacock",
                            value: "3353"
                        }
                    ]
                },
                {
                    name: "sort_by",
                    title: "类型排序",
                    type: "enumeration",
                    value: "tv:popularity.desc",
                    enumOptions: [
                        { title: "剧集:热门降序", value: "tv:popularity.desc" },
                        { title: "剧集:热门升序", value: "tv:popularity.asc" },
                        { title: "剧集:评分降序", value: "tv:vote_average.desc" },
                        { title: "剧集:评分升序", value: "tv:vote_average.asc" },
                        { title: "剧集:上映时间降序", value: "tv:first_air_date.desc" },
                        { title: "剧集:上映时间升序", value: "tv:first_air_date.asc" },
                        { title: "电影:热门降序", value: "movie:popularity.desc" },
                        { title: "电影:热门升序", value: "movie:popularity.asc" },
                        { title: "电影:评分降序", value: "movie:vote_average.desc" },
                        { title: "电影:评分升序", value: "movie:vote_average.asc" },
                        { title: "电影:上映时间降序", value: "movie:first_air_date.desc" },
                        { title: "电影:上映时间升序", value: "movie:first_air_date.asc" }
                    ]
                }
            ]
        },
        {
            title: "认证的新鲜电影",
            functionName: "certifiedFreshMovies",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "认证的新鲜剧集",
            functionName: "certifiedFreshSeries",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "一周口碑电影榜",
            functionName: "movieWeeklyBest",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "一周华语口碑剧集榜",
            functionName: "tvChineseBestWeekly",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "一周全球口碑剧集榜",
            functionName: "tvGlobalBestWeekly",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "一周国内口碑综艺榜",
            functionName: "showChineseBestWeekly",
            type: "video",
            cacheDuration: 3600,
            params: []
        },
        {
            title: "一周国外口碑综艺榜",
            functionName: "showGlobalBestWeekly",
            type: "video",
            cacheDuration: 3600,
            params: []
        }
    ]
};


// https://api.reflix.top/discover/v2?language=zh-CN
async function recommendations(params) {
    try {
        const allData = await fetchAllData(params.language);
        const items = (allData.recommendations || []).map(normalizeItem).filter(Boolean);
        if (params.type === "random") {
            return shuffleItems(items);
        }
        return items;
    } catch (error) {
        console.error("获取海报轮播图失败:", error);
        throw error;
    }
}

async function trendingSeries(params) {
    try {
        // 今日热门剧集-首页
        if (params.type === "homepage") {
            const allData = await fetchAllData(params.language);
            return (allData.trending_series || []).map(normalizeItem).filter(Boolean);
        } else {
            // 今日热门剧集-详情页
            return await fetchLookupItems(params, null, "/trending/*/day");
        }
    } catch (error) {
        console.error("获取今日热门剧集失败:", error);
        throw error;
    }
}

async function trendingMovies(params) {
    try {
        // 今日热门电影-首页
        if (params.type === "homepage") {
            const allData = await fetchAllData(params.language);
            return (allData.trending_movies || []).map(normalizeItem).filter(Boolean);
        } else {
            // 今日热门电影-详情页
            return await fetchLookupItems(params, null, "/trending/*/day");
        }
    } catch (error) {
        console.error("获取今日热门电影失败:", error);
        throw error;
    }
}

async function trendingAnimes(params) {
    try {
        const allData = await fetchAllData(params.language);
        return (allData.trending_animes || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取今日热门动漫失败:", error);
        throw error;
    }
}

async function realTimeTrendingSeries(params) {
    try {
        const allData = await fetchAllData(params.language);
        const collection = allData.real_time_trending_series_collection;
        return (collection?.items || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取实时热门电视失败:", error);
        throw error;
    }
}

async function realTimeTrendingMovies(params) {
    try {
        const allData = await fetchAllData(params.language);
        const collection = allData.real_time_trending_movie_collection;
        return (collection?.items || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取实时热门电影失败:", error);
        throw error;
    }
}

// https://api.reflix.top/lookup?language=zh-CN&path=/discover/tv?with_genres%3D18%26page%3D1%26sort_by%3Dpopularity.desc
async function lookupWithGenres(params) {
    try {
        return await fetchLookupItems(params, "with_genres", "/discover/*");
    } catch (error) {
        console.error("获取按分类浏览数据失败:", error);
        throw error;
    }
}

async function topTenThisWeek(params) {
    try {
        const allData = await fetchAllData(params.language);
        return (allData.top_ten_this_week || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取本周最受欢迎Top10失败:", error);
        throw error;
    }
}

async function peopleAllLikes(params) {
    try {
        const allData = await fetchAllData(params.language);
        return (allData.people_all_likes || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取大家都在看失败:", error);
        throw error;
    }
}

async function highRateAnimes(params) {
    try {
        const allData = await fetchAllData(params.language);
        return (allData.high_rate_animes || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取高分动漫精选失败:", error);
        throw error;
    }
}

// https://api.reflix.top/lookup?language=zh-CN&path=/discover/tv?with_networks%3D213%26page%3D1%26sort_by%3Dpopularity.desc
async function lookupWithNetworks(params) {
    try {
        return await fetchLookupItems(params, "with_networks", "/discover/*");
    } catch (error) {
        console.error("获取按工作室浏览数据失败:", error);
        throw error;
    }
}

async function certifiedFreshMovies(params) {
    try {
        const allData = await fetchAllData(params.language);
        return (allData.certified_fresh_movies || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取认证的新鲜电影失败:", error);
        throw error;
    }
}

async function certifiedFreshSeries(params) {
    try {
        const allData = await fetchAllData(params.language);
        return (allData.certified_fresh_series || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取认证的新鲜剧集失败:", error);
        throw error;
    }
}

async function movieWeeklyBest(params) {
    try {
        const allData = await fetchAllData(params.language);
        const randomCollection = allData.random_collection || [];
        const collection = randomCollection.find(c => c.id === "douban_movie_weekly_best");
        return (collection?.items || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取一周口碑电影榜失败:", error);
        throw error;
    }
}

async function tvChineseBestWeekly(params) {
    try {
        const allData = await fetchAllData(params.language);
        const randomCollection = allData.random_collection || [];
        const collection = randomCollection.find(c => c.id === "douban_tv_chinese_best_weekly");
        return (collection?.items || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取一周华语口碑剧集榜失败:", error);
        throw error;
    }
}

async function tvGlobalBestWeekly(params) {
    try {
        const allData = await fetchAllData(params.language);
        const randomCollection = allData.random_collection || [];
        const collection = randomCollection.find(c => c.id === "douban_tv_global_best_weekly");
        return (collection?.items || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取一周全球口碑剧集榜失败:", error);
        throw error;
    }
}

async function showChineseBestWeekly(params) {
    try {
        const allData = await fetchAllData(params.language);
        const randomCollection = allData.random_collection || [];
        const collection = randomCollection.find(c => c.id === "douban_show_chinese_best_weekly");
        return (collection?.items || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取一周国内口碑综艺榜失败:", error);
        throw error;
    }
}

async function showGlobalBestWeekly(params) {
    try {
        const allData = await fetchAllData(params.language);
        const randomCollection = allData.random_collection || [];
        const collection = randomCollection.find(c => c.id === "douban_show_global_best_weekly");
        return (collection?.items || []).map(normalizeItem).filter(Boolean);
    } catch (error) {
        console.error("获取一周国外口碑综艺榜失败:", error);
        throw error;
    }
}

async function fetchAllData(language) {
    const response = await Widget.http.get(`${BASE_URL}?language=${language}`, { headers: HEADERS });
    if (!response || !response.data) {
        throw new Error("获取 Reflix 数据失败");
    }

    console.log("[Reflix] 响应解析:", {
        url: BASE_URL,
        language,
        payloadType: typeof response.data
    });

    return response.data;
}

function shuffleItems(items) {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

async function fetchLookupItems(params, filterKey, pathTemplate) {
    const [mediaType, sortBy] = params.sort_by.split(":");
    const lookupPath = pathTemplate.replace("*", mediaType);
    const lookupPathQueryParts = [
        `page=${params.page}`,
        `sort_by=${sortBy}`
    ];
    if (filterKey) {
        lookupPathQueryParts.unshift(`${filterKey}=${params[filterKey]}`);
    }
    const lookupPathQuery = lookupPathQueryParts.join("&");

    const query = [
        `language=${params.language}`,
        `path=${lookupPath}?${encodeURIComponent(lookupPathQuery)}`
    ].join("&");

    const response = await Widget.http.get(`https://api.reflix.top/lookup?${query}`, { headers: HEADERS });
    if (!response || !response.data) {
        throw new Error("获取 Reflix Lookup 数据失败");
    }

    const payload = response.data;
    const items = Array.isArray(payload?.items) ? payload.items : [];

    console.log("[Reflix Lookup] 响应解析:", {
        url: "https://api.reflix.top/lookup",
        language: params.language,
        path: `${lookupPath}?${lookupPathQuery}`,
        listLength: items.length
    });

    return items.map(normalizeItem).filter(Boolean);
}

function normalizeItem(item) {
    if (!item || typeof item !== "object") {
        return null;
    }

    // 处理 Reflix 的数据格式
    const title = item.name || item.title;
    const id = item.id || item.tmdbId;
    if (!title || !id) {
        return null;
    }

    const mediaType = (item.media_type || item.type) === "movie" ? "movie" : "tv";

    return {
        id,
        type: "tmdb",
        title,
        description: item.overview || item.description,
        releaseDate: item.year,
        posterPath: item.poster_image_url,
        backdropPath: item.backdrop_image_url,
        rating: item.vote_average,
        mediaType,
        genreTitle: genreTitleWith(item.genres)
    };
}

function genreTitleWith(genreData) {
    if (!genreData || genreData.length === 0) {
        return null;
    }

    const genreNameMap = {
        "Sci-Fi & Fantasy": "科幻奇幻",
        "War & Politics": "战争政治"
    };

    // 如果是字符串数组，直接取前两个
    if (typeof genreData[0] === "string") {
        return genreData
            .slice(0, 2)
            .map((name) => genreNameMap[name] || name)
            .join("|");
    }

    // 如果是 ID 数组，使用映射
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

    return genreData
        .slice(0, 2)
        .map((id) => genreMap[id])
        .filter(Boolean)
        .join("|");
}