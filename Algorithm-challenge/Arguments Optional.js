function addTogether() {
    /*var args = Array.prototype.slice.call(arguments);
        if (args.length === 2) {
            if (Number.isFinite(args[0]) && Number.isFinite(args[1])) {
                return args[0] + args[1];
            } else {
                return undefined;
            }
        } else {
            var a = args[0];
            if (Number.isFinite(a)) {
                return function(b) {
                    if (Number.isFinite(b)) {
                        return a + b;
                    } else {
                        return undefined;
                    }
                };
            } else {
                return undefined;
            }
        }*/
    var result = args.every(function(item) {
        return Number.isFinite(item);
    });
    // return result===false?undefined:"can contine";
    if (result === false) {
        return undefined;
    } else {
        // return "can contine";
        if (args.length === 2) {
            return args[0] + args[1];
        } else {
            var a = args[0];
            return function(b) {
                if (Number.isFinite(b)) {
                    return a + b;
                } else {
                    return undefined;
                }
            };
        }
    }

}

console.log(addTogether(2)(3));
