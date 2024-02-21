

let Guest_List :string[] = ['Imran Khan', 'Nawaz Shareef', 'Asif Ali Zardari'];

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
}
let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Tessori' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
}

console.log(`Mr. ${absent_Guest} is not comming to the party.`)
