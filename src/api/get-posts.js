var names = ['but','what','in','the','but']

const getPosts = (number) =>{
    let ret = [];
    for(var i = 0; i < number; i++){
        ret.push( 
            {
                author: names[i%names.length],
                content: "Loren Ipson dolor sit aemt"
            }
        )
    }
    console.log(ret.length);
    return ret;
}

export default getPosts;