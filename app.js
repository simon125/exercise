//INPUT 5,7,9,10 counts
const a = ['123  -  123 - 1233',
    '321  -    123  - 2-213',
    '342    - 1233 - 321 ',
    '34  -32 32- 43-112',
    '32       1432123',
    'asd   21312 1233  as12321ads2        qe312',
    '32112',
    '1234sdlkj   --   as567',
    '1323',
    '123     456qwer789',
    '12s     sdf     ssss       ssss/..??  345afsgfa[].//.6789123456',
    '23ee   1aasda2      32eeeeee            1']


////OUTPUT VALID FORMAT STRING
//  xxx-xx          5
//  xxx-xxx         6
//  xxx-xx-xx       7
//  xxx-xxx-xx      8
//  xxx-xxx-xxx     9
//  xxx-xxx-xx-xx   10
//  xxx-xxx-xxx-xx  11



const parseToValidString = str => {

    const validString = str
        .split('')
        .filter(el => {
            if (!isNaN(el * 1) && el.trim() !== '') return true
            else return false
        })
        .reduce((previous, current, i, arr) => {


            if (arr.length % 3 === 0) { ///////3,6,9,12,15...

                if ((i + 1) % 3 === 0 && arr.length !== (i + 1)) return previous + current + '-'
                else return previous + current
            } else if (arr.length % 2 === 0 && arr.length % 3 !== 0 || arr.length % 2 !== 0) { //// 4,8,10,14...
                if (arr.length - (i + 1) === 2) return previous + current + '-'
                else if ((i + 1) % 3 === 0 && arr.length !== (i + 1) && (arr.length - (i + 1)) !== 1) return previous + current + '-'
                else return previous + current
            }
        }, '')

    return validString
}

a.forEach(el => {
    console.log(parseToValidString(el))
})

/////3 foo
/////5 bar
/////3&5 fobar
/////number

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 || i % 3 !== 0 && i % 5 !== 0) (i % 3 === 0) && (i % 5 === 0) ? console.log('foobar') : console.log(i)
    else (i % 3 === 0) ? console.log('foo') : console.log('bar')
}




