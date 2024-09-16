const map = new Map()

map.set("1","one")
map.set("2","two")
map.set("3","three")

// console.log(map)

for (const [key,value] of map) {
    console.log(key);
    
}