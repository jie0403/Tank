import straw from "./src/static/images/straw/straw.png"
import wall from "./src/static/images/wall/wall.gif"
import water from "./src/static/images/water/water.gif"
import steel from "./src/static/images/wall/steels.gif"
import tankTop from "./src/static/images/tank/top.gif"
import tankRight from "./src/static/images/tank/right.gif"
import tankBottom from "./src/static/images/tank/bottom.gif"
import tankLeft from "./src/static/images/tank/left.gif"
import bullet from "./src/static/images/bullet/bullet.jpg"
import boss from "./src/static/images/boss/boss.png"
import playTop from "./src/static/images/player/top.gif"
import playRight from "./src/static/images/player/right.gif"
import playBottom from "./src/static/images/player/bottom.gif"
import playLeft from "./src/static/images/player/left.gif"

export default {
    timeOut: 10,
    // 地图大小
    canvas: {
        width: 900,
        height: 600
    },
    // 模型大小
    model: {
        width: 30,
        height: 30
    },
    // 草元素
    straw: {
        num: 40
    },
    // 砖墙
    wall: {
        num: 60
    },
    // 水元素
    water: {
        num: 40
    },
    // 金属墙
    steel: {
        num: 30
    },
    // npc坦克
    tank: {
        num: 3
    },
    // 贴图
    images: {
        straw,
        wall,
        water,
        steel,
        tankTop,
        tankRight,
        tankBottom,
        tankLeft,
        bullet,
        boss,
        playTop,
        playRight,
        playBottom,
        playLeft,
    }
}