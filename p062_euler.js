/** https://projecteuler.net/problem=62
 * solution in Javascript
 * ian.leiman@gmail.com
 * 
 * The cube, 41063625 (345^3), can be permuted to produce two other cubes: 56623104 (384^3) and 66430125 (405^3). 
 * In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.
 * Find the smallest cube for which exactly five permutations of its digits are cube.
 * 
 * execute this on command line if you have node installed
 * node .\p062_euler.js
 * 
 * Answer:  127035954683
 */

/**
 * the first approach can be used to study cubes that have these permutations
 */
const answer = 127035954683;

function distSig(x){
    // calculates a digit distribution signature of a number
    // returns number of digits and array with how many digits each the number contains
    let xs = String(x);
    let sig = [0,0,0,0,0,0,0,0,0,0,0];
    siglen = xs.length; // set the length of the number in digits
    for (let i=xs.length-1; i >= 0; i--){ // check all the digits 
        digit = xs[i] ; // get the decimal digit
        sig[digit]++; // increment the count of this digit
    }
    // let sigstr = sig.reverse().join("");
    let sigstr = sig.join("");
    return [siglen, sigstr]; //parseInt( sigstr );
}

// configuration settings for this algorithm, can tweak to use for further 
// numerology studies
/*
the below settings will find all 12 digit cubes that have 5 permutations
    let printLimit = 3; // print only 5 permutation sets
    let maxRoot = 9999; // biggest root that has 12 digits
    let minRoot = 4642; // smallest root that has 12 digits
    let maxDig = 13; // stop before 13 digits 
    let minDig =12;  // start from 12 digits
*/
function p062_alg1(printLimit, maxRoot, minRoot, maxDig, minDig)
{
    // internal variables
    let root = 0;
    let cube = 0;
    let sig = []; 
    let sigbylen = [];
    let res = [];

    // init arrays for each digit lengths
    for (i= minDig; i < maxDig; i++){
        sigbylen[i] = Array();
    }

    for (root=minRoot; root < maxRoot; root++){
        cube = root*root*root;
        sig = distSig(cube);
        sigbylen[sig[0]].push( [root, cube, parseInt( sig[1] ) ] );
        // console.log(root, cube, sig);
    }

    for (i= minDig; i < maxDig; i++){
        let sl = sigbylen[i].length;
        console.log("***", i, sl);
        let sarr = sigbylen[i];
        let sigsorted = sarr.sort(function (a,b){return a[2] - b[2] });

        let key = 0;
        let count = 0;
        let sa = [];
        for(j=0; j < sl; j++){
            let thisSig = sigsorted[j][2];
            if (thisSig != key) {
                if (count > printLimit){
                    console.log( key, count+1, sa);
                    if (count == 4) {res.push(sa) }
                }
                key = thisSig;
                count = 0;
                sa = [];
            } else {
                if (count == 0) sa.push(sigsorted[j-1][1]); 
                count++; 
                sa.push(sigsorted[j][1]);  

            }
            //console.log( sigsorted[j] );

        }
    }
    let result = 9999999999999;
    for (i=0; i < res.length; i++){
        result = Math.min(result, res[i][0]);
    }
    correct = answer == result;
    console.log("#1 answer is: " + result + " is correct " + correct);
}


/**
 * another approach that is simpler and more brute force, slightly slower
 */
function p062_alg2()
{
    let oCube = [];
    for(var i=0; true; i++){
        var mCube = String(i*i*i);
        var cubeNum = mCube.split('');
        cubeNum.sort();
        var p = cubeNum.join('')
        if(oCube[p] == undefined){
            oCube[p] = [];
        }
        oCube[p].push(mCube);
        if(oCube[p].length>=5){
            console.log(oCube[p]);
            break;
        }
    }
    alg2result = oCube[p][0];
    correct = answer == alg2result;
    console.log("#2 answer is: " + alg2result + " is correct " + correct);
}

// here we call the different algorithms and time them
console.log("Solving projecteuler problem #062, solution #1");
console.time("1");
p062_alg1(3, 9999, 4642, 13, 12); // args can be tweaked to produce more or less output
console.timeEnd("1");

console.log("solution #2");
console.time("2");
p062_alg2();
console.timeEnd("2");
