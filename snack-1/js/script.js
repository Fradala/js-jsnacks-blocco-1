const firstAge = parseInt( prompt( 'scrivi la tua età'))
const secondAge = parseInt( prompt( 'scrivi la tua età'))

if(firstAge> secondAge) {
    console.log( 'la prima è più grande:', firstAge);

} else if (secondAge > firstAge){
    console.log ( 'la seconda è più grande:' ,secondAge);


}else{
    console.log ('tutte e due sono grandi uguali', firstAge , secondAge);
}
