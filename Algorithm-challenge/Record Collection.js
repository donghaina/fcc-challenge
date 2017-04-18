/*
给你的是表示一个音乐专辑集合的一部分json对象，每一个专辑有几个属性和唯一的ID作为它的key，不是所有的专辑都有完整的翻译。

写一个函数，这个函数带有专辑的ID，一个属性和一个属性值，去改变这个集合，

如果属性不是tracks，并且值不为空，更新这个值到集合对应的属性
你的函数总是会返回集合对象

下面是一些处理不完整数据的规则

如果属性是tracks，但是集合没有tracks属性，在添加新值到专辑对应属性之前，创建一个空数组。
如果属性是tracks和值不为空，添加数据到专辑已经存在的tracks数组末尾
如果值是空，从专辑里删除被给的属性
*/

// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (prop === 'tracks' && value !== '') {
        if (collectionCopy[id][prop]) {
            collectionCopy[id][prop].push(value);
        } else {
            var arr = [];
            arr.push(value);
            collectionCopy[id][prop] = arr;
        }
    } else if (value === '') {
        delete collectionCopy[id][prop];
    } else {
        collectionCopy[id][prop] = value;
    }
    return collectionCopy;
}

console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
