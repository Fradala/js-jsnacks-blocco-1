const firstAge = parseInt( prompt( 'scrivi la tua età'))
const secondAge = parseInt( prompt( 'scrivi la tua età'))

if(firstAge.length > secondAge.length) {
    console.log( 'la prima è più grande:', firstAge);

} else if (secondAge.length > firstAge.length){
    console.log ( 'la seconda è più grande:' ,secondAge);


}else{
    console.log ('tutte e due sono grandi uguali', firstAge , secondAge);
}
