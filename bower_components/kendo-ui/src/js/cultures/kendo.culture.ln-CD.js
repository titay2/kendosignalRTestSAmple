/** 
 * Kendo UI v2018.1.503 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2018 Telerik AD. All rights reserved.                                                                                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["ln-CD"] = {
        name: "ln-CD",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Congolese Franc",
                abbr: "CDF",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "FC"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["eyenga","mokɔlɔ mwa yambo","mokɔlɔ mwa míbalé","mokɔlɔ mwa mísáto","mokɔlɔ ya mínéi","mokɔlɔ ya mítáno","mpɔ́sɔ"],
                    namesAbbr: ["eye","ybo","mbl","mst","min","mtn","mps"],
                    namesShort: ["eye","ybo","mbl","mst","min","mtn","mps"]
                },
                months: {
                    names: ["sánzá ya yambo","sánzá ya míbalé","sánzá ya mísáto","sánzá ya mínei","sánzá ya mítáno","sánzá ya motóbá","sánzá ya nsambo","sánzá ya mwambe","sánzá ya libwa","sánzá ya zómi","sánzá ya zómi na mɔ̌kɔ́","sánzá ya zómi na míbalé"],
                    namesAbbr: ["yan","fbl","msi","apl","mai","yun","yul","agt","stb","ɔtb","nvb","dsb"]
                },
                AM: ["AM","am","AM"],
                PM: ["PM","pm","PM"],
                patterns: {
                    d: "d/M/yyyy",
                    D: "dddd d MMMM yyyy",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    g: "d/M/yyyy HH:mm",
                    G: "d/M/yyyy HH:mm:ss",
                    m: "MMMM d",
                    M: "MMMM d",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy MMMM",
                    Y: "yyyy MMMM"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));