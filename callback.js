

var atlantide = {
    name: null,
    version: "0.10",
    sync: function(fn) {
        fn()
    },
    async: function(fn) {
        return new Promise(resolve =>{
            setTimeout(()=> {
                resolve(fn())
            }, 0)
        })
    }
}


console.log(atlantide.version)
atlantide.async(function(){
    console.log("salut")
})
console.log("encore")

